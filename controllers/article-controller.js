const Article = require('../models/Article');

module.exports = function(router) {
    // render home page
    router.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html")
    });
    // search mongo for saved articles and display them
    router.get("/api/saved", (req, res) => {
        Article.find({}).sort({id: -1})
          .exec((err, doc) =>{
            res.json(doc)
          })
    });
    // add articles to saved list
    router.post("/api/saved", (req, res) => {
        const newArticle = new Article(req.body)
        newArticle.save((err, doc) => {
            if (err === 11000) {
                return false
            } else {
                res.send(doc)
            }
        })
    });
    router.get("/api/saved/:id", (req,res) => {
        console.log(req.params.id)
        Article.findById(req.params.id, (err, doc) => {
            if (err) throw err;
            else {
                res.json(doc)
            }
        })
    })
    // remove article
    router.delete("/api/saved/:id", function(req, res) {
        Article.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) throw err;
            else {
                res.send(todo)
            }
        })
    });
    router.get("*", function(req, res) {
        res.redirect("/");
    });
};