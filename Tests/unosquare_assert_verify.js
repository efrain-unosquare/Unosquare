module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .verify.visible('nav-icon') // si falla continua el flujo
      .url('https://www.google.com')
      .assert.visible('gLFyf')
      .url('https://www.amazon.com') // este paso no se ejecuto por que assert termina el proceso
      .end();
    }
  };