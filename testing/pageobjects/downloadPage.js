import Page from './page';


export default class DownloadPage extends Page {

  constructor() {
    super();

  }

  get name() {
    return `download page`;
  }
  get path() {return `download`;}
  get fileForDownload() {return `//*[@id="content"]/div/a[1]`;}




}
