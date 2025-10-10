---
inclusion: always
---

# General Best Practices

## Development Focus

When implementing features or components:

- **Build only what's requested**: Focus on building the specific component and its documentation
- **Avoid scope creep**: Don't create additional files, scripts, or documentation unless explicitly requested
- **Keep it minimal**: Implement only the essential functionality needed to address the requirement
- **Documentation should be targeted**: Only create documentation that directly supports the component being built

## Implementation Guidelines

- Prioritize the core functionality over auxiliary features
- If additional components seem helpful, ask the user first before implementing
- Focus on the immediate need rather than anticipating future requirements
- Keep the solution focused and concise

## Test File Management

### Temporary Test File Cleanup

- **ALWAYS remove test files when done**: Any test files created during development or debugging should be deleted after their purpose is complete
- **Clean workspace policy**: Maintain a clean workspace by removing temporary test files, example files, and debugging scripts
- **Test file naming convention**: Use clear naming patterns for temporary test files (e.g., `test_*.py`, `example_*.js`, `debug_*.ts`) to easily identify files for cleanup
- **Immediate cleanup**: Remove test files as soon as testing is complete, don't leave them for later cleanup
- **Exception for permanent tests**: Only keep test files that are part of the permanent test suite or explicitly requested by the user

## Devvit Development Workflow

### Development Server Management

- **Suggest testing commands to the developer**: Recommend running `npm run dev` in a separate terminal for testing, but do not execute it
- **Don't modify devvit.json**: Only change Devvit configuration when explicitly needed and confirmed by the developer.
- **Never change the project name**: The project name in devvit.json and package.json must remain unchanged - Devvit requires this for deployment
- **Preserve project structure**: Maintain the standard Devvit folder structure (src/client, src/server, src/shared)

### Customized Splash Screen

- **Create engaging splash screens**: The user will always see a splash screen on the Reddit feed with a "Play" button to open the app in full screen. Customize the splash screen so it stands out and invites the player to play

## Mobile-First Design

### Responsive Development

- **Consider mobile-first design**: Most Reddit users access games on mobile devices - design with mobile screens in mind when possible
- **Prefer cross-platform features**: Favor features that work well on both desktop and mobile browsers

## Error Handling

### User-Facing Errors

- **Provide clear error messages**: Show users what went wrong and how to fix it
- **Handle network failures gracefully**: Reddit API calls may fail, implement proper fallbacks
- **Validate input where applicable**: When implementing forms or user inputs, check validity and throw clear errors when invalid
