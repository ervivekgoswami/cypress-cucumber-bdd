const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://petstore.swagger.io/v2",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },
})