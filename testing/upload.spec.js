
const expect = require(`chai`).expect;

import UploadPage from './pageobjects/uploadPage';

let Page;

describe(`choose a file and upload it`, function () {
  it(`should choose a file`, function () {
    var Page = new UploadPage();
    Page.open(Page.path);
    Page.waitAndClick(Page.select);
    browser.chooseFile(Page.select, './testing/uploadFiles/resume.pdf');
   expect(/resume\.pdf$/.test(browser.getValue(Page.select))).to.be.equal(true);
   browser.click(Page.uploadBtn);
   Page.waitUntilVisible('#uploaded-files');
   expect(browser.isVisible('#uploaded-files'));
  });


});
