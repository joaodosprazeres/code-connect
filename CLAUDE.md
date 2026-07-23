# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

pnpm workspace monorepo with two apps, each independently versioned and run:

- `apps/api` — NestJS backend (TypeScript, Express platform)
- `apps/web` — React 19 + Vite frontend (TypeScript)

Both apps are early-stage scaffolds (NestJS starter / Vite React-TS starter) with no custom modules, routes, or components built out yet.

## Commands

Run from the repo root via the root `package.json` scripts, which shell out to the relevant workspace with `pnpm --filter`:

```bash
pnpm dev:web       # start web app dev server (vite)
pnpm dev:api       # start api dev server, watch mode (nest start --watch)
pnpm build:web     # tsc -b && vite build
pnpm build:api     # nest build
pnpm lint:web      # oxlint
pnpm lint:api      # eslint --fix
pnpm test:api      # jest unit tests
```

Or scope commands directly to a workspace with `pnpm --filter web <script>` / `pnpm --filter api <script>`.

Inside `apps/api`, additional scripts not exposed at the root:

```bash
pnpm test:watch    # jest --watch
pnpm test:cov      # jest --coverage
pnpm test:e2e      # jest --config ./test/jest-e2e.json
```

Run a single test file: `pnpm --filter api test -- app.controller.spec.ts` (Jest matches by filename/pattern). e2e specs live in `apps/api/test/*.e2e-spec.ts`; unit specs (`*.spec.ts`) live alongside source in `apps/api/src`.

`apps/web` has no test runner configured yet.

## Architecture notes

- Each app has its own `pnpm-lock.yaml` in addition to the root lockfile — dependencies for `api` and `web` are managed independently within the workspace.
- `apps/api`: standard Nest module/controller/service layering (`AppModule` → `AppController` → `AppService`), bootstrapped in `src/main.ts`. New features should follow the same Nest module pattern (one module per domain area) rather than growing `AppModule` directly.
- `apps/api` ESLint config (`eslint.config.mjs`) has `@typescript-eslint/no-explicit-any` turned off and `no-floating-promises`/`no-unsafe-argument` downgraded to warnings — type-checked linting is otherwise strict (`recommendedTypeChecked`).
- `apps/web` uses `oxlint` (not ESLint) for linting, configured in `.oxlintrc.json`.
- `apps/web` build is a two-step: `tsc -b` (project-references type check) then `vite build` — a type error will fail the build before Vite even runs.

## Frontend conventions (apps/web)

- **Atomic Design**: structure components as atoms → molecules → organisms → templates → pages. None of this exists yet (`src/` currently only has the Vite starter `App.tsx`) — when adding the first real components, create the `atoms`/`molecules`/`organisms`/`templates`/`pages` folders under `src/components` (or `src/` directly) rather than a flat component list.
- **Tailwind**: use Tailwind CSS for styling. Not yet installed/configured — needs `tailwindcss` added and wired into `vite.config.ts` before first use.
- **Component tests are mandatory**: every component needs a test covering its essential usage (main render path + primary interaction/prop variants). No test runner is configured yet for `apps/web` — set one up (e.g. Vitest + React Testing Library) as part of adding the first component, not as an afterthought.

## Backend conventions (apps/api)

- Follow REST principles for all API design: resource-based URLs (nouns, not verbs), correct HTTP methods (GET/POST/PUT/PATCH/DELETE mapped to their semantics), correct status codes, statelessness, and consistent resource representations across endpoints. Prefer Nest's standard `@Controller`/`@Get`/`@Post`/etc. resource-per-controller pattern over RPC-style action endpoints.

## Git conventions

- Use Conventional Commits for all commit messages (`feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `docs:`, etc.), with an optional scope, e.g. `feat(web): add Button atom`.
