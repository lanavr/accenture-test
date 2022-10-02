const { defineConfig } = require("cypress");

module.exports = defineConfig({
	chromeWebSecurity: true,
  e2e: {
		specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
