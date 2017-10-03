import { PatientDictionaryPage } from './app.po';

describe('patient-dictionary App', function() {
  let page: PatientDictionaryPage;

  beforeEach(() => {
    page = new PatientDictionaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
