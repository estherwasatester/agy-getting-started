# Agent Instructions

This workspace contains skills to onboard users to the Antigravity developer stack. Read the relevant skill file and follow its instructions when the user asks about installation or setup.

## Skills

Skills are in `.agents/skills/`. Each skill has a `SKILL.md` with step-by-step instructions.

| Skill | When to use |
|---|---|
| [`antigravity-install`](.agents/skills/antigravity-install/SKILL.md) | User wants to install Antigravity, `agy`, `agents-cli`, GCP ADK skills, or Google Cloud skills |

## Guidelines

- Detect the user's environment (OS, shell, installed tools) before asking questions.
- Execute and verify one step at a time — don't dump all commands at once.
- Adapt commands to the user's OS/shell.
- On path changes, tell the user to restart their shell or source their rc file.
