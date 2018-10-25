import { Angular2Test1Page } from './app.po';

describe('angular2-test1 App', function() {
  let page: Angular2Test1Page;

  beforeEach(() => {
    page = new Angular2Test1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
