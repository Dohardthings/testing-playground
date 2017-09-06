export default class Page {

  get name() {return `basePage`;}
  waitAndClick(element) {
    browser.waitUntil(() => {
      return browser.isVisible(element);
    }, `Unable to locate ${element}. Current url is ${browser.getUrl()}`, 500);
    browser.click(element);
  }

  waitUntilVisible(element) {
    browser.waitUntil(() => {
      return browser.isVisible(element);
    }, `Unable to locate ${element}. Current url is ${browser.getUrl()}`, 500);

  }


  open(path) {
    browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

}
