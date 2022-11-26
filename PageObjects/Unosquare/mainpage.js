module.exports = {
    url: 'https://www.unosquare.com',
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
      }
    }
  };