# YaS - Yet another Sudoku, without ads

I like to play Sudoku on my phone, but the amount of ads that free apps have, just bothers me..
So basically, I have decided to create my own Sudoku.

## Table of Contents

1. [Tech stack](#tech-stack)
2. How to run the project locally.
3. Features.
4. Concepts.

---

### Tech stack

- TypeScript: programming language that adds static typing to JavaScript. The code written in TypeScript, later is transpiled to JavaScript.

- React: front-end library that allows you to build user interfaces based on components. In this case, I'm going to use it to develop a SPA (Single Page Application)

- Sass: this is a popular CSS pre-processor that allows you to use features that don't exist in CSS or aren't fully adopted by all browsers yet.

- ESLint, this is a linter which helps you to find problems in your code. Also helps you to follow best practices and a code style.
  It's easy to configure and you can use different plugins to extend its functionality.

  <u>Plugins utilized:</u>

  - [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier): this will turn off unnecessary rules, or those that may enter in conflict with `prettier`.
  - [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom): allows you to follow best practices for `jest`.
  - [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y): helps you to identify accessibility issues in your app.
  - `eslint-plugin-react-hooks`: enforces rules for hooks, and in case you have an error, it helps you to identify why it's happening.
  - [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh): validates that components can be safely updated with fast refresh.
  - [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library): helps you follow best practices and avoid common mistakes when writing tests with Testing Library.

- Prettier: a code formatter which ensures that outputted code follows a consistent style. It allows you to pick what rules you want to use, or you can use its defaults.

- Husky: with this tool, you can run defined commands/scripts when a certain git hook is triggered. For example, you can check if the commit message follows a specific format, execute a script from `package.json`, etc.

- Lint staged: allows you to run a linter against staged files, can be configured to run a specific command based on the file extension. Perfect to be used with Husky!

- Jest: JavaScript testing framework, I will use it with `react-testing-library` to test React components.

- Storybook: allows you to test and visualize components in isolation. Besides the default addons, I'm using the [storybook-addon-a11y](https://github.com/storybookjs/storybook/tree/next/code/addons/a11y), which helps you to ensure that the components are compliant with the Web Content Accessibility Guidelines.

- React router: routing library used to build single page applications (SPA).
