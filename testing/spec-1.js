
const expect = require(`chai`).expect;

import CheckboxPage from './pageobjects/CheckboxPage';

let Page;

describe(`test checkbox function and toggle button`, function () {
  it(`should check the box when clicked`, function () {
    Page = new CheckboxPage();
    Page.open(Page.path);
    browser.pause(2000);
    browser.click(Page.checkbox);
    expect(browser.isSelected(Page.checkbox));
  });

  it(`should remove checkbox if button is pushed`, function () {
    Page = new CheckboxPage();
    Page.open(Page.path);
    browser.pause(2000);
    browser.click(Page.toggleBtn);
    browser.pause(5000);
    expect(browser.isVisible(Page.checkbox)).to.be.false;
    browser.click(Page.toggleBtn);
    browser.pause(5000);
    expect(browser.isVisible(Page.checkbox));
  });
});
