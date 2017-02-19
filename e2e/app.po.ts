import { browser, element, by } from 'protractor';

export class AbraAngularFormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('abra-root h1')).getText();
  }
}
