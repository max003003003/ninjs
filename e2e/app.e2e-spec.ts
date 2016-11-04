import { NinjsPage } from './app.po';

describe('ninjs App', function() {
  let page: NinjsPage;

  beforeEach(() => {
    page = new NinjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
