import axios from "axios";
// NYTimes API Key
const timesKey = "049b820e0acb40e58c6ecbd316c73ea6";
const queryBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${timesKey}&q=`;

const helper = {
    // search for articles
    runQuery: (search, num, start, end) => {
        var queryURL = queryBase + search;
        // num = num - 1
        if (start !== 0) {
            queryURL+= "&begin_date=" + start + "0101";
        }
        if (end !== 0) {
            queryURL += "&end_date" + end + "1231"
        }
        // console.log(queryURL)
        return axios.get(queryURL).then( (response) => {
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
    savePost: (data) => {

        console.log(data.headline.main)
        console.log(data.web_url)
        axios.post("/api/saved", {
            title: data.headline.main,
            date: data.pub_date,
            snippet: data.snippet,
            url: data.web_url}
            ).then((result) => {
            return result
        })
    },
    // return saved articles from db
    getSaved: () => {
        return axios.get("/api/saved")
        // .then((result) =>{
        //     console.log(result)
        //     return result
        // })
    },
    // delete article from db
    removeSaved: (data) => {
        return axios.delete("/api/saved/:id")
    }
}
export default helper