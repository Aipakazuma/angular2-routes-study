import { browser, element, by } from 'protractor';

export class Angular2RoutesStudyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app_turtorial-root h1')).getText();
  }
}
