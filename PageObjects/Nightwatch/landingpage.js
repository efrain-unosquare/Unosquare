var searchIntoNightatch = {
  searchDocumentation: function(){
    this.api.pause(1000);
    return this.waitForElementVisible('@guideMenu', 1000)
    .click('@mainSearchBox')
    .setValue('@searchInputModal', 'custom commands')
    .click('@resultLinkCustomCommand')
    .waitForElementVisible('@customCommandHeader')
  }
};


module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [searchIntoNightatch],
    elements: {
      guideMenu: {
        selector: "div a[href='https://nightwatchjs.org/guide/overview/what-is-nightwatch.html'"
      },
      apiMenu: {
        selector: "a[href = 'https://nightwatchjs.org/api/']"
      },
      communityMenu: {
        selector: "a[href = 'https://nightwatchjs.org/about/community/']"
      },
      blogMenu: {
        selector: "a[href = 'https://nightwatchjs.org/blog/']"
      },
      nightwatchInstruction : {
        selector: ".action",
        locateStrategy: 'css selector'
      },
      mainSearchBox : {
        selector: ".DocSearch-Button-Placeholder",
        localStrategy: 'css selector'
      },
      searchModalOpen : {
        selector: ".DocSearch-Modal",
        localStrategy: 'css selector'
      },
      searchInputModal:{
        selector: '#docsearch-input'
      },
      resultLink:{
        selector: "li a[href='https://nightwatchjs.org/guide/writing-tests/adding-assertions.html#-assert']",
      },
      resultLinkCustomCommand: {
        selector: "li a[href='https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html#guide-container']"
      },
      customCommandHeader: {
        selector: "//h2[contains(text(),'Define custom commands')]",
        locateStrategy: 'xpath'
      }
    }
  };
