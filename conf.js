let SpecReporter  = require('C://Users//iliyan.bogdanov//Desktop//Projects//QA//node_modules//jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.spec.js'],
  jasmineNodeOpts: {
    print: function() {}
  },
  onPrepare: function () {
    browser.manage().window().maximize();
    //Spec reporter configuration
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: false
      }
    }));
  }
};