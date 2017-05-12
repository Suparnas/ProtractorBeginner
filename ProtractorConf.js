
   exports.config = {
       seleniumAddress: 'http://localhost:4444/wd/hub',
        //specs: ['24.js'],
       suites:
       {
         one: 'homePageSpec.js',
         two: 'jamstream.js',
         three: '24.js'

       },

       onPrepare: function () {

           browser.driver.manage().window().setSize(1180, 900);

       },





   }
