// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress','junit','coverage'],    
    junitReporter: { 
 outputDir : 'target/surefire-reports/'   
    },
    angularCli: {
      environment: 'dev',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    autoWatch: false, 
    singleRun: true
  });
};
