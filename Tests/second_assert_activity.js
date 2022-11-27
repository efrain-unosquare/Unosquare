module.exports = {
    'Nightwatch assert activity' : function(browser){

        const getStartedLinkSelector = 'a[href="https://nightwatchjs.org/guide/overview/what-is-nightwatch.html"]';
        const searchBoxSelector = 'input[id=sidebar-filter]';
        const filterResultSelector = 'a[href="/guide/writing-tests/adding-assertions.html"]';
        const searchResultHeaderSelector = '//*[@id="guide-container"]/div/div/div/div[2]/div/div/div[1]/h2';
        const blogFooterContent = 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.';

        // punto 5
        const apiMenuSelector = 'a[href="https://nightwatchjs.org/api/"]';
        const sidebarMenuLinkSelector = "button[data-bs-target='#commands-collapse']";
        const overviewCommandSelector = "a[href='/api/commands/#api-commands']";
        const apiHeaderSelector = "//*[@id='api-commands']";
    

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
        .assert.not.textContains(searchResultHeaderSelector, 'API Commands')
        .useCss()
        .click(apiMenuSelector)
        .click(sidebarMenuLinkSelector)
        .click(overviewCommandSelector)
        .useXpath()
        .assert.visible(apiHeaderSelector)
        .assert.textContains(apiHeaderSelector, "API Commands")
        .useCss()
        .click('a[href="https://nightwatchjs.org/blog/"]')
        .waitForElementVisible('.address')
        .assert.textContains('.address', blogFooterContent)
        .end();
    }
};