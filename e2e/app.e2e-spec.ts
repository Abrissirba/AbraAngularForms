import { AbraAngularFormsPage } from './app.po';

describe('abra-angular-forms App', () => {
  let page: AbraAngularFormsPage;

  beforeEach(() => {
    page = new AbraAngularFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('abra works!');
  });
});
