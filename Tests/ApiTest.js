module.exports = {
    before: function (browser) {
    },

   'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct&date=2014-10-01'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            var copyrightName = response.body.copyright !== undefined ? response.body.copyright : '';
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(copyrightName, 'Francesco Antonucci')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct&date=2014-10-01'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'My Name')
        })
    },


    'API Testing - GET Activity 1': function (browser) {
        var apiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/2496817?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.name, '496817 (1989 VB)')
            browser.assert.equal(response.body.absolute_magnitude_h, '19.9')
            browser.assert.equal(response.body.is_potentially_hazardous_asteroid, true)
        })
    },

    'API Testing - GET Activity 2': function (browser) {
        var apiUrl = 'https://api.nasa.gov/EPIC/api/natural?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body[0].caption, "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft")
            browser.assert.equal(response.body[0].image, 'epic_1b_20221125002713')
            browser.assert.equal(response.body[0].version, '03')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name 2', 'job':'Unosquare QA 2'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name 2')
            browser.assert.equal(response.body.job, 'Unosquare QA 2')
        })
    },

    'API Testing - POST Login Success': function(browser){
        var apiUrl = 'https://reqres.in/api/login'
        var requestBody = {'email':'eve.holt@reqres.in', 'password':'cutyslicka'}
        browser.apiPost(apiUrl, requestBody, null, null, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.token, 'QpwL5tke4Pnpja7X4')
        })
    }
};