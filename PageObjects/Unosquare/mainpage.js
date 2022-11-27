function getData() {
  return require('../../externalTestData/unosquareForm.json');//externalTestData/unosquareForm.json
  };

var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    const form = getData(); // obteniendo informacion del json
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .setValue('@companyTextField', form.company)
      .setValue('@phoneTextField', form.phone)
      .setValue('@messageTextArea', form.message)
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg')
      .pause(3000)
  }
};

var clickinMultiplePages = {
  clickMultiplePages: function(){
    this.api.pause(2000)
    return this.waitForElementVisible('@contactusMenu', 1000)
    .click('@industriesMenu')
    .waitForElementVisible('@industriesSection')
    .click('@bsfiLearnMoreBtn')
    .waitForElementVisible('@bsfiPage')
    .pause(3000)
  }
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, clickinMultiplePages],
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      blogMenu: {
        selector: "li a[href= 'https://blog.unosquare.com']"
      },
      headerServicePage: {
        selector: ".subtitle"
      },
      imageAttributeContains : {
        selector: "img[alt='Nearshore Development Services']"
      },
      inputSearchBlog: {
        selector: "input[name='query']"
      },
      searchBtn : {
        selector: "button[type='submit']"
      },
      labelTitleText:{
        selector: "#hero-label"
      },
      fiveFsFamily : {
        selector: "//div[@id='5Fs']/div/div[2]/div/p",
        locateStrategy: 'xpath'
      },
      companyTextField: {
        selector: "input.hs-input[name = 'company']"
      },
      phoneTextField: {
        selector: "input.hs-input[name = 'phone']"
      },
      messageTextArea: {
        selector: "textarea.hs-input[name = 'message']"
      },
      submitBtn: {
        selector: "input[value = 'Submit']"
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
      },
      bsfiLearnMoreBtn: {
        selector: "//*[@id='industries']/div[3]/div/div/div[1]/div/div[2]/a",
        locateStrategy: 'xpath'
      },
      industriesSection: {
        selector: ".gray-section",
        locateStrategy: 'css selector'
      },
      bsfiPage: {
        selector: "h1.header-title",
        localStrategy: 'css selector'
      }
    }
  };