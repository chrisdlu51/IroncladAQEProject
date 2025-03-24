import { defineConfig } from 'cypress';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // Change this as needed
    projectId: 'ytnthi',
    specPattern: 'cypress/**/**/*.cy.{js,jsx,ts,tsx}',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('before:run', () => {
        const reportDir = 'cypress/reports';
        const maxReports = 5;

        // this deletes old log reports
        if (fs.existsSync(reportDir)) {
          let files = fs.readdirSync(reportDir)
            .filter(file => file.endsWith('.json') || file.endsWith('.html'))
            .map(file => ({ file, time: fs.statSync(path.join(reportDir, file)).mtime.getTime() }))
            .sort((a, b) => b.time - a.time); 

          if (files.length > maxReports) {
            files.slice(maxReports).forEach(({ file }) => {
              fs.unlinkSync(path.join(reportDir, file));
            });
          }
        }
    });

    }
  }
});
