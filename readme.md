# Deno - Monorepo demonstration

This project is a demonstration of a monorepo structure using Deno as the
runtime environment. The project includes multiple applications and libraries.

## Project Structure

The project is organized into a workspace with the following structure:

- `workspace/`
  - `apps/` - Applications
    - `app-a/`
  - `libs/` - Libraries
    - `lib-a/`
    - `lib-b/`
    - `lib-ab/`

## Applications

The project includes single application in the `workspace/apps` directory:

- `app-a`: It uses Solid.js as the frontend framework and Vite for building and
  development. It is deployed to the deployctl via `deno task deploy`.

## Libraries

The project includes several libraries in the `workspace/libs/` directory:

1. `lib-a`: A library with its own `vite.config.ts` and `main.ts`.
2. `lib-b`: Another library with similar structure to `lib-a`.
3. `lib-ab`: A library with only a `deno.jsonc` file.

## Build and Development

The project uses Vite for building and development. The main `deno.jsonc` file in
the root directory contains tasks for running the development server and tests.

## Configuration

1. The root `deno.jsonc` file configures the Deno environment, including compiler
   options, formatting, and workspace structure.

2. Each library and the main application have their own configuration files
   (`deno.jsonc` or `vite.config.ts`) for specific settings.

## Workflows

Workflows are defined in the `.github/workflows` directory.

- `Run tests` - This workflow is triggered when a push to the `main` branch is
  made. It runs the tests within the `workspace/libs` directory.
- `Publish libraries` - This workflow is triggered when a push to the `main`
  branch is made. It publishes the libraries to the jsr registry.
- `Deploy - App A` - This workflow is triggered when a push to the `main` branch
  is made. It builds the application `app-a` and deploys it to Deno Deploy.
