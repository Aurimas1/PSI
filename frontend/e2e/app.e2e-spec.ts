import { PsiPage } from './app.po';

describe('psi App', () => {
  let page: PsiPage;

  beforeEach(() => {
    page = new PsiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
