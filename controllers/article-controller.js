const Article = require('../models/Article');

module.exports = function(router) {
    // render home page
    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html")
    });
    // search mongo for saved articles and display them
    router.get("/api/saved", function(req, res) {
        Article.find({}).sort({id: -1})
          .exec(function(err, doc) {
            res.json(doc)
          })
    });
    // add articles to saved list
    router.post("/api/saved", (req, res) => {
        console.log("saving")
        const newArticle = new Article(req.body)
        newArticle.save((err, doc) => {
            if (err) throw err; 
            else {
                res.send(doc)
            }
        })
    });
    // remove article
    router.delete("/api/saved", function(req, res) {
        Article.remove(({_id: req.body._id}))
    });
};