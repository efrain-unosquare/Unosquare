module.exports = {

    'test pages validation' : function(browser) {
        var unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('@contactusMenu')
        .click('@contactusMenu')
        .click('@industriesMenu')
        browser.end();
    },

    'test service menu': function(browser){
        const unosquare = browser.page.mainpage();
        const headerText = 'Unosquare, at its core, has a mission driven by three guiding purposes for every individual that is part of the organization: personal, professional and social.';

        unosquare
        .navigate()
        .waitForElementVisible('@contactusMenu')
        .click('@servicesMenu')
        .assert.urlEquals('https://www.unosquare.com/Services')
        .assert.titleEquals('Software Engineering Services | Agile Software Development Services')
        .waitForElementVisible('h2')
        .assert.attributeContains('@imageAttributeContains', 'alt', 'Nearshore Development Services')
        .assert.cssProperty('.subtitle', 'text-transform', 'uppercase')
        .assert.not.cssProperty('.subtitle', 'display', 'flex')
        .assert.textContains('.footer-text', headerText)
        .end();
    },


    'test search validation': function(browser){
        const unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('@contactusMenu')
        .click('@blogMenu')
        .assert.titleEquals('Software Development Blog | Digital Transformation Blog')
        .assert.attributeContains('@inputSearchBlog', 'id', 'search-bar')
        .setValue('@inputSearchBlog', 'test')
        .click('@searchBtn')
        .assert.urlEquals('https://info.unosquare.com/blog-search?query=test')
        .assert.cssProperty('.title-header', 'padding-bottom', '5px')
        .assert.not.cssProperty('.title-header', 'line-height', '200px')
        .assert.textContains('.results-title', 'test')
        .end();
    },

    'test faild validation' : function(browser){
        const unosquare = browser.page.mainpage();
        const contentText = 'We want every employee to feel supported and appreciated. We encourage referrals from existing employees of their friends and family because those networks strengthen our company, culture and community.';

        unosquare
        .navigate()
        .waitForElementVisible('@contactusMenu')
        .click('@aboutMenu')
        .assert.titleEquals('Staff Augmentation Company | Our Software Development Mission')
        .assert.attributeContains('@labelTitleText', 'id', 'hero-label')
        .assert.urlEquals('https://www.unosquare.com/About')
        .assert.textContains('@fiveFsFamily', contentText)
        .assert.cssProperty(".content-home", "padding-left", "53px")
        .assert.not.cssProperty(".content-home","padding-left","53px!important")
        .setValue('@inputSearchBlog', 'test')
        .end();
    },

    'test custom command example' : function(browser) {
        var unosquare = browser.page.mainpage();
        unosquare
        .navigate()
        .contactUnosquare()
        .clickMultiplePages();
        
        browser.end();
      },
};