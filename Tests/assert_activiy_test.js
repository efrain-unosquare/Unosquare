module.exports = {
    "Testing assert feature": function (browser) {
      const searchInputSelector = 'input[name="q"]';
      const searchBtnSelector = 'input[name="btnK"]';
      const unoResultLink = 'a[href="https://www.unosquare.com/"]';
      const carrerLinkSelector = 'li a[href="https://people.unosquare.com"]';
  
      browser
        .windowMaximize()
        .url("https://www.google.com")
        .waitForElementVisible("img")
        .assert.visible(searchInputSelector)
        .setValue(searchInputSelector, "unosquare")
        .assert.valueEquals(searchInputSelector, 'unosquare')
        .saveScreenshot('screens/search_input.png')
        .click(searchBtnSelector)
        .saveScreenshot('screens/search_button.png')
        .waitForElementVisible('#search')
        .assert.urlContains('unosquare')
        .click(unoResultLink)
        .saveScreenshot('screens/unosquare_home_page.png')
        .click(carrerLinkSelector)
        .assert.titleEquals('Unosquare Careers')
        .click('.navbar-toggler.pointer')
        .click('.nav-link[href="#apply"]')
        .click('a[href="jobs/"]') // si se realiza la accion pero sale esto en consola: Error while running .clickElement() protocol action: element not interactable
        .assert.urlEquals('https://people.unosquare.com/jobs')
        .saveScreenshot('screens/jobs_page.png')
        .end();
    },
  };
  