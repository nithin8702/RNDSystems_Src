import { RNDSystemsUIPage } from './app.po';

describe('rndsystems-ui App', () => {
  let page: RNDSystemsUIPage;

  beforeEach(() => {
    page = new RNDSystemsUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
