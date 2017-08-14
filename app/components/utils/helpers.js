var axios = require("axios");
// NYTimes API Key
var timesKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + timesKey + "&q=";

var helper = {
    
    runQuery: function(search, num, start, end) {
        var queryURL = queryBase + search;
        // num = num - 1
        if (start !== 0) {
            queryURL+= "&begin_date=" + start + "0101";
        }
        if (end !== 0) {
            queryURL += "&end_date" + end + "1231"
        }
        console.log(queryURL)
        return axios.get(queryURL).then(function(response) {
            var docs = response.data.response.docs;
            var data = [];
            // console.log(docs[0,4]);
            if (docs != null) {
                for (var i = 0; i < num; i++) {
                    data.push(docs[i])
                }
                return data
            }
        })
    }
}
module.exports = helper;