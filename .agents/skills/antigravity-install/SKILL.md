---
name: antigravity-install
description: >
  Guide users through installing the full Antigravity 2.0 stack: the `google-antigravity`
  Python SDK, the `agy` CLI, the Google Agents CLI (`agents-cli`), all GCP/ADK skills, and
  the GCP Google Cloud skills on their local laptop. Use this skill whenever someone asks
  how to install Antigravity 2.0, set up `agy`, install agents-cli, install GCP skills,
  set up the ADK development environment, or get started with Google Antigravity on their
  machine — even if they don't say "install" explicitly (e.g. "how do I get Antigravity
  running?", "set me up with the ADK stuff", "I want to use agents-cli locally").
---

# Antigravity 2.0 — Local Installation Guide

Help the user install the full Antigravity 2.0 developer stack on their laptop:

1. **Antigravity 2.0 SDK (`google-antigravity`)** — the core Python SDK
2. **Antigravity CLI (`agy`)** — the command-line interface
3. **Google Agents CLI (`agents-cli`)** — ADK lifecycle toolchain
4. **GCP ADK Skills** — coding-agent skills for building, deploying, and evaluating agents
5. **Google Cloud Skills** — coding-agent skills for GCP services (BigQuery, Cloud Run, GKE, etc.)

Work through these in order. Verify each step succeeded before moving on, and adapt commands
to the user's OS/shell when needed.

---

## Creation Context & Guidelines for AI Agents

> [!NOTE]
> This onboarding helper skill was programmatically generated and structured using **Claude** via the **Agent Platform on Google Cloud Platform (GCP)**.

As an AI agent executing this skill, adhere to the following best practices to deliver a seamless onboarding experience:
1. **Be Proactive**: If you have terminal access, run commands (e.g., `uname -s`, `node --version`, `python3 --version`) to detect the user's OS and existing prerequisites rather than asking.
2. **Execute Incrementally**: Complete and verify one installation step before moving on to the next.
3. **Handle Environment Paths**: Remind the user to restart their terminal session or run `source ~/.zshrc` / `source ~/.bashrc` once path variables are updated.
4. **Clean Fallbacks**: If the primary installation command fails, explain the failure and present the documented alternative immediately.

---

## Step 1 — Prerequisites

Make sure the user has these before starting:

- **Node.js ≥ 18** (needed for `npx skills`)
  ```
  node --version
  ```
- **Python ≥ 3.11** (needed for agents-cli)
  ```
  python3 --version
  ```
- **uv** (Python package manager — preferred install path for agents-cli)
  ```bash
  # Install uv if missing:
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
- **A supported coding agent** already installed (Claude Code, Gemini CLI, Cursor, Windsurf,
  etc.) — the skills install step auto-detects these.

On macOS, Homebrew is the easiest path for Node and Python if they're missing:
```
brew install node python@3.12
```

---

## Step 2 — Install Antigravity 2.0 SDK (`google-antigravity`)

The `google-antigravity` Python package is the core Antigravity 2.0 SDK. Install it with pip
(or uv):

```bash
pip install google-antigravity
```

With uv (recommended if you're already using it for agents-cli):
```bash
uv pip install google-antigravity
```

Verify:
```bash
python3 -c "import google.antigravity; print('Antigravity 2.0 SDK installed')"
```

**Already installed but outdated?** Upgrade with:
```bash
pip install --upgrade google-antigravity
```

---

## Step 3 — Install the Antigravity CLI (`agy`)

Install the `agy` binary from the official install script:

```bash
curl -fsSL https://antigravity.google/install | bash
```

After it completes, run `agy install` to configure your shell `PATH`:

```bash
agy install
```

Then open a new shell (or `source ~/.bashrc` / `source ~/.zshrc`) and verify:

```bash
agy --version
```

**macOS Homebrew alternative** (if the curl script fails):
```bash
brew install antigravity
```

**Troubleshooting:** If `agy` is not found after install, check that `~/.local/bin` is on
your `PATH`. Add it manually if needed:
```bash
export PATH="$HOME/.local/bin:$PATH"
```

---

## Step 4 — Install the Google Agents CLI (`agents-cli`)

`agents-cli` is the ADK lifecycle toolchain. Install it as a uv tool (recommended):

```bash
uv tool install google-agents-cli
```

Alternatively, with pip:
```bash
pip install google-agents-cli
```

Or pipx:
```bash
pipx install google-agents-cli
```

Verify:
```bash
agents-cli --version
```

**Already installed but outdated?** Upgrade with:
```bash
uv tool upgrade google-agents-cli
# or: pip install --upgrade google-agents-cli
```

---

## Step 5 — Install GCP ADK Skills

`agents-cli setup` installs the ADK development skills into all detected coding agents
(Claude Code, Gemini CLI, Cursor, Windsurf, etc.) and optionally handles authentication:

```bash
agents-cli setup
```

This installs the full ADK skill suite globally:
- `google-agents-cli-workflow` — full development lifecycle
- `google-agents-cli-scaffold` — project creation and enhancement
- `google-agents-cli-adk-code` — agent code patterns and API reference
- `google-agents-cli-eval` — evaluation and benchmarking
- `google-agents-cli-deploy` — deployment to Agent Runtime / Cloud Run / GKE
- `google-agents-cli-publish` — publishing to Gemini Enterprise
- `google-agents-cli-observability` — tracing, logging, monitoring

**To install at project scope instead of globally:**
```bash
agents-cli setup --workspace
```

**Preview without making changes:**
```bash
agents-cli setup --dry-run
```

**Authenticate during setup (needed for deploy/publish):**
```bash
agents-cli setup --interactive
```

---

## Step 6 — Install Google Cloud Skills

Install the broader set of GCP service skills (BigQuery, Cloud Run, GKE, Firebase, AlloyDB,
Cloud SQL, Gemini API, and more) from the `google/skills` GitHub repository:

```bash
npx skills add google/skills --skill '*' -y
```

This installs all skills globally into all detected coding agents. To install only to a
specific agent (e.g. Claude Code):
```bash
npx skills add google/skills --skill '*' --agent claude-code -y
```

To see what skills are available before installing:
```bash
npx skills add google/skills --list
```

---

## Verification Checklist

After all steps, confirm everything is in place:

```bash
python3 -c "import google.antigravity; print('SDK ok')"  # Antigravity 2.0 SDK
agy --version              # Antigravity CLI
agents-cli --version       # Google Agents CLI
npx skills list            # Should show google-agents-cli-* and google-cloud-* skills
```

A complete setup shows the ADK skills and Google Cloud skills under `npx skills list`.

---

## Quick-Start After Install

Once installed, the typical first steps are:

```bash
agents-cli login           # Authenticate with Google Cloud
agents-cli create my-agent # Scaffold a new agent project
agents-cli playground      # Run locally and test
```

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `ModuleNotFoundError: google.antigravity` | Run `pip install google-antigravity` |
| `agy: command not found` | Run `agy install`, then restart your shell or add `~/.local/bin` to PATH |
| `agents-cli: command not found` | Run `uv tool install google-agents-cli`; check uv's bin dir is on PATH |
| `npx skills` not found | Install Node.js ≥ 18: `brew install node` or `nvm install 18` |
| Skills not appearing in coding agent | Restart the coding agent after install; try `agents-cli setup --workspace` |
| `agents-cli setup` fails auth | Run `agents-cli login` first, or use `agents-cli setup --skip-auth` |
