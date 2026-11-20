
# PROJECT RULES — LAB 4

## 1. Project Information
- **Course:** Web Application Development and Programming
- **Lab:** Lab 4 — Multi-Route SPA Architecture, Context Form Engine & Full-Stack React 19 Systems
- **Repository:** web-lab4-EX
- **Technology:** React 19, TypeScript/JavaScript, React Router v7, Express.js, Mongoose 8

## 2. Development Workflow

Follow the Contract-First development process:

1. **Contract:** Define API and component requirements.
2. **Fail Test:** Write a failing test before implementation.
3. **Implement:** Write the minimum code required to pass the test.
4. **Refactor:** Improve code quality while keeping tests passing.

Each exercise must have its own `TASK_DECOMPOSITION.md`.

## 3. Coding Standards

- Use modern React 19 and React Router v7 syntax.
- Prefer functional components and React Hooks.
- Avoid deprecated React Router APIs.
- Avoid unnecessary `useEffect` chains and infinite render loops.
- Use synchronous derived state for form validation.
- Use `AbortController` to clean up asynchronous fetch requests.
- Use `async/await` for Mongoose 8 operations.
- Store database credentials in environment variables.

## 4. Full-Stack Verification

- Follow Contract-First API design.
- Validate data on both client and server.
- Prevent unhandled Promise rejections.
- Avoid uncaught effect loops.
- Maintain deterministic state updates.

## 5. Git Rules

- Use atomic commits for individual tasks.
- Follow conventional commit messages.
- Commit completed work after each sprint.

Examples:
- `feat: implement React Router layout`
- `fix: resolve form validation loop`
- `test: add validation tests`
- `docs: update task decomposition`

## 6. AI Usage and Verification

- Review and verify all AI-generated code.
- Check for deprecated APIs and incorrect implementations.
- Document AI-generated failures in `AI_FAILURE_AUDIT.md`.
- Explain the cause of each failure and how it was resolved.
- Do not accept AI-generated code without verification.

## 7. Quality Requirements

- Ensure the application builds successfully.
- Check for Console errors and warnings.
- Maintain accessibility using semantic HTML and ARIA attributes.
- Verify functionality using browser DevTools.
