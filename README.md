# Backend Automation with Cypress

Welcome to this practical project showcasing backend automation using Cypress! In this project, we use Cypress along with a local "json-server" to simulate an API and perform various HTTP requests.

## Dependencies

Before you get started, make sure you have the following dependencies installed in your development environment:

- [Node.js](https://nodejs.org/): JavaScript runtime for running applications.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/): Package managers for Node.js.

## Instructions to Run the Project

1. **Install Dependencies:**
   Once you have cloned this repository, navigate to the project folder and run the following command to install project dependencies:

   ```
   npm install
   ```

2. **Run the Local Server:**
   To simulate the API, we use "json-server". To run the local server, use the following command:

   ```
   npm run server
   ```

   The server will be available at `http://localhost:3000`.

3. **Run the Tests:**
   You can run the Cypress tests in two ways:

   - Open the Cypress graphical interface with the following command and select the test file you want to run:

     ```
     npx cypress open
     ```

   - Alternatively, run the tests in headless mode using the following command:

     ```
     npx cypress run
     ```

## Project Description

This project demonstrates how to perform automated backend testing using Cypress. The API simulated with "json-server" allows us to make different types of HTTP requests and validate the responses received.

## Project Structure

- **`cypress/e2e`**: Contains test files written with Cypress.
- **`cypress/fixtures`**: Contains sample data in JSON format used in the tests.
- **`cypress/support`**: Contains support files such as custom commands or configurations.
- **`server/db.json`**: Contains simulated data for the API used by "json-server".

## Available Commands

- **`npm run server`**: Starts the local "json-server" and loads data from `server/db.json`.
- **`npx cypress open`**: Opens the Cypress graphical interface to run tests interactively.
- **`npx cypress run`**: Runs tests in headless mode and generates test results.

Enjoy exploring and running the automated backend tests! If you have any questions or issues, feel free to open an issue in this repository. Good luck! 🚀
