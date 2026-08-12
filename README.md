# Playwright Test Automation & Upskilling Master Suite

![Playwright](https://img.shields.io/badge/Playwright-1.40+-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-build.svg)

An end-to-end QA Automation framework built using **Playwright**, **TypeScript**, and **Cucumber BDD**. This repository houses test suites for UI, REST API, Database testing, CI/CD integration, and AI-driven agentic testing workflows using the **Model Context Protocol (MCP)**.

---

## 📅 Upskilling Roadmap

This repository tracks progress across a **70-Day Upskilling Plan** (Aug 13 – Oct 21):

- [ ] **Phase 1:** JS/TS Fundamentals & Playwright Setup (Days 1–15)
- [ ] **Phase 2:** Advanced UI Interactions, Sync & Debugging (Days 16–31)
- [ ] **Phase 3:** Framework Design & Test Management (Days 32–46)
- [ ] **Phase 4:** API Testing, SQL & CI/CD Pipelines (Days 47–61)
- [ ] **Phase 5:** AI-Powered Automation & Model Context Protocol (Days 62–70)

> Detailed day-by-day learning schedules and resources are documented in [`docs/Schedule_70Days.md`](./docs/Schedule_70Days.md).

---

## 🛠️ Tech Stack & Key Framework Components

* **Automation Engine:** Playwright (Web & API contexts)
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM)
* **BDD Framework:** `@cucumber/cucumber` (Gherkin syntax)
* **Schema Validation:** `ajv` (JSON Schema)
* **Reporting:** Playwright Native HTML Reporter & Allure Reports
* **CI/CD:** GitHub Actions & Jenkins
* **AI/Agentic Tools:** GitHub Copilot, Playwright MCP Server (`@playwright/mcp-server`)

---

## 📂 Repository Structure

```text
playwright-70day-upskilling/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── docs/
│   ├── Schedule_70Days.md  # 70-day learning roadmap & task checklists
│   └── DSA_Tracker.md     # SDET LeetCode progress tracker
├── src/
│   ├── pages/              # Page Object Model (POM) classes
│   ├── tests/              # UI & API test specs
│   ├── features/           # Cucumber BDD .feature files
│   ├── step_definitions/   # Step definitions mapping Gherkin steps to TS
│   └── utils/              # Base wrappers, API helpers, DB connection scripts
├── .gitignore
├── package.json
├── playwright.config.ts    # Playwright runner configuration
└── README.md