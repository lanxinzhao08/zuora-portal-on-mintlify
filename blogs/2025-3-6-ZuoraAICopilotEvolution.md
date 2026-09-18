---
title: "The Evolution of Zuora’s AI Copilot"
sidebarTitle: "The evolution of Zuora's AI Copilot"
---
OpenAI released ChatGPT in November of 2022, and the technology world collectively turned its attention to Generative AI. While we had embedded earlier generations of AI into our product, for example, Payments Smart Retry feature, we immediately began exploring how we could leverage these new large language models (LLMs) to enrich our products and customer experiences. This led us to build our first Generative AI application in Jan 2023, **Get-Help Copilot**, a chatbot designed to provide Zuora-specific knowledge in a conversational format.

## Why build a Get-Help Copilot?

* **Customer Empowerment**: We wanted to reduce friction in finding information. Many users had questions about Zuora’s API, usage-based billing, or specific configurations. Rather than combing through Knowledge Center articles or pinging Support channels, they could ask the Copilot for direct answers.
* **Internal Efficiency**: Our Support, Product, and Engineering teams frequently receive repetitive queries. By automating Q\&A, these teams could focus on higher-value tasks.
* **Experimentation with LLMs**: Given the new wave of generative AI, we wanted to gain first-hand experience in applying these models to real business problems.

## Early architecture

Initially, **Get-Help Copilot** was a classic three-tier application:

1. **Frontend (UI Layer)**
   * Embedded into a shared Zuora UI application platform (e.g., in-product help widget).
   * Provided a simple chat-style interface.
2. **Orchestration Backend**
   * Responsible for conversation management, permission checks, quota management, and activity auditing.
   * Integrated with multiple LLM providers (OpenAI, Azure, etc.) through a simple abstraction layer, allowing the service to switch or scale among different LLM endpoints easily.
   * Maintained conversation context (session data) so the AI could remember previous user inputs.
3. **Knowledge & Data Storage**
   * **Vector Database** (VectorDB) for storing embeddings of our public documentation.
   * **RDBMS** for structured metadata (e.g. user quotas, access rules).

The **RAG** (Retrieval-Augmented Generation) flow would search the VectorDB to retrieve relevant documents, feed these into the LLM as context, and then produce an answer.

<img src="/blogs/images/ZuoraCopilotChatbot.png" alt="Zuora Copilot Chatbot" width="500px"/>


In this early prototype, we focused on:

* **Security/Privacy**: Ensuring no private customer data was used. We only embedded public docs and Knowledge Center articles.
* **LLM Context**: GPT-3.5 had a limited token window, which meant we had to carefully chunk and select only the most relevant parts of the embedded data.

## Internal feedback and expansion

When we deployed an early version on a staging environment, internal teams (Support, Engineering, Product Management, Global Services) immediately saw the potential. Rather than firing off Slack messages for quick questions, they could access the Copilot.

The only downside is: It lived inside a test tenant environment, so they had to log into a product UI each time.

## Slackbot integration and refactoring

As new requirements emerged, we realized we needed a more accessible interface for internal teams. Here’s where we introduced Slackbot **zbuddy**

1. **New Slackbot Frontend**
   * Provided an alternative client that still connected to the same **Copilot Orchestration Backend**.
   * This allowed users to ask questions directly within Slack, which significantly streamlines adoption.
2. **Expanded Knowledge Embeddings**
   * Beyond public Knowledge Center articles, we built new embeddings using our Confluence pages (where we document many internal processes), our GitHub/Git Markdown files, and various other internal documents.
   * We maintained a flexible access control layer so that internal users could leverage both public and internal knowledge sources, while external end-users saw only the public data.
3. **Refactored Knowledge Base Build Framework**
   * Enabled teams to onboard their own domain-specific content. For instance, the Billing team could integrate specialized docs so they could delegate domain-specific Q\&A to the bot.
   * Teams simply pointed the framework at their documentation sources; the pipeline handled chunking, embedding, and indexing.

<img src="/blogs/images/ChatWithZbuddy.png" alt="Chat with Zbuddy" width="500px"/>

By June 2023, **zbuddy** went live. Many teams reached out to integrate their specialized knowledge bases, driving the evolution of the service.

## Moving toward Zuora Copilot

As the AI hype continued, more functional teams looked for ways to leverage LLMs in customer-facing features. In October 2023, we launched various beta programs exploring how Generative AI could assist with complex flows across different Zuora product areas.

Several recurring problems soon emerged:

* **Context & Conversation Handling**: Each team needed some form of conversation history and dynamic context retrieval.
* **Quota & Governance**: We had to enforce rate limits, logging, and usage quotas to ensure responsible AI usage across multiple teams.
* **Ease of Integration**: Directly calling OpenAI’s API was straightforward, but implementing advanced features—like conversation memory, advanced prompt engineering, knowledge retrieval, or specialized runbooks—was non-trivial.

**We decided to refactor the Copilot code again.** This led us to a more modular approach that teams could easily plug into:

1. **Pluggable engine**: Each product team could define a runbook or prompt template.
2. **Unified context management**: The orchestrator handled all conversation states and fallback strategies.
3. **Centralized quota & permission**: Embedded into a single place, so each new product feature didn’t reinvent the wheel.

Thus, **Zuora Copilot** was born — a service that could broker AI requests, apply the correct plugin or runbook, and seamlessly merge context from multiple knowledge sources.

## Strengths of our custom approach

1. **End-to-end governance**: We have robust quota management and auditing in place, ensuring fair usage and compliance.
2. **Customizable knowledge bases**: By embedding domain-specific knowledge, we can deliver more accurate responses than a general-purpose LLM.
3. **Integration flexibility**: Teams can choose different frontends (web UI, Slack, in-product flows) while still leveraging a unified AI backend.
4. **Internal \+ external multi-tenancy**: We support both internal (Slack) and external (Zuora platform) users, each with differing levels of document access.

## Customer success and ongoing feedback

Early feedback from internal pilots and select customers has been encouraging. Of course, we continue to face challenges — mainly around ensuring the knowledge base remains up to date, refining prompt engineering for new use cases, and balancing cost vs. performance. Yet, the enthusiastic adoption across Zuora shows that our Copilot approach is hitting the right note.


---

**Weijie Qu**

Senior Principal Software Engineer

_Shoutout to my fellow colleagues — Sidi Zhu, Ming Li, Huaqiang He, Shanthi, Charles, and many others who all collaborated with me on these initiatives. This was really a team effort._
