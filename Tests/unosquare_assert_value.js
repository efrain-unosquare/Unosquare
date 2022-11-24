module.exports = {
  "Demo test unosquare": function (browser) {
    const userNameInputSelector = 'input[name="username"]';
    browser
      .windowMaximize()
      .url("https://dev.unosquare.com/redmine/login")
      .waitForElementVisible('body')
      .setValue(userNameInputSelector, 'username')
      .assert.valueEquals("input[name='username']", "username") // assert.value es obsoleto usar asser.valueEquals
      .end();
  },
};
