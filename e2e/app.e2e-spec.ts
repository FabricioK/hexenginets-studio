import { HexenginetsStudioPage } from './app.po';

describe('hexenginets-studio App', () => {
  let page: HexenginetsStudioPage;

  beforeEach(() => {
    page = new HexenginetsStudioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
