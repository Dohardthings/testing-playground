import Page from './page';


export default class BrokenImagesPage extends Page {

  constructor() {
    super();

  }

  get name() {
    return `broken images page`;
  }
  get path() {return `broken_images`;}
  get image1() {return `//*[@id="content"]/div/img[1]`;}
  get image2() {return `//*[@id="content"]/div/img[2]`;}
  get image3() {return `some selector prferably an ID or data-hook`;}
  get image4() {return `some selector prferably an ID or data-hook`;}
  get image5() {return `some selector prferably an ID or data-hook`;}




}
