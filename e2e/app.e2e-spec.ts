import { TrainingQopiusPage } from './app.po';

describe('training-qopius App', () => {
  let page: TrainingQopiusPage;

  beforeEach(() => {
    page = new TrainingQopiusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
