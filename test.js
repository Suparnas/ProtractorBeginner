describe('openbrowser', function() {
    browser.get('http://www.jamstreams.net');

  it('should contain website name', function() {
    expect(browser.getCurrentUrl()).toContain('jamstreams.net');
  });

  it('should load correct url', function() {
    expect(browser.getCurrentUrl()).toContain('http://www.jamstreams.net');
  });
});
