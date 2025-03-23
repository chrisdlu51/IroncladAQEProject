import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/", // Change this as needed
    specPattern: "cypress/**/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    watchForFileChanges: false
  },
});
