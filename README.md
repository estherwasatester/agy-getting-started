# Antigravity (AGY) Onboarding & Installation Helper

> [!NOTE]
> This repository and onboarding helper skill were built and crafted using **Claude** via the **Agent Platform on Google Cloud Platform (GCP)**, utilizing the `skills-creator` skill to bootstrap and automate the customer onboarding experience.

Welcome to the **Antigravity (AGY) Onboarding Helper** repository! This project provides a specialized, agent-ready **Skill** designed to guide developers and customers through setting up the complete Antigravity developer stack on their local machines. 

Whether you are a developer setting up your own machine or an AI agent assisting a customer, this skill provides clear, step-by-step instructions to install, configure, and verify all necessary components for building advanced agents with Antigravity.

---

## 🚀 What is this Skill?

The `antigravity-install` skill is an automated, step-by-step onboarding assistant that helps users install and verify the four core pillars of the Antigravity ecosystem:

1. **Antigravity CLI (`agy`)** — The core command-line utility for managing AGY environments.
2. **Google Agents CLI (`agents-cli`)** — The ADK lifecycle toolchain for scaffolding, testing, and running agents locally.
3. **GCP ADK Skills** — Specialized agent skills for workflow automation, evaluations, and deployment.
4. **Google Cloud Skills** — A library of skills for seamless integration with GCP services (BigQuery, Cloud Run, GKE, etc.).

---

## 📂 Repository Structure

The repository contains the following key components:

* **[.agents/skills/antigravity-install/SKILL.md](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.agents/skills/antigravity-install/SKILL.md)**: The core skill definition. This file contains the complete markdown instructions used by AI coding agents to guide the user through the installation process.
* **[.agents/skills/antigravity-install/evals/evals.json](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.agents/skills/antigravity-install/evals/evals.json)**: A set of evaluation prompts and expected outputs to verify and test the performance of the onboarding agent across different platforms (macOS, Ubuntu, general environment).
* **[AGENTS.md](file:///Users/estherlloyd/Documents/agy/agy-getting-started/AGENTS.md)**: Dedicated system-level instructions and best practices for AI agents executing this skill.
* **[.claude/agents/](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.claude/agents)**: The canonical, default directory for specialist agent definitions (read directly by Claude Code). Edit your agent profiles here.
* **[.agents/agents/](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.agents/agents)**: The mirrored directory for specialist agent definitions, synced automatically for other agent tools.
* **[.agents/sync-agents.js](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.agents/sync-agents.js)**: A synchronization script that mirrors definitions from `.claude/agents/` into `.agents/agents/` and other supported agent tools.

---

## ⚙️ How to Use This Skill

### For Developers / Customers
If you have a coding agent (such as Claude Code, Gemini CLI, Cursor, or Windsurf) active in this workspace, the agent will automatically detect and load the `antigravity-install` skill. You can trigger it by asking questions like:
* *"How do I get started with Antigravity on my machine?"*
* *"How do I install the agy CLI?"*
* *"Help me set up the Google Agents CLI and GCP skills."*

### For AI Agents
This workspace contains custom skills in `.agents/skills/`. To use this skill, read the instructions in [SKILL.md](file:///Users/estherlloyd/Documents/agy/agy-getting-started/.agents/skills/antigravity-install/SKILL.md) and refer to [AGENTS.md](file:///Users/estherlloyd/Documents/agy/agy-getting-started/AGENTS.md) for execution notes.

### Synchronizing Specialist Agent Definitions
To mirror your canonical specialist definitions from `.claude/agents/` (where Claude Code reads them by default) into `.agents/agents/` (for other agent tools), run:

```bash
bun run sync:agents
```
*(If Bun is not available on your system, the script will automatically fallback and execute using Node.js)*

---

## 🛠️ Built on Agent Platform on GCP

This onboarding experience was designed and generated programmatically using **Claude** running on the **Agent Platform on Google Cloud Platform (GCP)**. By leveraging GCP's secure and scalable agent infrastructure combined with the `skills-creator` package, we have built a highly interactive, robust, and verified onboarding process.

---

## 🧪 Running Evaluations

To run the evaluations defined in `evals.json` and verify the correctness of the skill execution:

```bash
agents-cli eval run --skill antigravity-install
```

This will run the test prompts (macOS setup, Ubuntu troubleshooting, and fast-path setup) to ensure that the helper behaves correctly and provides accurate command blocks.
