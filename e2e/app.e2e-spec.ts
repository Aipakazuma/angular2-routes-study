import { Angular2RoutesStudyPage } from './app.po';

describe('angular2-routes-study App', function() {
  let page: Angular2RoutesStudyPage;

  beforeEach(() => {
    page = new Angular2RoutesStudyPage();
  });

  it('should display message saying app_turtorial works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app_turtorial works!');
  });
});
