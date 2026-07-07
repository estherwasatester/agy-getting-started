#!/usr/bin/env bun
/**
 * Mirrors the canonical, tool-agnostic specialist definitions in `.agents/agents/`
 * into `.claude/agents/` (the location Claude Code reads). `.agents/` is the single
 * source of truth — edit definitions there, then run `bun run sync:agents`.
 *
 * Other agent tools can add their own mirror target here as needed.
 */
import { readdirSync, mkdirSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "agents");
const TARGETS = [join(here, "..", ".claude", "agents")];

const sources = existsSync(SRC) ? readdirSync(SRC).filter((f) => f.endsWith(".md")) : [];
if (sources.length === 0) {
  console.error(`No agent definitions found in ${SRC}`);
  process.exit(1);
}

for (const target of TARGETS) {
  mkdirSync(target, { recursive: true });

  // Remove stale mirrored definitions that no longer exist in the source.
  for (const existing of existsSync(target) ? readdirSync(target) : []) {
    if (existing.endsWith(".md") && !sources.includes(existing)) {
      rmSync(join(target, existing));
      console.log(`removed stale ${join(target, existing)}`);
    }
  }

  for (const file of sources) {
    copyFileSync(join(SRC, file), join(target, file));
  }
  console.log(`synced ${sources.length} agent(s) → ${target}`);
}
