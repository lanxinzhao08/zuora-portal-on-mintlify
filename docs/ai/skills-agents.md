---
title: "Skills and agents"
description: "Learn how to use Zuora AI skills and agents, including reusable SKILL.md files for Claude Code, Codex, Cursor, and other AI clients."
---
<a href="https://docs.zuora.com/en/zuora-platform/system-management/zuora-ai" target="_blank">Zuora AI</a> provides a growing set of tools and reusable skills to help you automate common workflows and work more efficiently. For more information, see <a href="https://docs.zuora.com/en/basics/use-of-ai-in-zuora/zuoras-approach-to-ai" target="_blank">Zuora’s approach to AI and the commitments to you</a>.

## Prerequisites

Before using Zuora skills, make sure you meet the following prerequisites:

- By default, Zuora tenants restrict AI tools to **read-only** access. If a skill needs to make changes, your OneID administrator must enable **read-write** access for your tenant.
- The skills must be downloaded and reviewed before use.
- Many skills must be edited so they reflect the specifics of your Zuora implementation.
- You must test every skill thoroughly in a sandbox environment before using it in production.

## Important notice

Zuora provides these skills on a **use-at-your-own-risk** basis. The skills have been tested and do work, but many require customization to reflect the specifics of your environment. Zuora is not responsible for unintended results that may occur from using a skill without first adapting it to your implementation.

All AI-initiated changes are recorded in Zuora’s standard audit trail and attributed to the human user running the tool. Zuora AI tools do not have hidden, back-door, or privileged access. Their access is always limited by the authenticated user’s assigned roles and permissions. For example, if a user does not have permission to create an account, the AI tool will not be able to create one on that user’s behalf.

## Zuora skills repository

The <a href="https://github.com/zuora/zuora-coding-agent" target="_blank">Zuora Coding Agent Plugin (ZCA)</a> GitHub repository contains a collection of reusable skills for supported AI clients, such as Claude Code, Codex, and Cursor. These include skills for:

- Code generation
- Workflow design and implementation
- Invoice settlement migration
- Order migration
- Best practices
- Mediation meter design and build

Installation instructions are included for Claude Code, Codex, and Cursor. The repository uses Anthropic’s `SKILLS.md` format and may also work with other AI clients that support the same format. Download the repository and ask your AI client how to add these skills if you are not using Claude Code, Codex, or Cursor.

## Product catalog skill

<a className="download-button" href="/skills/z-product-catalog-SKILL.zip" download>Download Product Catalog SKILL.md</a>

The goal of this skill is to make it easier to add charges and rate plans to your product catalog.

Customizing the skill helps ensure that your Zuora implementation’s defaults and preferences are applied correctly. Using the skill without first adapting it for your environment may result in failures or misconfigured charges.

After editing the file for your implementation, ask your AI client to install the skill.


## Orders skill

<a className="download-button" href="/skills/z-orders-SKILL.zip" download>Download Orders SKILL.md</a>

The Orders skill creates accurate Zuora Orders that create, modify, renew, cancel, or preview subscriptions.

The defaults must be updated to match your Zuora implementation before the skill is used. Using the skill without modification may result in an order that fails or does not behave as expected.

After editing the file for your implementation, ask your AI client to install the skill.
