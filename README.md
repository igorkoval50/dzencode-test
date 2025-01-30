# Project Setup

## Prerequisites
Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository** (if you haven't already):
   ```sh
   git clone "https://github.com/igorkoval50/dzencode-test"
   ```
2. **Navigate to the project directory:**
   ```sh
   cd dzencode-test
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Project
This project uses [Vite](https://vite.dev/guide/) for fast development and hot module replacement.

To start the development server, run:
```sh
npm run dev
```
This will launch the project locally with hot-reloading enabled.

## Additional Commands
- **Build the project for production:**
  ```sh
  npm run build
  ```
- **Run tests (if available):**
  ```sh
  npm test
  ```

## Troubleshooting
If you encounter any issues:
- Ensure you have the correct Node.js and npm versions installed.
- Delete `node_modules` and `package-lock.json`, then run `npm install` again:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

For additional help, refer to the project documentation or open an issue.

