var axios = require("axios");
// NYTimes API Key
var timesKey = "049b820e0acb40e58c6ecbd316c73ea6";
var queryBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + timesKey + "&q=";

var helper = {
    // search for articles
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
    },
    // add articles to db
    savePost: function(data) {
        console.log(data)
        return axios.post("/api/saved")

    },
    // return saved articles from db
    getSaved: function() {
        return axios.get("/api/saved")
    },
    // delete article from db
    removeSaved: function(data) {
        return axios.delete("/api/saved/:id")
    }
}
module.exports = helper;