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
      const MAX_LOG_LINES = 1000;

      on('task', {
        logMessage(message: string) {
          const logDir = 'cypress/logs';
          const logFile = path.join(logDir, 'test.log');

          // ensure the logs directory exists
          if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });  // create the directory if it doesn't exist
          }

          fs.appendFileSync(logFile, message + '\n');

          const lines = fs.readFileSync(logFile, 'utf8').split('\n');
          if (lines.length > MAX_LOG_LINES) {
            fs.writeFileSync(logFile, lines.slice(-MAX_LOG_LINES).join('\n'));
          }

          return null;
        },
        logAPIResponse(message: string) {
          const logFile = 'cypress/logs/apiResponse.log';
          fs.appendFileSync(logFile, message + '\n');

          const lines = fs.readFileSync(logFile, 'utf8').split('\n');
          if (lines.length > MAX_LOG_LINES) {
            fs.writeFileSync(logFile, lines.slice(-MAX_LOG_LINES).join('\n'));
          }

          return null;
        }
      });
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
