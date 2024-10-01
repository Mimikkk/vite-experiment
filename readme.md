# Deno - Monorepo demonstration

This project is a demonstration of a monorepo structure using Deno as the
runtime environment. The project includes multiple applications and libraries.

## Project Structure

The project is organized into a workspace with the following structure:

- `workspace/`
  - `apps/`
    - `examples/` (Main application)
  - `libs/`
    - `lib-a/`
    - `lib-b/`
    - `lib-ab/`

## Main Application

The main application is located in the `workspace/apps/examples` directory. It
uses Solid.js as the frontend framework and Vite for building and development.

### Key Files

1. `deno.json`: Configuration file for Deno tasks and imports.
2. `vite.config.ts`: Vite configuration file.

## Libraries

The project includes several libraries in the `workspace/libs/` directory:

1. `lib-a`: A library with its own `vite.config.ts` and `main.ts`.
2. `lib-b`: Another library with similar structure to `lib-a`.
3. `lib-ab`: A library with only a `deno.json` file.

## Build and Development

The project uses Vite for building and development. The main `deno.json` file in
the root directory contains tasks for running the development server and tests:

```json
"tasks": {
  "dev": "cd workspace/apps/examples && deno task dev",
  "test": "deno test -A --watch"
}
```

## Configuration

1. The root `deno.json` file configures the Deno environment, including compiler
   options, formatting, and workspace structure.

2. Each library and the main application have their own configuration files
   (`deno.json` or `vite.config.ts`) for specific settings.

## Development Workflow

To start the development server:

```bash
deno task dev
```

To run tests:

```bash
deno task test
```
