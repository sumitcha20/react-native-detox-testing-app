const fetch = require('node-fetch');
const {writeFile, statSync} = require('fs');
const jestExpect = require('expect');

let count = 0;
beforeEach(async () => {
  count++;
  await device.takeScreenshot(`myscrnsht_${count}`);  
});
describe('Quotes Add flow test', () => {
  it('should swipe left and open update window', async()=>{
    await element(by.id('swipeRight')).atIndex(0).swipe('left');
    await element(by.id('editButton')).atIndex(0).tap();
 });

 it('should empty the current quote text', async () => {
   await element(by.id('authorName')).clearText();
   await element(by.id('quoteText')).clearText();
 });
 it('should update the quote quote', async () => {
   await element(by.id('authorName')).typeText('TestAuthor');
   await element(by.id('quoteText')).typeText('A test quote text is being written.');
   await element(by.id('saveButton')).tap();
 });
});

