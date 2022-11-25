module.exports = {
    'Nightwatch assert activity' : function(browser){

        const getStartedLinkSelector = 'a[href="https://nightwatchjs.org/guide/overview/what-is-nightwatch.html"]';
        const searchBoxSelector = 'input[id=sidebar-filter]';
        const filterResultSelector = 'a[href="/guide/writing-tests/adding-assertions.html"]';
        const searchResultHeaderSelector = '//h2[contains(text(),"Adding assertions to tests")]';
        const blogFooterContent = 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.';

        browser
        .url('https://nightwatchjs.org/')
        .waitForElementVisible('.grey40')
        .assert.urlEquals('https://nightwatchjs.org/')
        .click(getStartedLinkSelector)
        .assert.elementPresent(getStartedLinkSelector)
        .setValue(searchBoxSelector, "Asserts")
        .assert.valueEquals(searchBoxSelector, "Asserts")
        .click(filterResultSelector)
        .assert.urlContains('writing-tests')
        .useXpath()
        .assert.visible(searchResultHeaderSelector) // pendiente de revisar este caso
        .useCss()
        .click('a[href="https://nightwatchjs.org/blog/"]')
        .waitForElementVisible('.address')
        .assert.textContains('.address', blogFooterContent)
        .end();
    }
};