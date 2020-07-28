//
// =====
// Hooks
// =====
// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
// it and to build services around it. You can either apply a single function or an array of
// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
// resolved to continue.
exports.hooks = {
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: async (config, capabilities) => {},

  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function(config, capabilities, specs) {},

  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function(capabilities, specs) {
    browser.maximizeWindow();
  },

  /**
   * Runs before a Cucumber feature
   */
  beforeFeature: function(feature) {},

  /**
   * Runs before a Cucumber scenario
   */
  beforeScenario: function(uri, feature, scenario, sourceLocation) {},

  /**
   * Runs before a Cucumber step
   */
  beforeStep: function(uri, feature, stepData, context) {},

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  beforeCommand: function(commandName, args) {},

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  afterCommand: function(commandName, args, result, error) {},

  /**
   * Runs after a Cucumber step
   */
  // afterStep: function (uri, feature, { error, result, duration, passed }, stepData, context) {
  // },
  // If step takes data table as input parameter it will be printed out to the console
  afterStep: function(uri, feature, { error, result, duration, passed }, stepData, context) {
    if (error) {
      browser.takeScreenshot();
    }
  },

  /**
   * Runs after a Cucumber scenario
   */
  afterScenario: function(uri, feature, scenario, result, sourceLocation) {},

  /**
   * Runs after a Cucumber feature
   */
  afterFeature: function(uri, feature, scenarios) {},

  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function(result, capabilities, specs) {},

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  afterSession: function(config, capabilities, specs) {},

  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async function(exitCode, config, capabilities, results) {},
  
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  onReload: function(oldSessionId, newSessionId) {},
};
