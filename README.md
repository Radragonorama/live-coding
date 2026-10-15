# Live Coding

A local environment for practicing algorithmic problems and preparing for coding interviews using JavaScript and TypeScript.

## Requirements

- [Node.js](https://nodejs.org/) (includes npm)
- [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

Clone the repository and open the project in VS Code:

```bash
git clone https://github.com/Radragonorama/live-coding.git
cd live-coding
code .
```

Install the project dependencies:

```bash
npm install
```

## Running a Solution

1. Open a JavaScript (`.js`) or TypeScript (`.ts`) file.
2. Press **F5** to run the current file using the configured debugger.
3. View the output in the **Debug Console**.

The project includes example solutions in the `tasks/` directory.

## Type Checking

Run the TypeScript compiler to check the project for type errors without generating output files:

```bash
npx tsc
```

TypeScript compiler options are configured in `tsconfig.json`.

## Project Structure

```text
live-coding/
├── .vscode/
│   └── launch.json
├── tasks/
│   ├── twoSum.js
│   └── twoSum.ts
├── .editorconfig
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## License

This project is licensed under the [MIT License](LICENSE).
