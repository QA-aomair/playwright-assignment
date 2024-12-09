const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    browserName: 'chromium',
    headless: true, // Set to false for debugging
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
