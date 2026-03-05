# Next.js Boilerplate

A development template for Next.js applications with integrated tooling for code quality, testing, and automated workflows.

## 🛠️ Tech Stack

* **Framework**: Next.js (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS

---

## 🛡️ Development & Quality Tools

* **Linting & Formatting**: ESLint and Prettier.
* **Git Hooks**: Husky and Lint-staged (pre-commit checks).
* **Testing**: Jest and React Testing Library (RTL).
* **Documentation**: Storybook for component development.
* **Code Generation**: Plop (CLI component generator).
* **Automation**: CI/CD with GitHub Actions.

---

## 🚀 Installation and Usage

### 1. Clone the repository
git clone https://github.com/tiagohugovitor/boilerplate-next.git

### 2. Install dependencies
npm install

### 3. Start development server
npm run dev

Access: http://localhost:3000

---

## 📂 Project Structure

* `src/app`: Routes and layouts.
* `src/components`: UI components.
* `.github/workflows`: CI/CD pipelines.
* `.husky`: Git hooks configuration.
* `generators`: Plop templates.

## 📜 Scripts

* `npm run dev`: Starts development server.
* `npm run build`: Production build.
* `npm test`: Runs Jest test suite.
* `npm run storybook`: Starts Storybook.
* `npm run generate`: Runs Plop generator.
* `npm run lint`: Executes ESLint check.
