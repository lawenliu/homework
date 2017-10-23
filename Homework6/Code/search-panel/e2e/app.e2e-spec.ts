import { SearchPanelPage } from './app.po';

describe('search-panel App', function() {
  let page: SearchPanelPage;

  beforeEach(() => {
    page = new SearchPanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
