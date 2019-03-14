import { FakestorePage } from './app.po';

describe('fakestore App', () => {
  let page: FakestorePage;

  beforeEach(() => {
    page = new FakestorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
