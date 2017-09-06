
const expect = require(`chai`).expect;

import BrokenImagesPage from './pageobjects/brokenImagesPage';

let Page;

describe(`check and see if images have an alt tag`, function () {
  it(`should check for an alt tag`, function () {
    var Page = new BrokenImagesPage();
    Page.open(Page.path);
    Page.waitUntilVisible(Page.image1);
    expect(/(alt=)+/g.test(browser.getHTML(Page.image1))).to.be.equal(true);

  });
  it(`should check for an alt tag`, function () {
    var Page = new BrokenImagesPage();
    Page.open(Page.path);
    Page.waitUntilVisible(Page.image2);
    expect(/(alt=)+/g.test(browser.getHTML(Page.image2))).to.be.equal(true);

  });
  // Page.waitUntilVisible(Page.brokenImage3);
  // Page.waitUntilVisible(Page.brokenImage4);
  // Page.waitUntilVisible(Page.brokenImage5);
});
