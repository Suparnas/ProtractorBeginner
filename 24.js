describe('openbrowser', function() {
      beforeEach(function() {
        browser.get('https://confr.com');
      });
      it('should contain website name', function() {
        expect(browser.getCurrentUrl()).toContain('https://confr.com');
      });

      it('should load correct url', function() {
        expect(browser.getCurrentUrl()).toContain('https://confr.com');
      });
    });

// var origFn = browser.driver.controlFlow().execute;
//
// browser.driver.controlFlow().execute = function() {
//   var args = arguments;
//
//   // queue 100ms wait
//   origFn.call(browser.driver.controlFlow(), function() {
//     return protractor.promise.delayed(500);
//   });
//
//   return origFn.apply(browser.driver.controlFlow(), args);
// };







      var TheEnter = function() {
        this.phoneBox = $(".force-focus-input.ng-scope");
        this.nameField = element(by.model("form.registrationPhoneNumber"));
        this.clickBox = $("button.blue-live.ng-scope");
        this.helloOutput = $("div.message.error.ng-binding.ng-scope");
        this.hellogOutput = $("div.message.info.ng-binding.ng-scope");

      }

      describe('Phone:', function() {
      var theEnter = new TheEnter();

        beforeEach(function() {
          browser.get('https://confr.com/');
        });

      it('Phone nymber not entered', function() {
          theEnter.clickBox.click();
          expect(theEnter.helloOutput.getText()).toEqual('Please enter a valid phone number');

        });

      it('Entered correct Phone Number', function() {
        var right = '6475444123';
        theEnter.phoneBox.click();
        theEnter.nameField.sendKeys(right);
        theEnter.clickBox.click();
        expect(theEnter.hellogOutput.getText()).toContain('SMS');
      });



      it('Entered wrong Phone Number', function() {
        var wrong = '98763426';
        theEnter.phoneBox.click();
        theEnter.nameField.sendKeys(wrong);
        theEnter.clickBox.click();
        expect(theEnter.helloOutput.getText()).toContain('enter');

      });


    });
