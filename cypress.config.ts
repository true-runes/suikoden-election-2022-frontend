import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'abc987',
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  viewportWidth: 1000,
  viewportHeight: 660,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3100',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
