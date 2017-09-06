import Page from './page';


export default class UploadPage extends Page {

  constructor() {
    super();

  }

  get name() {
    return `upload page`;
  }
  get path() {return `upload`;}
  get select() {return `#file-upload`;}
  get uploadBtn() {return `#file-submit`;}



}
