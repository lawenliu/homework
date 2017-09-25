import { ClassEmailDictionaryPage } from './app.po';

describe('class-email-dictionary App', function() {
  let page: ClassEmailDictionaryPage;

  beforeEach(() => {
    page = new ClassEmailDictionaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
