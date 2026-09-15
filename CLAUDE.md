# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

pnpm workspace monorepo with two apps:

- `apps/web` — React 19 + TypeScript + Vite frontend, linted with Oxlint.
- `apps/api` — FastAPI backend (Python 3.12), managed with `uv`, linted with Ruff. Source lives under `apps/api/src/api`.

Both apps are currently minimal scaffolds (default Vite React template on the frontend, a single `/health` endpoint on the backend).

## Commands

Run from the repo root via the `Makefile` (wraps `pnpm --filter` and `uv`):

```
make install       # install both web and api dependencies
make dev           # run web (Vite) and api (uvicorn, port 8000) concurrently
make dev-web       # web only
make dev-api       # api only
make build         # build web (tsc -b && vite build)
make lint          # lint both web and api
make lint-web      # oxlint
make lint-api      # ruff check
make clean         # remove node_modules, web dist, api .venv
```

Equivalent direct commands, if working inside a single app:

- Web (`apps/web`): `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm preview`.
- API (`apps/api`): `uv sync`, `uv run uvicorn api.main:app --app-dir src --reload --port 8000`, `uv run ruff check .`.

No test suites are configured in either app yet.

## Frontend conventions (apps/web)

- Use Tailwind CSS for styling (not yet installed — set it up before adding styles to new components).
- Every component must have tests covering its essential usage (not yet configured — set up a test runner, e.g. Vitest + React Testing Library, before adding component tests).

## Backend conventions (apps/api)

- Follow REST principles strictly: resource-oriented URLs (nouns, not verbs), correct HTTP methods (GET/POST/PUT/PATCH/DELETE) and status codes, statelessness, and consistent use of the request/response body for representations rather than query params for anything beyond filtering/pagination.

## Git conventions

- Use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, etc.) for commit messages in both apps.
