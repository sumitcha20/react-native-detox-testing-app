const fetch = require('node-fetch');
const {writeFile, statSync} = require('fs');
const jestExpect = require('expect');

describe('Quotes Add flow test', () => {
  beforeEach(async () => {
    //await device.reloadReactNative();
  });
  // it('should not exists the test author text', async()=>{
  //   await expect(element(by.text('TestAuthor'))).toNotExist();
  // });
  // it('should add new quote', async () => {
  //   await element(by.id('addQuoteButton')).tap();
  //   await element(by.id('authorName')).typeText('TestAuthor');
  //   await element(by.id('quoteText')).typeText('A test quote text is being written.');
  //   await element(by.id('saveButton')).tap();
  // });
  // it('should exists the test author text', async()=>{
  //   await expect(element(by.text('TestAuthor'))).toBeVisible();
  // });
  // it('should swipe left and open update window', async()=>{
  //    await element(by.id('swipeRight')).atIndex(0).swipe('left');
  //    await element(by.id('editButton')).atIndex(0).tap();
  // });

  // it('should empty the current quote text', async () => {
  //   await element(by.id('authorName')).clearText();
  //   await element(by.id('quoteText')).clearText();
  // });
  // it('should update the quote quote', async () => {
  //   await element(by.id('authorName')).typeText('TestAuthor');
  //   await element(by.id('quoteText')).typeText('A test quote text is being written.');
  //   await element(by.id('saveButton')).tap();
  // });

  it('should download a file', async ()=>{
    await fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
    .then(x => x.arrayBuffer())
    .then(x => writeFile('dummy.pdf', Buffer.from(x)))
    .then(async (x) =>{
      var stats = statSync('dummy.pdf');
      await jestExpect(typeof stats).toBe('object');
    });
  });
});

