#!/usr/bin/env python3
"""Deterministically convert the legacy Redocly portal into a Mintlify project."""

from __future__ import annotations

import csv
import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path, PurePosixPath


ROOT = Path(__file__).resolve().parents[1]
MIRROR = ROOT / "mirror"
SOURCE_HOST = "https://developer.zuora.com"
EXCLUDED_MARKDOWN = {PurePosixPath("announcement.md")}

SIDEBARS = {
    PurePosixPath("sidebars.yaml"): PurePosixPath("."),
    PurePosixPath("blogs/sidebars.yaml"): PurePosixPath("blogs"),
    PurePosixPath("other-api/sidebars.yaml"): PurePosixPath("other-api"),
    PurePosixPath("v1-api-reference/sidebars.yaml"): PurePosixPath("v1-api-reference"),
    PurePosixPath("zephr-api-reference/sidebars.yaml"): PurePosixPath("zephr-api-reference"),
    PurePosixPath("archive/active-rating/sidebars.yaml"): PurePosixPath("archive/active-rating"),
}

OPENAPI_SPECS = [
    PurePosixPath("archive/active-rating/active-rating-api/openapi.yaml"),
    PurePosixPath("other-api/quickstart-api.yaml"),
    PurePosixPath("other-api/revenue.yaml"),
    PurePosixPath("v1-api-reference/api.yaml"),
    PurePosixPath("v1-api-reference/older-api.yaml"),
    PurePosixPath("zephr-api-reference/zephr-admin-api.yaml"),
    PurePosixPath("zephr-api-reference/zephr-public-api.yaml"),
]

OPENAPI_DIRECTORIES = {
    PurePosixPath("archive/active-rating/active-rating-api/openapi.yaml"): "archive/active-rating/active-rating-api",
    PurePosixPath("other-api/quickstart-api.yaml"): "other-api/quickstart-api",
    PurePosixPath("other-api/revenue.yaml"): "other-api/revenue",
    PurePosixPath("v1-api-reference/api.yaml"): "v1-api-reference/api",
    PurePosixPath("v1-api-reference/older-api.yaml"): "v1-api-reference/older-api",
    PurePosixPath("zephr-api-reference/zephr-admin-api.yaml"): "zephr-api-reference/zephr-admin-api",
    PurePosixPath("zephr-api-reference/zephr-public-api.yaml"): "zephr-api-reference/zephr-public-api",
}

OPENAPI_LANDING_ROUTES = {
    "archive/active-rating/active-rating-api": "/archive/active-rating/overview",
    "other-api/quickstart-api": "/other-api/quickstart-api-intro",
    "other-api/revenue": "/other-api/revenue/authentication/post_authenticate",
    "v1-api-reference/api": "/v1-api-reference/introduction",
    "v1-api-reference/older-api": "/v1-api-reference/introduction",
    "zephr-api-reference/zephr-admin-api": "/zephr-api-reference/zephr-api-introduction",
    "zephr-api-reference/zephr-public-api": "/zephr-api-reference/zephr-api-introduction",
}

SWAGGER_2_SPECS = [
    PurePosixPath("archive/active-rating/active-rating-api/openapi.yaml"),
    PurePosixPath("other-api/revenue.yaml"),
    PurePosixPath("v1-api-reference/older-api.yaml"),
]

LEGACY_YAML_FILES = [
    PurePosixPath("@skills/redocly.yaml"),
    PurePosixPath("redocly.yaml"),
    PurePosixPath("redirects.yaml"),
    *SIDEBARS.keys(),
    PurePosixPath("static/yaml/apis/RevPro_api.yaml"),
    PurePosixPath("static/yaml/apis/swagger3_collect.yaml"),
    PurePosixPath("static/yaml/apis/swagger_active_rating.yaml"),
    PurePosixPath("static/yaml/apis/swaggerv2API.yaml"),
    PurePosixPath("static/yaml/apis/zuora-openapi-for-otc-compact.yaml"),
    PurePosixPath("static/yaml/apis/zuora-openapi-for-otc.yaml"),
    PurePosixPath("static/yaml/apis/zuora-openapi-full-compact.yaml"),
    PurePosixPath("static/yaml/swagger.yaml"),
]

MIRRORED_SUPPORT_FILES = [
    *LEGACY_YAML_FILES,
    PurePosixPath("index.page.tsx"),
    PurePosixPath("overview.page.tsx"),
    PurePosixPath("blog.page.tsx"),
    PurePosixPath("blogs/blog.page.tsx"),
    PurePosixPath("faq/developer-faqs.page.tsx"),
    PurePosixPath("components/homepage/HomePage.tsx"),
    PurePosixPath("components/homepage/HomePage.css"),
    *OPENAPI_SPECS,
]


def ruby_yaml(path: Path):
    command = [
        "ruby",
        "-ryaml",
        "-rjson",
        "-rdate",
        "-e",
        "puts JSON.generate(YAML.unsafe_load_file(ARGV.fetch(0)))",
        str(path),
    ]
    return json.loads(subprocess.check_output(command, text=True))


def route(path: PurePosixPath) -> str:
    value = path.as_posix()
    return value[:-3] if value.endswith(".md") else value


def canonical_url(path: PurePosixPath) -> str:
    return f"{SOURCE_HOST}/{route(path).strip('/')}/"


def source_markdown_paths() -> list[PurePosixPath]:
    mirrored = sorted(MIRROR.rglob("*.md.source")) if MIRROR.exists() else []
    if mirrored:
        return [PurePosixPath(path.relative_to(MIRROR).as_posix()[:-7]) for path in mirrored]

    paths = []
    for path in ROOT.rglob("*.md"):
        relative = PurePosixPath(path.relative_to(ROOT).as_posix())
        if relative.parts[0] in {"mirror", "@skills", ".git", "node_modules"}:
            continue
        if relative == PurePosixPath("README.md"):
            continue
        paths.append(relative)
    return sorted(paths)


def mirror_source(paths: list[PurePosixPath]) -> None:
    for relative in paths:
        source = ROOT / relative
        destination = MIRROR / f"{relative.as_posix()}.source"
        if not destination.exists():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)

    for relative in MIRRORED_SUPPORT_FILES:
        source = ROOT / relative
        destination = MIRROR / f"{relative.as_posix()}.source"
        if source.exists() and not destination.exists():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)


def remove_mirrored_legacy_yaml() -> None:
    """Keep obsolete Redocly YAML out of Mintlify's OpenAPI discovery pass."""
    for relative in LEGACY_YAML_FILES:
        source = ROOT / relative
        mirrored = MIRROR / f"{relative.as_posix()}.source"
        if source.exists() and mirrored.exists():
            source.unlink()


def archive_legacy_theme_sources() -> None:
    """Keep Redocly React sources available without exposing them to Mintlify."""

    sources = [*ROOT.rglob("*.ts"), *ROOT.rglob("*.tsx")]
    for source in sorted(sources):
        relative = source.relative_to(ROOT)
        if relative.parts[0] in {"mirror", ".git", "node_modules"}:
            continue
        destination = MIRROR / f"{relative.as_posix()}.source"
        if not destination.exists():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, destination)
        source.unlink()


def copy_static_assets() -> None:
    """Expose Redocly's static files at the same public URLs in Mintlify."""

    static = ROOT / "static"
    for source in static.rglob("*"):
        if not source.is_file() or source.name == ".DS_Store":
            continue
        destination = ROOT / source.relative_to(static)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        try:
            text = destination.read_text()
        except UnicodeDecodeError:
            continue
        normalized = "\n".join(line.rstrip() for line in text.splitlines())
        if text.endswith(("\n", "\r")):
            normalized += "\n"
        destination.write_text(normalized)


def source_text(relative: PurePosixPath) -> str:
    mirrored = MIRROR / f"{relative.as_posix()}.source"
    return mirrored.read_text() if mirrored.exists() else (ROOT / relative).read_text()


def split_frontmatter(text: str) -> tuple[str, str]:
    if not text.startswith("---\n"):
        return "", text
    end = text.find("\n---", 4)
    if end == -1:
        return "", text
    return text[4:end], text[end + 4 :].lstrip("\n")


def yaml_scalar(frontmatter: str, key: str) -> str | None:
    direct = re.search(rf"(?m)^{re.escape(key)}:\s*['\"]?(.+?)['\"]?\s*$", frontmatter)
    if direct:
        return direct.group(1).strip().strip("'\"")
    nested = re.search(
        rf"(?ms)^seo:\s*\n(?:^[ \t]+.*\n)*?^[ \t]+{re.escape(key)}:\s*['\"]?(.+?)['\"]?\s*$",
        frontmatter,
    )
    return nested.group(1).strip().strip("'\"") if nested else None


def clean_title(value: str) -> str:
    value = re.sub(r"!\[([^]]*)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"\[([^]]+)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"<[^>]+>", "", value)
    value = value.replace("`", "").replace("**", "").strip()
    return value or "Untitled"


def sidebar_data(relative: PurePosixPath):
    mirrored = MIRROR / f"{relative.as_posix()}.source"
    return ruby_yaml(mirrored if mirrored.exists() else ROOT / relative)


def resolve_sidebar_page(value: str, base: PurePosixPath) -> PurePosixPath:
    value = value.removeprefix("./")
    path = PurePosixPath(value)
    if base != PurePosixPath(".") and not value.startswith(f"{base.as_posix()}/"):
        path = base / path
    return path


def collect_sidebar_labels(items, base: PurePosixPath, labels: dict[PurePosixPath, str]) -> None:
    for item in items or []:
        if not isinstance(item, dict):
            continue
        page = item.get("page")
        if page and str(page).endswith(".md"):
            labels[resolve_sidebar_page(str(page), base)] = item.get("label") or item.get("group") or ""
        collect_sidebar_labels(item.get("items"), base, labels)


def page_labels() -> dict[PurePosixPath, str]:
    labels: dict[PurePosixPath, str] = {}
    for sidebar, base in SIDEBARS.items():
        collect_sidebar_labels(sidebar_data(sidebar), base, labels)
    return labels


def normalize_href(href: str, current: PurePosixPath, *, image: bool = False) -> str:
    if href.startswith(SOURCE_HOST):
        href = href.removeprefix(SOURCE_HOST) or "/"
    if not href or href.startswith(("#", "http://", "https://", "mailto:", "tel:", "data:")):
        return href

    match = re.match(r"([^?#]+)([?#].*)?$", href)
    if not match:
        return href
    raw_path, suffix = match.group(1), match.group(2) or ""
    if raw_path.startswith("/"):
        resolved = PurePosixPath(raw_path.lstrip("/"))
    else:
        resolved = PurePosixPath(current.parent, raw_path)
        normalized: list[str] = []
        for part in resolved.parts:
            if part == "..":
                if normalized:
                    normalized.pop()
            elif part not in {"", "."}:
                normalized.append(part)
        resolved = PurePosixPath(*normalized)

    value = resolved.as_posix()
    if not image and value.endswith((".md", ".mdx")):
        value = value.rsplit(".", 1)[0]
    return f"/{value}{suffix}"


def transform_links(body: str, current: PurePosixPath) -> str:
    def markdown_link(match: re.Match) -> str:
        bang, label, href = match.groups()
        normalized = normalize_href(href, current, image=bool(bang))
        return f"{bang}[{label}]({normalized})"

    body = re.sub(r"(!?)\[([^]]*)\]\(([^)\s]+)\)", markdown_link, body)

    def html_href(match: re.Match) -> str:
        return f'{match.group(1)}{match.group(2)}{normalize_href(match.group(3), current)}{match.group(2)}'

    body = re.sub(r"((?:href)=)(['\"])([^'\"]+)\2", html_href, body)

    def html_src(match: re.Match) -> str:
        return f'{match.group(1)}{match.group(2)}{normalize_href(match.group(3), current, image=True)}{match.group(2)}'

    body = re.sub(r"((?:src)=)(['\"])([^'\"]+)\2", html_src, body)
    return body


def transform_markdoc(body: str, current: PurePosixPath) -> str:
    body = re.sub(r"(\s[\w:-]+)=“([^”]*)”", r'\1="\2"', body)
    body = re.sub(r"(\s[\w:-]+)=‘([^’]*)’", r"\1='\2'", body)
    body = re.sub(r"(?i)\\?</?Typography>", "", body)
    body = re.sub(
        r"<!--[\s\S]*?-->",
        "",
        body,
    )
    body = re.sub(r"(?m)^\s*\{%\s*banner\s*/%\}\s*$", "", body)
    body = re.sub(r"\{%\s*(?:tabs|tabsComponent)\s*%\}", "<Tabs>", body)
    body = re.sub(r"\{%\s*/(?:tabs|tabsComponent)\s*%\}", "</Tabs>", body)

    def tab_open(match: re.Match) -> str:
        return f'<Tab title={json.dumps(match.group(1))}>'

    body = re.sub(r'\{%\s*(?:tab|tabComponent)\s+(?:label|title)="([^"]+)"[^%]*%\}', tab_open, body)
    body = re.sub(r"\{%\s*/(?:tab|tabComponent)\s*%\}", "</Tab>", body)

    body = re.sub(r"\{%\s*code-walkthrough[\s\S]*?%\}", "<Steps>", body, count=1)
    body = re.sub(r"\{%\s*/code-walkthrough\s*%\}", "</Steps>", body)

    def step_open(match: re.Match) -> str:
        return f'<Step title={json.dumps(match.group(1))}>'

    body = re.sub(r'\{%\s*step\b[^%]*?heading="([^"]+)"[^%]*%\}', step_open, body)
    body = re.sub(r"\{%\s*/step\s*%\}", "</Step>", body)

    def admonition_open(match: re.Match) -> str:
        component = {
            "info": "Note",
            "success": "Tip",
            "warning": "Warning",
            "caution": "Warning",
            "danger": "Warning",
        }.get(match.group(1).lower(), "Note")
        return f"<{component}>"

    body = re.sub(r'\{%\s*admonition\s+type="([^"]+)"\s*%\}', admonition_open, body)
    body = re.sub(r"\{%\s*/admonition\s*%\}", "</Note>", body)
    # Correct closing tags based on the nearest unmatched component.
    lines: list[str] = []
    admonition_stack: list[str] = []
    for line in body.splitlines():
        opened = re.search(r"<(Note|Tip|Warning)>", line)
        if opened:
            admonition_stack.append(opened.group(1))
        if "</Note>" in line and admonition_stack:
            line = line.replace("</Note>", f"</{admonition_stack.pop()}>", 1)
        lines.append(line)
    body = "\n".join(lines) + ("\n" if body.endswith("\n") else "")

    def cards_open(match: re.Match) -> str:
        cols = match.group(1) or "3"
        return f"<CardGroup cols={{{cols}}}>"

    body = re.sub(r"\{%\s*cards(?:\s+columns=(\d+))?[^%]*%\}", cards_open, body)
    body = re.sub(r"\{%\s*/cards\s*%\}", "</CardGroup>", body)

    def card_open(match: re.Match) -> str:
        attrs = match.group(1)
        title_match = re.search(r'title="([^"]+)"', attrs)
        to_match = re.search(r'to="([^"]+)"', attrs)
        title = title_match.group(1) if title_match else "Learn more"
        href = normalize_href(to_match.group(1), current) if to_match else "#"
        return f'<Card title={json.dumps(title)} href={json.dumps(href)}>'

    body = re.sub(r"\{%\s*card\s+([^%]+)%\}", card_open, body)
    body = re.sub(r"\{%\s*/card\s*%\}", "</Card>", body)

    def markdoc_image(match: re.Match) -> str:
        attrs = match.group(1)
        src_match = re.search(r'src="([^"]+)"', attrs)
        alt_match = re.search(r'alt="([^"]*)"', attrs)
        src = normalize_href(src_match.group(1), current, image=True) if src_match else ""
        alt = alt_match.group(1) if alt_match else ""
        return f'<img src={json.dumps(src)} alt={json.dumps(alt)} />'

    body = re.sub(r"\{%\s*img\s+([^%]+)/%\}", markdoc_image, body)
    body = re.sub(
        r'(?m)^(\s*```[^\s`]*)\s+\{%\s*title="([^"]+)"\s*%\}\s*$',
        lambda match: f"{match.group(1)} {match.group(2)}",
        body,
    )
    body = re.sub(
        r"<([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})>",
        lambda match: f"[{match.group(1)}](mailto:{match.group(1)})",
        body,
        flags=re.IGNORECASE,
    )
    escaped_lines: list[str] = []
    in_fence = False
    for line in body.splitlines(keepends=True):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
        elif not in_fence:
            inline_parts = line.split("`")
            for index in range(0, len(inline_parts), 2):
                inline_parts[index] = re.sub(r"\\<(?=[A-Za-z/])", "&lt;", inline_parts[index])
                inline_parts[index] = re.sub(r"<(?=\d)", "&lt;", inline_parts[index])
                inline_parts[index] = re.sub(
                    r"(?<=[A-Za-z0-9_.])<(?=[A-Za-z])",
                    "&lt;",
                    inline_parts[index],
                )
                html_parts = re.split(r"(<[^>\n]+>)", inline_parts[index])
                for html_index in range(0, len(html_parts), 2):
                    html_parts[html_index] = html_parts[html_index].replace("{", "&#123;").replace("}", "&#125;")
                inline_parts[index] = "".join(html_parts)
            line = "`".join(inline_parts)
        escaped_lines.append(line)
    body = "".join(escaped_lines)
    body = re.sub(r"(?i)<img\b([^>]*?)(?<!/)>", r"<img\1 />", body)
    body = re.sub(r"(?i)<br\s*>", "<br />", body)
    body = re.sub(r"(?i)<hr\s*>", "<hr />", body)
    body = re.sub(
        r"<code>(.*?)</code>",
        lambda match: "<code>" + match.group(1).replace("{", "&#123;").replace("}", "&#125;") + "</code>",
        body,
    )
    def compact_html_table(match: re.Match) -> str:
        result = subprocess.run(
            ["tidy", "-q", "-utf8", "-asxhtml", "--show-body-only", "yes", "--wrap", "0"],
            input=match.group(0),
            text=True,
            capture_output=True,
            check=False,
        )
        table = result.stdout.strip() or match.group(0)
        return re.sub(r"\s*\n\s*", " ", table)

    body = re.sub(r"(?is)<table\b.*?</table>", compact_html_table, body)
    body = body.replace('class="', 'className="')
    return transform_links(body, current)


def title_and_body(relative: PurePosixPath, labels: dict[PurePosixPath, str]) -> tuple[str, str, str | None, str]:
    original = source_text(relative)
    frontmatter, body = split_frontmatter(original)
    h1 = re.search(r"(?m)^\s*#\s+(.+?)\s*$", body)
    source_h1 = clean_title(h1.group(1)) if h1 else ""
    title = source_h1 or yaml_scalar(frontmatter, "title") or labels.get(relative) or relative.stem.replace("-", " ").title()
    title = clean_title(title)
    description = yaml_scalar(frontmatter, "description")
    if h1:
        body = body[: h1.start()] + body[h1.end() :]
    return title, transform_markdoc(body.strip() + "\n", relative), description, source_h1


def write_page(relative: PurePosixPath, labels: dict[PurePosixPath, str]) -> dict:
    title, body, description, source_h1 = title_and_body(relative, labels)
    body = re.sub(r"[ \t]+(?=\n)", "", body)
    sidebar_title = labels.get(relative)
    frontmatter = ["---", f"title: {json.dumps(title, ensure_ascii=False)}"]
    if sidebar_title and sidebar_title != title:
        frontmatter.append(f"sidebarTitle: {json.dumps(sidebar_title, ensure_ascii=False)}")
    if description:
        frontmatter.append(f"description: {json.dumps(description, ensure_ascii=False)}")
    frontmatter.extend(["---", ""])
    destination = ROOT / relative
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text("\n".join(frontmatter) + body)
    return {
        "source_url": canonical_url(relative),
        "source_title": title,
        "source_sidebar_label": sidebar_title or "",
        "source_h1": source_h1,
        "source_description": description or "",
        "normalized_path": f"/{route(relative)}",
        "nav_section": "",
        "converted_file": relative.as_posix(),
        "status": "done",
        "notes": "Converted from Redocly Markdoc to Mintlify MDX-compatible Markdown.",
    }


def nav_item(item, base: PurePosixPath):
    if not isinstance(item, dict) or "separator" in item:
        return None
    page = item.get("page")
    children = [nav_item(child, base) for child in item.get("items", [])]
    children = [child for child in children if child is not None]
    if "group" in item:
        result = {"group": item["group"].strip()}
        if page and str(page).endswith(".md"):
            result["root"] = route(resolve_sidebar_page(str(page), base))
        if children:
            result["pages"] = children
        if item.get("expanded") is not None:
            result["expanded"] = bool(item["expanded"])
        return result
    if page and str(page).endswith(".md"):
        return route(resolve_sidebar_page(str(page), base))
    return None


def root_docs_navigation() -> list:
    items = sidebar_data(PurePosixPath("sidebars.yaml"))
    output: list = []
    section: dict | None = None
    for item in items:
        if "separator" in item:
            section = {"group": str(item["separator"]).title(), "pages": []}
            output.append(section)
            continue
        converted = nav_item(item, PurePosixPath("."))
        if converted is None:
            continue
        if section is None:
            output.append(converted)
        else:
            section["pages"].append(converted)
    return output


def blog_navigation() -> list:
    return [
        converted
        for item in sidebar_data(PurePosixPath("blogs/sidebars.yaml"))
        if (converted := nav_item(item, PurePosixPath("blogs"))) is not None
    ]


def all_nav_pages(value) -> set[str]:
    pages: set[str] = set()
    if isinstance(value, str):
        if not re.match(r"^[A-Z]+ /", value):
            pages.add(value)
    elif isinstance(value, list):
        for item in value:
            pages |= all_nav_pages(item)
    elif isinstance(value, dict):
        if "root" in value:
            pages.add(value["root"])
        pages |= all_nav_pages(value.get("pages", []))
    return pages


def API_navigation() -> list:
    def openapi(relative: str) -> dict[str, str]:
        path = PurePosixPath(relative)
        return {"source": relative, "directory": OPENAPI_DIRECTORIES[path]}

    return [
        {
            "group": "Quickstart API",
            "pages": [
                "other-api/quickstart-api-intro",
                "other-api/quickstart-api-requests",
                {"group": "Endpoints", "openapi": openapi("other-api/quickstart-api.yaml")},
            ],
        },
        {"group": "Revenue API", "openapi": openapi("other-api/revenue.yaml")},
        {
            "group": "Zuora v1 API",
            "pages": [
                "v1-api-reference/introduction",
                "v1-api-reference/object-model",
                "v1-api-reference/cors-rest",
                {
                    "group": "API versions",
                    "pages": [
                        "v1-api-reference/api-versions",
                        "v1-api-reference/api-upgrades",
                        "v1-api-reference/api-upgrade-guide",
                    ],
                },
                "v1-api-reference/api-object-names",
                {"group": "Endpoints", "openapi": openapi("v1-api-reference/api.yaml")},
            ],
        },
        {"group": "Legacy API", "openapi": openapi("v1-api-reference/older-api.yaml")},
        {
            "group": "Zephr APIs",
            "pages": [
                "zephr-api-reference/zephr-api-introduction",
                {"group": "Admin API", "openapi": openapi("zephr-api-reference/zephr-admin-api.yaml")},
                {"group": "Public API", "openapi": openapi("zephr-api-reference/zephr-public-api.yaml")},
            ],
        },
        {
            "group": "Archived APIs",
            "pages": [
                {
                    "group": "Active Rating API",
                    "openapi": openapi("archive/active-rating/active-rating-api/openapi.yaml"),
                }
            ],
        },
    ]


def redirects(paths: list[PurePosixPath]) -> list[dict[str, str]]:
    mapped: dict[str, str] = {}
    redirects_file = MIRROR / "redirects.yaml.source"
    if redirects_file.exists():
        for source, config in (ruby_yaml(redirects_file) or {}).items():
            if isinstance(config, dict) and config.get("to"):
                mapped[str(source)] = str(config["to"])

    for relative in paths:
        frontmatter, _ = split_frontmatter(source_text(relative))
        block = re.search(r"(?ms)^redirects:\s*\n((?:^[ \t]+.*\n?)*)", frontmatter)
        if not block:
            continue
        for source in re.findall(r"(?m)^\s+([^#\s][^:]*):", block.group(1)):
            mapped[source.strip().strip("'\"")] = f"/{route(relative)}"

    mapped.update({"/overview": "/", "/blog": "/blogs/introduction", "/faq": "/faq/billing-faq"})
    return [{"source": source, "destination": destination} for source, destination in sorted(mapped.items())]


def write_docs_json(paths: list[PurePosixPath], labels: dict[PurePosixPath, str]) -> dict[str, str]:
    docs_pages = root_docs_navigation()
    blogs_pages = blog_navigation()
    api_pages = API_navigation()
    used = all_nav_pages(docs_pages) | all_nav_pages(blogs_pages) | all_nav_pages(api_pages)
    target_routes = {route(path) for path in paths if path not in EXCLUDED_MARKDOWN}
    extras = sorted(target_routes - used)

    deprecated = [page for page in extras if "/deprecated-" in page]
    archived = [page for page in extras if page.startswith("archive/") or page.endswith("-backup")]
    additional = [page for page in extras if page not in set(deprecated + archived)]
    if additional:
        docs_pages.append({"group": "Additional resources", "pages": additional})
    if deprecated:
        docs_pages.append({"group": "Deprecated tutorials", "pages": deprecated})
    if archived:
        docs_pages.append({"group": "Archived documentation", "pages": archived})

    config = {
        "$schema": "https://mintlify.com/docs.json",
        "theme": "luma",
        "name": "Zuora Developer Center",
        "description": "Build, integrate, and extend Zuora products.",
        "colors": {"primary": "#007079", "light": "#02929C", "dark": "#00C7B1"},
        "favicon": "/favicon.png",
        "logo": {
            "light": "/images/zuora-logo-full-color.png",
            "dark": "/images/logo.png",
            "href": "/",
        },
        "navigation": {
            "tabs": [
                {"tab": "Documentation", "icon": "book-open", "pages": docs_pages},
                {"tab": "API reference", "icon": "code", "pages": api_pages},
                {"tab": "Developer blogs", "icon": "newspaper", "pages": blogs_pages},
            ]
        },
        "api": {
            "playground": {"display": "interactive"},
            "examples": {
                "languages": ["curl", "javascript", "python", "java", "csharp"],
                "defaults": "required",
                "prefill": True,
            },
        },
        "contextual": {"options": ["copy", "view", "chatgpt", "claude", "download-spec"]},
        "seo": {"metatags": {"robots": "noindex"}},
        "redirects": redirects(paths),
        "footer": {
            "socials": {
                "linkedin": "https://www.linkedin.com/company/zuora/",
                "x": "https://x.com/Zuora",
                "github": "https://github.com/zuora",
            }
        },
    }
    (ROOT / "docs.json").write_text(json.dumps(config, indent=2, ensure_ascii=False) + "\n")
    return {page: "Documentation" for page in all_nav_pages(docs_pages)} | {
        page: "API reference" for page in all_nav_pages(api_pages)
    } | {page: "Developer blogs" for page in all_nav_pages(blogs_pages)}


def convert_swagger_specs() -> list[dict]:
    entries = []
    for relative in SWAGGER_2_SPECS:
        source = MIRROR / f"{relative.as_posix()}.source"
        destination = ROOT / relative
        temporary = destination.with_name(f"{destination.stem}.mintlify.yaml")
        conversion_source = source
        repaired_source: Path | None = None
        source_text = source.read_text()
        repaired_text = (
            repair_multiline_single_quoted_yaml(source_text)
            if relative == PurePosixPath("v1-api-reference/older-api.yaml")
            else source_text
        )
        if repaired_text != source_text:
            with tempfile.NamedTemporaryFile(
                mode="w",
                suffix=".yaml",
                prefix="swagger2-repaired-",
                dir=destination.parent,
                delete=False,
            ) as handle:
                handle.write(repaired_text)
                repaired_source = Path(handle.name)
            conversion_source = repaired_source
        try:
            subprocess.run(
                [
                    "npx",
                    "--yes",
                    "swagger2openapi",
                    "--yaml",
                    "--patch",
                    "--outfile",
                    str(temporary),
                    str(conversion_source),
                ],
                cwd=ROOT,
                check=True,
            )
        finally:
            if repaired_source is not None:
                repaired_source.unlink(missing_ok=True)
        temporary.replace(destination)
        quote_openapi_info_version(destination)
        entries.append(
            {
                "source_url": canonical_url(relative),
                "source_title": relative.stem,
                "source_sidebar_label": "",
                "source_h1": "",
                "source_description": "",
                "normalized_path": f"/{relative.as_posix()}",
                "nav_section": "API reference",
                "converted_file": relative.as_posix(),
                "status": "done",
                "notes": "Converted from Swagger 2.0 to OpenAPI 3.0; route-preserving filename retained.",
            }
        )
    return entries


def restore_openapi_specs() -> None:
    """Start each run from the immutable source mirror."""

    for relative in OPENAPI_SPECS:
        if relative in SWAGGER_2_SPECS:
            continue
        source = MIRROR / f"{relative.as_posix()}.source"
        destination = ROOT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)


def annotate_openapi_routes() -> None:
    """Give every endpoint a stable URL based on its original operation ID."""

    ruby = r'''
require "yaml"
require "date"

def slug(value)
  value.to_s
    .gsub(" ", "-")
    .gsub(/\{.*?\}/, "-")
    .sub(/^-/, "")
    .sub(/-$/, "")
    .gsub(/[{}(),.'\n\/]/, "")
    .gsub(/--/, "-")
    .downcase
end

path = ARGV.fetch(0)
directory = ARGV.fetch(1)
document = YAML.unsafe_load_file(path)
document["info"]["version"] = document.dig("info", "version").to_s
used = {}
methods = %w[get put post delete options head patch trace]

(document["paths"] || {}).each do |api_path, path_item|
  next unless path_item.is_a?(Hash)
  methods.each do |method|
    operation = path_item[method]
    next unless operation.is_a?(Hash)

    tag = Array(operation["tags"]).first || "default"
    identity = operation["operationId"] || operation["summary"] || "#{method}-#{api_path}"
    base = "/#{directory}/#{slug(tag)}/#{slug(identity)}".gsub(%r{/+}, "/")
    count = used.fetch(base, 0)
    used[base] = count + 1
    href = count.zero? ? base : "#{base}-#{count}"
    metadata = operation["x-mint"].is_a?(Hash) ? operation["x-mint"] : {}
    metadata["href"] = href
    operation["x-mint"] = metadata
  end
end

File.write(path, YAML.dump(document))
'''
    for relative, directory in OPENAPI_DIRECTORIES.items():
        subprocess.run(
            ["ruby", "-e", ruby, str(ROOT / relative), directory],
            check=True,
            cwd=ROOT,
        )


def openapi_link_map() -> dict[str, str]:
    """Map legacy Redocly API routes and tag pages to generated Mintlify pages."""

    aliases = {
        PurePosixPath("v1-api-reference/api.yaml"): ["api-references/api"],
        PurePosixPath("v1-api-reference/older-api.yaml"): ["api-references/older-api"],
        PurePosixPath("zephr-api-reference/zephr-admin-api.yaml"): ["api-references/zephr-admin-api"],
        PurePosixPath("zephr-api-reference/zephr-public-api.yaml"): ["api-references/zephr-public-api"],
    }
    mapped: dict[str, str] = {}
    methods = {"get", "put", "post", "delete", "options", "head", "patch", "trace"}

    def add(source: str, destination: str) -> None:
        mapped[source.rstrip("/").lower() or "/"] = destination

    for relative, directory in OPENAPI_DIRECTORIES.items():
        landing = OPENAPI_LANDING_ROUTES[directory]
        prefixes = [directory, *aliases.get(relative, [])]
        for prefix in prefixes:
            add(f"/{prefix}", landing)
            add(f"/{prefix}/overview", landing)

        first_by_tag: dict[str, str] = {}
        document = ruby_yaml(ROOT / relative)
        for path_item in (document.get("paths") or {}).values():
            if not isinstance(path_item, dict):
                continue
            for method, operation in path_item.items():
                if method.lower() not in methods or not isinstance(operation, dict):
                    continue
                href = (operation.get("x-mint") or {}).get("href")
                if not href:
                    continue
                operation_id = str(operation.get("operationId") or "")
                tag = str((operation.get("tags") or ["default"])[0])
                tag_slug = prepare_route_slug(tag)
                first_by_tag.setdefault(tag_slug, href)
                add(href, href)
                for prefix in prefixes:
                    if operation_id:
                        add(f"/{prefix}/operation/{operation_id}", href)
                    add(f"/{prefix}/{tag_slug}/{prepare_route_slug(operation_id)}", href)

        for tag_slug, href in first_by_tag.items():
            for prefix in prefixes:
                add(f"/{prefix}/{tag_slug}", href)
                add(f"/{prefix}/tag/{tag_slug}", href)
    return mapped


def prepare_route_slug(value: str) -> str:
    value = value.replace(" ", "-")
    value = re.sub(r"\{.*?\}", "-", value).strip("-")
    value = re.sub(r"[{}(),.'\n/]", "", value)
    return value.replace("--", "-").lower()


def rewrite_api_links(paths: list[PurePosixPath], mapped: dict[str, str]) -> None:
    def destination(value: str) -> str:
        if value.startswith(SOURCE_HOST):
            value = value.removeprefix(SOURCE_HOST) or "/"
        if not value.startswith("/"):
            return value
        match = re.match(r"([^?#]+)([?#].*)?$", value)
        if not match:
            return value
        replacement = mapped.get(match.group(1).rstrip("/").lower() or "/")
        return f"{replacement}{match.group(2) or ''}" if replacement else value

    for relative in paths:
        if relative in EXCLUDED_MARKDOWN:
            continue
        path = ROOT / relative
        text = path.read_text()
        text = re.sub(
            r"(\]\()([^\s)]+)(\))",
            lambda match: f"{match.group(1)}{destination(match.group(2))}{match.group(3)}",
            text,
        )
        text = re.sub(
            r"(\]\()(/[^\s)]+)\s+(\))",
            lambda match: f"{match.group(1)}{destination(match.group(2))}{match.group(3)}",
            text,
        )
        text = re.sub(
            r"((?:href)=)(['\"])([^'\"]+)(\2)",
            lambda match: f"{match.group(1)}{match.group(2)}{destination(match.group(3))}{match.group(4)}",
            text,
        )
        path.write_text(text)


def quote_openapi_info_version(path: Path) -> None:
    """Keep date-shaped API versions as strings, as required by OpenAPI 3."""

    text = path.read_text()
    text = re.sub(
        r"(?m)^(  version:)\s+([^'\"\n][^\n]*)$",
        lambda match: f"{match.group(1)} {json.dumps(match.group(2).strip())}",
        text,
        count=1,
    )
    path.write_text(text)


def repair_multiline_single_quoted_yaml(source: str) -> str:
    """Indent malformed Swagger scalar continuations without changing the mirror."""

    repaired: list[str] = []
    scalar_indent: int | None = None
    quote_character: str | None = None

    def quote_count(value: str, quote: str) -> int:
        if quote == "'":
            return value.replace("''", "").count("'")
        return len(re.findall(r'(?<!\\)"', re.sub(r"\\\\", "", value)))

    for line in source.splitlines(keepends=True):
        content = line.rstrip("\r\n")
        newline = line[len(content) :]

        if scalar_indent is not None and content.strip():
            indent = len(content) - len(content.lstrip(" "))
            if indent <= scalar_indent:
                content = " " * (scalar_indent + 2) + content.lstrip(" ")

        repaired.append(content + newline)

        if scalar_indent is None:
            match = re.match(r'^(\s+)[^#][^:]*:\s*([\'"].*)$', content)
            if match and quote_count(match.group(2), match.group(2)[0]) % 2 == 1:
                scalar_indent = len(match.group(1))
                quote_character = match.group(2)[0]
        elif quote_character is not None and quote_count(content, quote_character) % 2 == 1:
            scalar_indent = None
            quote_character = None

    return "".join(repaired)


def write_manifest(entries: list[dict]) -> None:
    fields = [
        "source_url",
        "source_title",
        "source_sidebar_label",
        "source_h1",
        "source_description",
        "normalized_path",
        "nav_section",
        "converted_file",
        "status",
        "notes",
    ]
    with (ROOT / "migration-manifest.csv").open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        writer.writerows(entries)


def main() -> None:
    paths = source_markdown_paths()
    mirror_source(paths)
    labels = page_labels()
    remove_mirrored_legacy_yaml()
    archive_legacy_theme_sources()
    copy_static_assets()
    restore_openapi_specs()
    spec_entries = convert_swagger_specs()
    annotate_openapi_routes()
    entries: list[dict] = []
    for relative in paths:
        if relative in EXCLUDED_MARKDOWN:
            source = ROOT / relative
            if source.exists():
                source.unlink()
            entries.append(
                {
                    "source_url": canonical_url(relative),
                    "source_title": "Announcing the Redesigned Zuora Developer Center",
                    "source_sidebar_label": "",
                    "source_h1": "Announcing the Redesigned Zuora Developer Center: New Features and a Fresh Look",
                    "source_description": "",
                    "normalized_path": "/announcement",
                    "nav_section": "Developer blogs",
                    "converted_file": "blogs/announcement.md",
                    "status": "excluded",
                    "notes": "Duplicate of blogs/announcement.md; source retained in mirror.",
                }
            )
            continue
        entries.append(write_page(relative, labels))

    link_map = openapi_link_map()
    for relative in paths:
        if relative not in EXCLUDED_MARKDOWN:
            page_route = f"/{route(relative)}"
            link_map[page_route.lower()] = page_route
    for redirect in redirects(paths):
        # Generated OpenAPI routes are canonical. Legacy redirects may use the
        # same source path but point to Redocly tag pages that no longer exist.
        link_map.setdefault(
            redirect["source"].rstrip("/").lower() or "/",
            redirect["destination"],
        )
    link_map.update(
        {
            "/.": "/",
            "/other-api/introduction": "/other-api/revenue/authentication/post_authenticate",
            "/api-references/api/tag/offers": "/v1-api-reference/introduction",
            "/api-references/api/tag/price-book-items": "/v1-api-reference/introduction",
            "/api-references/zephr-admin-api/operation/user_export": "/zephr-api-reference/zephr-admin-api/user-export/exportuserandeventscsv",
            "/api-references/zephr-public-api/operation/process_multiple_decisions": "/zephr-api-reference/zephr-public-api/sdk-feature-decision-engine/processmultipledecisions",
            "/v1-api-reference/api/api/e-invoicing": link_map["/v1-api-reference/api/e-invoicing"],
        }
    )
    rewrite_api_links([*paths, PurePosixPath("index.mdx")], link_map)
    nav_sections = write_docs_json(paths, labels)
    for entry in entries:
        entry["nav_section"] = nav_sections.get(entry["normalized_path"].lstrip("/"), entry["nav_section"])
    entries.extend(spec_entries)
    write_manifest(entries)
    print(f"Converted {sum(entry['status'] == 'done' for entry in entries)} items; excluded {sum(entry['status'] == 'excluded' for entry in entries)} duplicate.")


if __name__ == "__main__":
    main()
