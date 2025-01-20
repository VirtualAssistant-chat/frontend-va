## General Conventions for React and Components 🧩

1. **Component Naming**: Component names should always be written in PascalCase. This makes it clear that they are components and should be rendered.

2. **Use JSX Syntax**: JSX makes your code easier to read and write. It's a syntax extension for JavaScript that allows you to write HTML in your React code.

3. **One Component Per File**: Each file should have exactly one React component. This makes it easier to understand and test each component.

4. **Folder Structure**: Organize your components in a folder structure that reflects the UI and the domain of your app. It's a good idea to place each component in its own folder along with its style and test files.

5. **Use State Hook for Component State**: Use the `useState` hook for functional components instead of `this.setState` in class components.

6. **Use Effect Hook for Side Effects**: The `useEffect` hook lets you handle side effects in functional components.

7. **PropType Checking**: Always use PropTypes to type-check the props passed to a child component. This will help to catch bugs early in development.

8. **Use Props to Make Components Reusable**: The same component should be used in multiple places and with different data. The data should be passed to the component using props.

9. **Conditional Rendering**: Use conditional rendering to make your components more dynamic. This can be done using ternary operators or logical && operator.

10. **Event Handlers**: All event handlers should be placed inside the component that triggers the event.

11. **Using Keys in Lists**: When rendering lists in React, you should always use a key. Keys help React identify which items have changed, are added, or are removed.

12. **Avoid Inline Function Definition in Render**: Define functions for handling events outside the render method to improve performance.

Remember, the most important thing is to keep your code clean, well-structured, and consistent. If you are working in a team, make sure all members follow these conventions.

## Conventions for Merging and Collaborating 🤝

1. **Branch Naming Conventions**: Enforce a naming convention for branches. For example, you can name feature branches like `feature/<feature-name>`, bug fix branches like `fix/<bug-name>`, etc. This makes it clear what kind of work is done in each branch.

2. **One Branch per Task**: Try to ensure that each branch corresponds to one task. Mixing multiple tasks in one branch can lead to complicated merge scenarios.

3. **Pull Requests**: Use pull requests to merge code. This provides an opportunity for code review and reduces the chances of problematic merges.

4. **Code Review**: Implement a strict code review process. Every pull request should be reviewed by at least one other team member. This helps to catch any potential merge issues before they become a problem.

5. **Resolve Conflicts Locally**: If there are merge conflicts, resolve them locally before pushing to the repository.

6. **Frequent Commits**: Make commits frequently with clear and descriptive commit messages. This helps others understand what changes were made and why.

7. **Keep Branches Up to Date**: Regularly pull the latest changes from the main branch into your feature branch. This helps to catch merge conflicts early.

8. **Don't Force Push**: Avoid force pushing, especially to shared branches. Force pushing can overwrite others' changes.

9. **Use .gitignore**: Use a `.gitignore` file to prevent committing unnecessary files to the repository.

10. **Use a Consistent Merge Strategy**: Decide as a team whether to use merge commits, squashing, or rebase for integrating changes.

## Team Conventions 🧑‍🤝‍🧑

1. **Communication**: Establish clear communication channels and expectations. Decide where and how team members should communicate (e.g., email, Slack, etc.).

2. **Meetings**: Set up regular meetings to discuss progress, blockers, and next steps. Make sure all members have the opportunity to speak up and contribute.

3. **Availability**: Ensure everyone is clear about when they are expected to be available and how to communicate their unavailability.

4. **Task Assignment**: Decide how tasks will be assigned. This can be done during your meetings, or you can use project management tools like Jira or Trello.

5. **Responsibility**: Each team member should be responsible for their tasks. It should be clear who is doing what.

6. **Code Ownership**: Establish code ownership rules. This can prevent situations where everyone is waiting for someone else to fix a problem because they assume it's not "their code".

7. **Coding Standards**: Agree on a coding standard to follow. This includes code formatting, naming conventions, commenting, etc.

8. **Documentation**: Everyone should understand the importance of updating and maintaining documentation. This includes code comments, commit messages, and high-level documentation.

9. **Code Reviews**: Everyone should participate in code reviews. This ensures shared knowledge of the codebase and helps to maintain the code quality.

10. **Conflict Resolution**: Have a plan for resolving conflicts. This could be a designated person to mediate, or a process for voting on solutions.

Remember, every team is unique, so these conventions should be adapted to fit your team's specific needs.

## Git Conventions 🌲

1. **Master/Main Branch**: The main line of development. This branch usually reflects the production-ready state of your code.

2. **Feature Branches**: For new features or enhancements, use a naming convention like `feature/<feature-name>` or `feat/<feature-name>`. For example, `feature/add-login` or `feat/user-registration`.

3. **Bug Fixes**: For bug fixes, use a naming convention like `bugfix/<bug-name>` or `fix/<bug-name>`. For example, `bugfix/fix-login-error`.

4. **Hot Fixes**: For urgent fixes that need to be applied to the main branch immediately, use a naming convention like `hotfix/<issue-name>`.

5. **Release Branches**: If you use a release branch workflow, use a naming convention like `release/<version>`.

6. **Use Hyphens or Underscores**: Use hyphens (-) or underscores (\_) instead of spaces in branch names.

7. **Descriptive Names**: Branch names should be descriptive and reflect the task being done in that branch.

8. **Short Names**: Keep branch names as short as possible while still being descriptive.

Remember, these conventions should be agreed upon by your team to ensure consistency across your repository.

## Material UI Conventions 🎨

1. **Consistent Usage**: Be consistent in the usage of Material UI components. For example, if you're using Material UI's `Button` component, use it throughout your application.

2. **Custom Theming**: Material UI provides a theming solution that allows you to define a global theme and use it across your application. Define your theme in a central location and stick to it.

3. **Use Grid for Layout**: Material UI provides a powerful `Grid` component that should be used for layouts.

4. **Responsive Design**: Utilize Material UI's responsive capabilities. The `Grid` system and the `Hidden` component can be very helpful for this.

5. **Overriding Styles**: Material UI uses a CSS-in-JS solution (Styled Components from v5). When you need to override the styles of a component, make sure you understand how to do it correctly to avoid unnecessary specificity wars.

6. **Shared Component Properties**: Material UI components share some common props (like `className`, `style`, `color`, `size`). Use these common props for consistency.

7. **Naming Convention**: When creating a new component that wraps a Material UI component, use a clear and descriptive name. For example, `CustomButton`, `PrimaryButton`, etc.

8. **Prefer Material UI Components**: When possible, use Material UI components instead of native HTML elements. Material UI components are designed to work well together, are responsive out of the box, and often provide more functionality than their HTML counterparts. However, if a native HTML element is more straightforward and doesn't detract from the functionality or design, it can be used.

Remember, these conventions are general guidelines. They should be adapted according to the specific needs of your project and team.

## Styling Conventions 👗

1. **Material UI Styling**: Prefer Material UI's styling solution for your components. Material UI uses CSS-in-JS and provides utility functions like `makeStyles`, `styled`, and `useTheme` for styling components.

2. **Custom Theme**: Material UI provides a `ThemeProvider` component that you can use to wrap your application and provide a custom theme. Define and use a custom theme for consistent styling across your application.

3. **Consistent Spacing**: Material UI's theme provides a spacing function that you should use for consistent spacing.

4. **Responsive Styles**: Use Material UI's `useMediaQuery` hook or the `Hidden` component for responsive styles.

5. **CSS Prop**: From Material UI v5, you can use the `sx` prop for styling components.

Remember to keep your styles organized and easy to manage. Avoid inline styling as much as possible, as it can be difficult to override and maintain.

## Libraries for Styling 📚

- **Material UI**: Provides a robust styling solution and a lot of pre-styled components.
- **Styled-components**: This is used by Material UI from v5. It allows you to write actual CSS in your JavaScript.
- **Classnames**: A simple library that allows you to conditionally join classNames together. Useful when you need to conditionally apply styles.
- **Polished**: A lightweight toolset for writing styles in JavaScript. It's useful when you need to perform more complex operations in your styles.

## Unit Testing Conventions 🧪

Unit tests should be in a directory named `__tests__` or have the extension `.test.js` or `.spec.js` depending upon your preference or project structure.

The generally accepted convention is to name the test file the same as the file being tested with the extension `.test.js` or `.spec.js`.

Examples:

- If you have a `Button.js` file in `src/common`, your test file would be named `Button.test.js` or `Button.spec.js`.
- For hooks, for example, `useTheme.js` in `src/hooks`, the test file would be `useTheme.test.js` or `useTheme.spec.js`.

Keep the same conventions throughout the project for easy searching and maintenance of the code.

## Testing Conventions 🧪

1. **File Naming**: Test files should have the same name as the file they are testing, with the `.test.js` or `.spec.js` extension. For example, the tests for `Button.js` would be in `Button.test.js`.

2. **Folder Structure**: Test files should be placed in the same directory as the file they are testing. This makes it easier to find related tests.

3. **What to Test**: Focus on testing the public interface of your components (i.e., what a user of your application would do). Avoid testing implementation details.

4. **Use `describe` and `it`/`test` Blocks**: Organize your tests with `describe` blocks. Each `it` or `test` block should be a specific, independent test case.

5. **Mock External Dependencies**: Mock API calls, context, and other external dependencies to isolate the component or function you're testing.

6. **Test Coverage**: Aim for a high test coverage, but remember that 100% test coverage doesn't guarantee a bug-free application. It's more important to test critical paths and complex logic.

## Libraries for Testing 📚

- **Jest**: Jest is a popular, full-featured JavaScript testing library.
- **React Testing Library**: This library encourages you to test your React components in a way that resembles how they'll be used by users.
- **Jest Mock Axios**: This is useful if you're using Axios for HTTP requests and want to create mock API responses in your tests.
- **Mock Service Worker (MSW)**: If you're using fetch (or Axios) for HTTP requests, MSW allows you to intercept those requests and return mock responses. It's a bit more setup, but can make your tests more robust.

## Folder and File Conventions 📁

- **assets**: For keeping images and other static files.
- **common**: Used for reusable React components. Component names should be clear and descriptive.
- **constants**: For keeping constant values, like API URLs.
- **redux**: For handling the global state of the app.
- **helpers**: For handy functions that are used throughout the app.
- **hooks**: For keeping custom React hooks.
- **pages**: Each file represents a different page of the app.
- **services**: For handling logic related to backend communication.
- **utils**: For keeping additional handy functions.
- **theme**: This will hold the theme configuration for Material UI.

## Development Conventions 💻

- **`npm run build`**: To prepare the app for deployment.
- **`npm run lint`**: To check code quality and ensure coding conventions are followed.
- **`npm run format`**: To format the code as per defined rules.

## Additional Important Conventions 📘

1. **Git Commit Messages**: Write clear and meaningful git commit messages. This helps in understanding the history of the project, speeds up the process of reviewing changes, and helps in troubleshooting issues.

2. **Directory Imports**: Try to use directory imports over file imports. This reduces the number of imports when you need to import multiple things from a single module.

3. **Use Functional Components**: Use functional components over class components. Functional components are easier to read and test.

4. **Proptypes**: Always define prop types for every component. This helps in catching bugs related to data types in development.

5. **Consistent Naming Scheme**: Keep a consistent naming scheme for your components, variables, and functions. This makes your code easier to understand and maintain.

## Airbnb React/JSX Style Guide - Import Order

1. **Absolute Imports Over Relative**

   - Start with imports that don't have a specific path first.
   - Start with core libraries or those without a specific path.

   ```jsx
   import React from "react";
   import PropTypes from "prop-types";
   ```

2. **Third-party Libraries**

   - Import from third-party libraries next, separated by a blank line.

   ```jsx
   import { connect } from "react-redux";
   import { Link } from "react-router-dom";
   ```

3. **Specific Project Imports**

   - Then, add your specific project imports, separated by a blank line.
   - Specific components, utilities, or other project-specific items.

   ```jsx
   import UserAvatar from "./UserAvatar";
   import { getUser } from "../actions/userActions";
   ```

4. **Styles and Images**

   - If using component-specific styles or images, they're usually imported last.
   - f using component-specific styles or images, they're imported here.

   ```jsx
   import "./UserComponent.css";
   ```

5. **Alphabetical Order**

   - Within each block, aim for alphabetical order for easier reading.

   ```jsx
   import { getAccount, getProfile } from "../selectors";
   import { getUser, updateUser } from "../actions/userActions";
   ```

   ### **Result Example**

   ```jsx
   // ========= ABSOLUTE IMPORTS OVER RELATIVE ========
   import React from "react";
   import PropTypes from "prop-types";

   // =========== THIRD-PARTY LIBRARIES ===============
   import { connect } from "react-redux";
   import { Link } from "react-router-dom";

   // ==========SPECIFIC PROJECT IMPORTS===============
   import UserAvatar from "./UserAvatar";
   import { getUser } from "../actions/userActions";

   // =========== STYLES AND IMAGES ===============
   import "./UserComponent.css";
   ```
