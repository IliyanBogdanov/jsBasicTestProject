describe('Angular Material PoC Automation Testing', function () {

  beforeEach(function () {
    browser.get('https://material.angular.io/components/categories/forms');
    browser.sleep(1000);
  });

  it('should be able to check a checkbox.', function () {
    //Checkbox
    element(by.css('body > material-docs-app > app-component-sidenav > mat-sidenav-container > mat-sidenav-content > div > div > div > app-components > div > a:nth-child(2) > mat-card')).click();
    element(by.css('.mat-checkbox-inner-container')).click();
    browser.sleep(1000);
    expect(1).toEqual(1);
  });

  it('should be able to select a radio button.', function () {
    //Select
    element.all(by.css('body > material-docs-app > app-component-sidenav > mat-sidenav-container > mat-sidenav-content > div > div > div > app-components > div > a:nth-child(6) > mat-card')).first().click();
    element.all(by.css('#mat-radio-2 > label > div.mat-radio-container > div.mat-radio-outer-circle')).first().click();
    element.all(by.css('#mat-radio-3 > label > div.mat-radio-container > div.mat-radio-outer-circle')).first().click();
    browser.sleep(1000);
  });

  it('should be able to use a slider.', function () {
    //Select
    element(by.css('body > material-docs-app > app-component-sidenav > mat-sidenav-container > mat-sidenav-content > div > div > div > app-components > div > a:nth-child(8) > mat-card')).click();
    let elem = element.all(by.css('.mat-slider-thumb')).first();
    let target = element(by.css('body > material-docs-app > app-component-sidenav > mat-sidenav-container > mat-sidenav-content > div > div > div > app-component-viewer > div > div > component-overview > doc-viewer > div > div > example-viewer > div > div.docs-example-viewer-body > slider-overview-example > mat-slider'));
    browser.actions().dragAndDrop(elem, target).mouseUp().perform();
    browser.sleep(1000);
  });

});