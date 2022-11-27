module.exports = {
    'Dummy test number 1 ' : function(browser){
        browser
        .url('https://www.google.com/')
        .waitForElementVisible('body')
        .end();
    }
};