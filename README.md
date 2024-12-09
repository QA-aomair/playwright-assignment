Here’s a simplified **README.md** file for your GitHub repository:

---

# Playwright Automation Test Suite

## Overview

This project contains an automated test suite using **Playwright** to validate the functionality of a demo application. The suite uses a data-driven approach, where test scenarios are dynamically generated from a JSON file, making it efficient and easy to maintain.

---

## Features

- **Automated Login**: Logs in to the application with given credentials.  
- **Dynamic Test Cases**: Test scenarios are driven by data from `testCases.json`.  
- **Task and Tag Verification**: Checks task locations and associated tags across sections like `Web Application` and `Mobile Application`.  
- **CI/CD Ready**: Designed for seamless integration with CI pipelines like GitHub Actions.

---

## How to Set Up

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo-link
   cd playwright-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

---

## How to Run Tests

1. **Execute Tests**:
   ```bash
   npx playwright test
   ```

2. **View Test Reports**:
   ```bash
   npx playwright show-report
   ```

---

## Test Scenarios

The suite validates:  
- **Login**: Logs in with the following credentials:  
  - **URL**: [Demo App](https://animated-gingersnap-8cf7f2.netlify.app/)  
  - **Email**: `admin`  
  - **Password**: `password123`  

- **Tasks**: Checks if tasks are in the correct columns (`To Do`, `In Progress`, `Done`) with proper tags (`Feature`, `Bug`, etc.).

---

## Project Files

- **`tests/login.spec.js`**: Main test script.  
- **`tests/testCases.json`**: Contains test data.  
- **`playwright.config.js`**: Configures browser and settings.  

---

## Future Improvements

- Add tests for edge cases like failed logins.  
- Extend test coverage for new app features.  
- Add performance and visual testing.  

