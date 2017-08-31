import Page from './page';


export default class CheckboxPage extends Page {

  constructor() {
    super();

  }

  get name() {
    return `checkbox page`;
  }
  get path() {return `dynamic_controls`;}
  get checkbox() {return `#checkbox`;}
  get toggleBtn() {return `#btn`;}


  checkTheBox() {
    this.waitAndClick(this.checkbox);
  }
}
