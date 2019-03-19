var request = require('request');
const {
    Given,
    When,
    Then
} = require('cucumber');
const assert = require('assert');
const fetch = require("node-fetch");

When('I make an API call using callbacks', function() {
    fetch('https://restcountries.eu/rest/v2/name/argentina')
        .then(function(response) {
            return response.json();
        })
        .then(function(jasonFile) {
            data = jasonFile[0]
            dataCapital = data['capital'].toString()
        });
});

Then('Show the capital {string}', function(input) {
    fetch('https://restcountries.eu/rest/v2/name/argentina')
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonFile) {
            data = jsonFile[0]
            dataCapital = data['capital'].toString()
            console.log(dataCapital)
            assert.equal(dataCapital, input);
        });
});
