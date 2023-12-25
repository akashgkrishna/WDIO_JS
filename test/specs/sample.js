const { expect } = require('chai');
describe('MyDemo App test', () => {
    it('should click on the specified XPath element', async () => {
        // Locate the element using the provided XPath
        const element = 
        await $(`android.widget.ImageView`);
        
        // Check if the element exists
        expect(await element.isExisting()).to.be.true;

        // Perform the click action on the element
        await element.click();

        await driver.pause(5000);

        // Add assertions or further actions if needed after the click
        // For instance, check if a new page loads or if an action is performed
        // Example: const newPageElement = await $('new element XPath');
        // await expect(await newPageElement.isDisplayed()).to.be.true;
    });
});``