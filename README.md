# Playwright Learning: Test Automation Portfolio

A structured 25-day Playwright test automation project built from scratch, targeting a QA / Test Engineer role.

## CI Status
![CI](https://github.com/skudale11/playwright-learning/actions/workflows/playwright.yml/badge.svg)

## Tech Stack
- Playwright with TypeScript
- GitHub Actions CI/CD
- Page Object Model (POM)
- API Testing
- Cross-browser testing (Chromium, Firefox, WebKit)

## What Is Tested
- Login flows: valid credentials, invalid credentials, error messages
- Product browsing: navigating categories, clicking products
- Cart functionality: adding products to cart
- REST API: response status, data structure, field validation
- Custom fixtures: reusable logged-in state across tests
- Route mocking: intercepting API calls and returning fake data
- Network interception: waitForResponse for async request handling

## Project Structure

    .github/
      workflows/
        playwright.yml          GitHub Actions CI pipeline
    pages/
      LoginPage.ts              Login page interactions (POM)
      ProductPage.ts            Product page interactions (POM)
    tests/
      account.spec.ts           Account page tests using custom fixtures
      api.spec.ts               REST API tests against products endpoint
      cart.spec.ts              Cart functionality tests
      example.spec.ts           Playwright sample tests (reference)
      login.spec.ts             Login flow tests (valid, invalid credentials)
      mock.spec.ts              Route mocking and network interception tests
    fixtures.ts                 Shared custom fixtures (loggedInPage)
    playwright.config.ts        Playwright configuration (baseURL, browsers, trace)
    playwright-checklist.html   Interactive 25-day learning checklist
    package.json                Project dependencies
    README.md                   Project documentation

## Getting Started from Scratch

If you are setting this up on a new machine, follow these steps in order.

**Step 1: Install prerequisites**

Download and install Node.js LTS from https://nodejs.org
Download and install VS Code from https://code.visualstudio.com
Inside VS Code, install the extension called "Playwright Test for VSCode" by Microsoft.

**Step 2: Clone the repository**

Open your terminal and run:

    git clone https://github.com/skudale11/playwright-learning.git
    cd playwright-learning

**Step 3: Install dependencies**

    npm install

**Step 4: Install Playwright browsers**

    npx playwright install

This downloads Chromium, Firefox, and WebKit. It takes 2 to 3 minutes.

**Step 5: Verify everything works**

    npx playwright test

You should see all tests passing. To view the HTML report:

    npx playwright show-report

You are now ready to explore or extend the project.

## How To Run Locally

    npm install
    npx playwright install
    npx playwright test

To run a specific file:

    npx playwright test login.spec.ts

To open the HTML report after a run:

    npx playwright show-report

## Author
Suchit Kudale
GitHub: https://github.com/skudale11
