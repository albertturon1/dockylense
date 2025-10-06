# Agent Guidelines for Dockylense

## ⚠️ CRITICAL: Commit Policy

**FORBIDDEN**: AI agents must NEVER commit changes to the repository. All commits must be made manually by developers only.

## Build/Lint/Test Commands

### Root Commands (Turbo)

- `pnpm dev` - Start development servers
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all codebases
- `pnpm test` - Run all tests
- `pnpm typecheck` - Type check all TypeScript

### Backend (NestJS)

- `pnpm test --filter backend` - Run backend tests
- `pnpm test:watch --filter backend` - Watch mode tests
- `pnpm test:debug --filter backend` - Debug single test
- `pnpm lint --filter backend` - Lint backend
- `pnpm typecheck --filter backend` - Type check backend

### MacOS (React Native)

- `pnpm lint --filter macos` - Lint React Native code
- `pnpm typecheck --filter macos` - Type check React Native

## Code Style Guidelines

### TypeScript

- **STRICT TYPING REQUIRED**: The use of `any` types is strictly prohibited. Type assertions such as `as any` and `as string` are forbidden except in exceptional circumstances.
- `any` may only be used in rare cases with generics (e.g., `T extends any`)
- Interface names: PascalCase
- Type names: PascalCase
- Variable/function names: camelCase
- Unused parameters: prefix with `_`

### React Components

- Component names: PascalCase
- File names: kebab-case
- Hook names: camelCase (useState, useEffect)
- Props interface: PascalCase with Props suffix
- Event handlers: handleEventName

### NestJS

- File names: PascalCase (as encouraged in NestJS docs)
- Module names: PascalCase with Module suffix
- Controller names: PascalCase with Controller suffix
- Service names: PascalCase with Service suffix
- DTO names: PascalCase with Dto suffix

### Imports

- External libraries first
- Internal imports second
- Absolute paths preferred
- Group by functionality

### Formatting

- Follows Prettier configuration in `.prettierrc.js`

### Error Handling

- Handle all promises with await or .then/.catch. Never leave promises unhandled.
- Use try/catch blocks for all async operations.
- Catch specific error types when possible.
- Log errors using warn or error levels only.
- Return descriptive error messages to users.
- Validate inputs using class-validator or Zod.

### Security

- Never log sensitive data
- Use environment variables for secrets
- Validate all inputs
- Use HTTPS in production

## Development Tips

### When to Run Builds

- After modifying any package in `packages/` directory, run `pnpm build` to update built versions
- Before testing changes that depend on shared packages
- Before deploying or creating pull requests

### Testing Requirements

- Run `pnpm test` to execute all tests across the monorepo
- For backend-specific tests: `pnpm test --filter backend`
- For single test debugging: `pnpm test:debug --filter backend`

## Task Completion Requirements

- **MANDATORY**: Run `pnpm lint` after completing any task to ensure code quality
- **MANDATORY**: Run `pnpm typecheck` after completing any task to catch TypeScript errors
- **MANDATORY**: Run `pnpm test` after completing any task to verify functionality
