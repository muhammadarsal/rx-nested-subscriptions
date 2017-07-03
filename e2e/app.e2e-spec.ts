import { RxNestedSubscriptionsPage } from './app.po';

describe('rx-nested-subscriptions App', () => {
  let page: RxNestedSubscriptionsPage;

  beforeEach(() => {
    page = new RxNestedSubscriptionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
