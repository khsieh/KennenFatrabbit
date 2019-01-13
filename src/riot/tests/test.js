const myKey = process.env.RIOT_API_KEY;
const keyUrl = '?api_key=' + myKey;
const baseUrl = 'https://na1.api.riotgames.com/lol/';
const dailyChamps = 'platform/v3/champion-rotations'


function test() {
    const request = require('request');
    request(baseUrl + dailyChamps + keyUrl, 
    function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

}
test();
