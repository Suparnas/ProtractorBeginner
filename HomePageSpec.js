  var HomePage = function() {
    this.centerStageButtons = element(by.css(".text-center"));
    this.tryTheAngular = this.centerStageButtons.all(by.css("a.button.button-large.button-primary")).get(0);
    //his.tryTheAngular = element(by.css("a.button.button-large.button-primary"));
    this.downloadButton = element(by.css(".button.button-large.button-secondary.has-shield.download-btn"));
  }
  describe('angularjs.org', function() {
    var homePage = new HomePage();

    beforeEach(function() {
      browser.get('https://angularjs.org/');
    });
    it('should have two buttons', function() {
      expect(homePage.tryTheAngular.isDisplayed()).toBe(true);
      //expect(homePage.downloadButton.isDisplayed()).toBe(true);
    });
  });


  var DownloadModal = function() {
    this.downloadModal = element(by.css(".modal.fade.ng-isolate-scope.download-modal.in"));
  }

  describe('Download button', function() {
    var homePage = new HomePage();
    var downloadModal = new DownloadModal();

    beforeEach(function() {
      browser.get('https://angularjs.org/');
    });

    it('should open up a download modal', function() {
      expect(downloadModal.downloadModal.isPresent()).toBe(false);
      //expect(downloadModal.downloadModal.isDisplayed()).toBe(false);
      homePage.downloadButton.click();

      expect(downloadModal.downloadModal.isDisplayed()).toBe(true);
      //expect(downloadModal.downloadModal.isPresent()).toBe(false);

    });
  });


  var TheBasics = function() {

    this.helloBox = element.all(by.css(".row.example")).get(0);
    this.nameField = this.helloBox.element(by.model("yourName"));
    this.helloOutput = this.helloBox.element(by.tagName("h1"));
  }

  describe('In "The Basics" tutorial', function() {
    var homePage = new HomePage();
    var theBasics = new TheBasics();

    beforeEach(function() {
      browser.get('https://angularjs.org/');
    });



    it('entering a name should output "Hello Name"', function() {


      var name = 'Suparna';
            theBasics.nameField.click();
            theBasics.nameField.sendKeys(name);
            expect(theBasics.helloOutput.getText()).toContain(name);
            expect(theBasics.helloOutput.getText()).toEqual('Hello' + ' ' + name + '!');

      // theBasics.nameField.click();
      // theBasics.nameField.sendKeys('Suparna');
      // expect(theBasics.helloOutput.getText()).toContain('Suparna');
      // expect(theBasics.helloOutput.getText()).toEqual('Hello Suparna!');

    });


  });
