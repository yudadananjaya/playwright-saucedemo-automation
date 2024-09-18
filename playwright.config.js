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
    },
  };
  