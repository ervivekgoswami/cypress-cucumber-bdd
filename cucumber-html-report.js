const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./reports/cucumber-html-report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    // launchReport: true,
    ignoreBadJsonFile: true,
    scenarioTimestamp: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "135",
        },
        device: "Local test machine",
        platform: {
            name: "ubuntu",
            version: "16.04",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Amphora Automarion Project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
            { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
            { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
        ],
    },
});