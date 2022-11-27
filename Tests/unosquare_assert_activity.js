module.exports = {
  "Test assert visible and verify visible": function (browser) {
    browser
      .windowMaximize()
      .url("https://www.unosquare.com")
      .waitForElementVisible("body")
      .verify.visible("xxx") // si falla continua el flujo
      .url("https://www.google.com")
      .assert.visible(".non_existing")
      .url("https://www.amazon.com") // este paso no se ejecuto por que assert termina el proceso
      .end();
  },

  "Unosquare test assert attributeContains": function (browser) {
    browser
      .windowMaximize()
      .url("https://www.unosquare.com")
      .waitForElementVisible('.navbar-brand')
      .assert.attributeContains("li a[href = '/Services']", "class", "nav")
      .end();
  },

  "Unosquare test assert attributeEquals ": function (browser) {
    browser
      .windowMaximize()
      .url("https://www.unosquare.com")
      .waitForElementVisible("body")
      .assert.attributeEquals("li a[href = '/Services']", "class", "nav-link")
      .end();
  },

  "Unosquare test assert containsText": function (browser) {
    browser
      .windowMaximize()
      .url("https://www.unosquare.com")
      .waitForElementVisible("body")
      .waitForElementVisible("li a[href = '/Services']")
      .assert.containsText("li a[href = '/Services']", "SERVICES"); //Case Sensitive and is deprecated using textContains() instead
    browser.end();
  },

  "Test assert cssProperty and not cssProperty": function (browser) {
    browser
      .windowMaximize()
      .url("https://www.unosquare.com")
      .waitForElementVisible("body")
      .assert.cssProperty("li a[href = '/About']", "display", "block")
      .assert.not.cssProperty("li a[href = '/About']", "font-size", "12px");
    browser.end();
  },

  "Test assert Value": function (browser) {
    const userNameInputSelector = 'input[name="username"]';
    browser
      .windowMaximize()
      .url("https://dev.unosquare.com/redmine/login")
      .waitForElementVisible("body")
      .setValue(userNameInputSelector, "username")
      .assert.valueEquals("input[name='username']", "username") // assert.value es obsoleto usar asser.valueEquals
      .end();
  },
};
