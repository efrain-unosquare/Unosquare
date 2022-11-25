module.exports = {
    'Dummy test number 1 ' : function(browser){
        browser
        .url('https://nightwatchjs.org/')
        .waitForElementVisible('body')
        .end();
    }
};