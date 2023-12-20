const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:10000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://agilealm.cloud/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
