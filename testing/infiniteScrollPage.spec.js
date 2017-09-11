
const expect = require(`chai`).expect;

import InfiniteScrollPage from './pageobjects/infiniteScrollPage';

let Page;

describe(`scroll farther than the page is long`, function () {
  it(`should scroll infinitely`, function () {
    var Page = new InfiniteScrollPage();
    Page.open(Page.path);
   Page.waitUntilVisible(Page.content);
   browser.scroll(0,1000);
   var result = browser.getCssProperty('//*[@id="content"]/div/div/div/div','height').parsed.value;
   expect(result).to.not.equal(816);
  });


});
