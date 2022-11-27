module.exports = {
    'Dummy test number 1 ' : function(browser){
        browser
        .url('https://www.unosquare.com/')
        .waitForElementVisible('body')
        .end();
    },

    'Test unosquare contactUs' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .click("li a[href = '/ContactUs']")
        .click("li a[href = '/Industries']")
        browser.end();
      },
    
      'test unosquare V2' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .click("li a[href = '/ContactUs']")
        .click("li a[href = '/Industries']")
        .assert.cssProperty("li a[href = '/About']", 'font-size', '12px') // This assert is going to fail
        browser.end();
      }
    
};