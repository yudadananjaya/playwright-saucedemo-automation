const { defineConfig } = require('@playwright/test');
const CustomReporter = require('./reporter.js');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    use: {
      browserName: 'chromium',
      headless: false,
      screenshot: 'on',
      video: 'retain-on-failure',
      baseURL: 'https://www.saucedemo.com/',

      // Configure slowMo option globally for all tests
      launchOptions: {
        slowMo: 1000,  // Slows down by 1 seconds between actions
      },
    },
    // Configure reporters
    reporter: [
      ['json', { outputFile: 'test-results/results.json' }],
      ['html', { outputFolder: 'test-results/html-report', open: 'never' }], // Save HTML report
      ['./reporter.js', {}],
    ],    
});
