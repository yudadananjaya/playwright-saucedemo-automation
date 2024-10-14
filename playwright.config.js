module.exports = {
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
  };
  