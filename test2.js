describe('openbrowser', function() {
    browser.get('https://www.twentyfour.me');

  it('should contain website name', function() {
    expect(browser.getCurrentUrl()).toContain('twentyfour');
  });

  it('should load correct url', function() {
    expect(browser.getCurrentUrl()).toContain('https://www.twentyfour.me');
  });
});
