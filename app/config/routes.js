const Article = require('../../models/Article');

module.exports = function(router) {
    // render home page
    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html")
    });
    // search mongo for saved articles and display them
    router.get("/api/saved", function(req, res) {
        Article.find({saved:true}).sort({id: -1})
          .exec(function(err, doc) {
            res.json(doc)
          })
    });
    // add articles to saved list
    router.post("/api/saved", (req, res) => {
        console.log("saving")
        article = new Article({
            title: req.headline,
            date: req.pub_date,
            url: req.web_url
        })
        article.save((err, res) => {if (err) throw err; else {console.log(res)}})
    });
    // remove article
    router.delete("/api/saved", function(req, res) {
        Article.remove(({_id: req.body._id}))
    });
};