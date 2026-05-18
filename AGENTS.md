# Mercur Development Guide

See `CLAUDE.md` for the full agent workflow, coding standards, and project structure.

## Cursor Cloud specific instructions

### Services Overview

| Service | Port | Command | Notes |
|---------|------|---------|-------|
| API Server (Medusa) | 9000 | `cd apps/api && node packages/cli/dist/index.js develop` | Requires PostgreSQL running |
| Admin Panel (Vite) | 7000 | `cd apps/admin-test && npx vite --port 7000` | React dashboard for operators |
| Vendor Panel (Vite) | 7001 | `cd apps/vendor && npx vite --port 7001` | React dashboard for sellers |

### PostgreSQL Setup

PostgreSQL 16 must be running with trust authentication for local connections. The database `mercur` must exist. The `ubuntu` role must have superuser privileges (integration tests create/drop databases dynamically).

```
sudo service postgresql start
```

Connection string: `postgresql://postgres:postgres@localhost:5432/mercur`

### Running the API

The `mercurjs` CLI wraps `@medusajs/cli`. Since the workspace binary isn't globally linked, run it directly:

```bash
cd apps/api
node /workspace/packages/cli/dist/index.js develop
```

Before first run, ensure migrations have been applied:

```bash
MEDUSA_BIN=$(find /workspace/node_modules/.bun -path "*@medusajs+cli*dfbd*" -name "cli.js" | head -1)
cd apps/api && node "$MEDUSA_BIN" db:migrate
```

Create an admin user (if needed):

```bash
cd apps/api && node "$MEDUSA_BIN" user -e admin@test.com -p admin123
```

### Integration Tests

Tests require PostgreSQL running. Run specific test patterns (never all at once):

```bash
cd integration-tests
TEST_TYPE=integration:http NODE_OPTIONS=--experimental-vm-modules npx jest --silent=false --runInBand --forceExit --testPathPatterns="<pattern>"
```

Note: Jest 30 uses `--testPathPatterns` (plural), not `--testPathPattern`.

### Lint

```bash
bun run lint
```

This runs `oxlint --quiet` at the workspace root (fast, ~1s).

### Build

```bash
bun run build
```

Uses Turborepo; builds all 9 workspace packages. Takes ~90s on first run, subsequent runs use cache.

### Known Issues

- The `mercurjs` binary is not globally linked in the workspace. Use `node /workspace/packages/cli/dist/index.js` instead of `mercurjs` directly.
- The vendor panel (`apps/vendor`) has a pre-existing bug in `packages/dashboard-sdk/src/virtual-modules.ts` where `JSON.stringify` double-quotes the component path in the `virtual:mercur/components` module, causing a runtime resolution error. The admin panel is unaffected because it does not configure custom components.
- `bun install` can be very slow (~3 minutes) due to the large dependency tree.
- `bun add <pkg>` in individual workspace packages can also take ~3 minutes due to lockfile resolution.
