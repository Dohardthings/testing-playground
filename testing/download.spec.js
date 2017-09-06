
const expect = require(`chai`).expect;

import DownloadPage from './pageobjects/DownloadPage';

let Page;

describe(`choose a file and download it`, function () {
  it(`should choose a file for download`, function () {
    var Page = new DownloadPage();
    Page.open(Page.path);
    Page.waitAndClick(Page.fileForDownload);

// At this point I would check for verification of the file actually initializing a download, but   // I'm still not sure how to go about that.  For now, this will have to do as a boilerplate.

  });


});
