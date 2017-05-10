
   exports.config = {
       seleniumAddress: 'http://localhost:4444/wd/hub',
       specs: ['homePageSpec.js'],

       onPrepare: function () {

           browser.driver.manage().window().setSize(1180, 900);

       },


   }
