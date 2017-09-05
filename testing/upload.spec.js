
const expect = require(`chai`).expect;

import UploadPage from './pageobjects/uploadPage';

let Page;

describe(`choose a file and upload it`, function () {
  it(`should choose a file`, function () {
    var Page = new UploadPage();
    // var file = path.join('.','testing','uploadFiles', 'resume.pdf');
    Page.open(Page.path);
    Page.waitAndClick(Page.select);
    browser.chooseFile(Page.select, './testing/uploadFiles/resume.pdf');
   expect(/resume\.pdf$/.test(browser.getValue(Page.select))).to.be.equal(true);
  });

  it(`should upload the chosen file`, function () {
     return true;
  });
});
