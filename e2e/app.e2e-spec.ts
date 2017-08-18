import { DevsearchPage } from './app.po';

describe('devsearch App', () => {
  let page: DevsearchPage;

  beforeEach(() => {
    page = new DevsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
