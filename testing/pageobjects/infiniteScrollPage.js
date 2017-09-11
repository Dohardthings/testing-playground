import Page from './page';


export default class InfiniteScrollPage extends Page {

  constructor() {
    super();

  }

  get name() {
    return `infinite scroll page`;
  }
  get path() {return `infinite_scroll`;}
  get content() {return `//*[@id="content"]/div/div/div/div`;}




}
