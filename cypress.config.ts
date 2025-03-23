import { defineConfig } from 'cypress';
import fs from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/", // Change this as needed
    specPattern: "cypress/**/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {

    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    watchForFileChanges: false

  },
});
