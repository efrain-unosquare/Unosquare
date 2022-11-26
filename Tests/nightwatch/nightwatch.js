module.exports =  {
   /* 'nightwatch test validation page' : function(browser){
        const nightwatch = browser.page.landingpage();

        nightwatch
        .navigate()
        .waitForElementVisible('@guideMenu')
        .click('@apiMenu')
        .click('@communityMenu')
        .end();
    },

    'activity test scrip POM ': function(browser){
        const nightwatch = browser.page.landingpage();

        nightwatch
        .navigate()
        .waitForElementVisible('@guideMenu')
        .assert.urlEquals('https://nightwatchjs.org/')
        .assert.titleEquals('Nightwatch.js | Node.js powered End-to-End testing framework')
        .assert.visible('@nightwatchInstruction')
        .click('@mainSearchBox')
        .assert.enabled('@searchModalOpen')
        .setValue('@searchInputModal', 'assert')
        .click('@resultLink')
        .end();
    },*/

    'test custom command ' : function(browser){
        var nightwatch = browser.page.landingpage();

        nightwatch
        .navigate()
        .searchDocumentation();

        browser.end();
    }
}