module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('login-logo')
      .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
      .end();
    }
  };