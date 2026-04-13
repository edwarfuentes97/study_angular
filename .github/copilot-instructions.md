# GitHub Copilot Workspace Instructions

## What this workspace is
This is a single-application Angular 20 project used for learning and demonstration. The app is built from `src/` and organized around:

- `src/app/app.ts`, `src/app/app.routes.ts`, `src/app/app.config.ts` for application bootstrap and routing
- `src/app/core/` for guards, interceptors, and shared platform services
- `src/app/features/` for feature areas and lab content
- `src/app/shared/` for reusable components, directives, models, and services

The repository also includes deployment tooling in `scripts/deploy-gh-pages.sh`.

## Common commands
Use the repository's npm scripts when possible:

- `npm start` → runs `ng serve`
- `npm run build` → runs `ng build`
- `npm run watch` → runs `ng build --watch --configuration development`
- `npm test` → runs `ng test`
- `npm run deploy:pages` → deploys with `scripts/deploy-gh-pages.sh`

There is also a VS Code launch/task setup in `.vscode/` for `ng serve` and `ng test`.

## Agent workflow
When editing this repo:

- Prefer changes in `src/` and keep Angular conventions consistent.
- Preserve feature module organization under `src/app/features/`.
- Keep `app.routes.ts` and top-level app bootstrap logic aligned with existing route layout.
- Avoid making breaking changes to `package-lock.json` unless dependency updates are explicitly needed.
- Validate work with `npm run build` and `npm test` when changing code or build configuration.

## What to look at first
Start in these files for major changes:

- `src/app/app.ts`
- `src/app/app.routes.ts`
- `src/app/core/` and `src/app/shared/`
- `src/app/features/`
- `package.json`
- `angular.json`

## What not to do

- Do not assume a monorepo or library workspace; this is a single Angular application.
- Do not introduce new CLI schematics or tooling without explicit reason.
- Do not run or require custom `ng e2e` configuration unless asked; only unit test tooling is known here.

## Helpful context
- The project uses Angular v20 and TypeScript v5.
- Styles are authored in SCSS and HTML templates live next to routes/components.
- The repo uses an app-first structure rather than a generated Angular workspace with multiple projects.

## Example prompts
- "Refactor the `auth.guard.ts` logic so route redirects preserve the intended destination."
- "Add a new shared directive that toggles a CSS class when an element is visible."
- "Update the dashboard feature to use a reactive form and add basic validation."
- "Fix the unit test failures in `app.spec.ts` after the recent component change."

## Next agent customization ideas
- Create a `app-architecture` prompt that explains feature layout and routing conventions for frontend work.
- Create a `test-helper` instruction set focused on running `npm test`, interpreting Karma output, and fixing Angular unit-test issues.
- Create a `deploy-pages` instruction that knows this repo’s GitHub Pages deployment flow.
