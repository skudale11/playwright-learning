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

## Project Structure

    tests/                  Test spec files
    pages/                  Page Object Model classes
      LoginPage.ts          Login page interactions
      ProductPage.ts        Product page interactions
    fixtures.ts             Shared custom fixtures
    playwright.config.ts    Playwright configuration
    .github/workflows/      GitHub Actions CI pipeline

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
