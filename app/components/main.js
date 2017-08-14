var React = require('react');
var Search = require('./children/Search');
var Saved = require('./children/Saved');
var helpers = require('./utils/helpers')
//Using extends to comply with future convention 
class Main extends React.Component {
    // lifecycle events
    constructor(props) {
        super(props);
        this.state = {searchTerm: "", startYear: "", endYear: "", numResults: "5", results: [], saved: ""}
        this.setTerm = this.setTerm.bind(this)
        this.saveArticle= this.saveArticle.bind(this)
        // this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }
    // get search terms for api call
    setTerm(term, num, start, end) {
        if (start !== "" && end !== "") {
            this.setState({
                searchTerm: term,
                numResults: num,
                startYear: start,
                endYear: end
            })
        } else if (start === "" && end === "") {
            this.setState({
                searchTerm: term,
                numResults: num,
                startYear: 0,
                endYear: 0
            })
        } else if (start !== "" && end === "") {
            this.setState({
                searchTerm: term,
                numResults: num,
                startYear: start,
                endYear: 0
            })
        } else if (start === "" && end !== "") {
            this.setState({
                searchTerm: term,
                numResults: num,
                startYear: 0,
                endYear: end
            })
        }
    }
    // listen for update to the component state
    componentDidUpdate() {
        helpers.runQuery(this.state.searchTerm, this.state.numResults, this.state.startYear, this.state.endYear).then(function(data) {
            if (data) {
                console.log(data)
                this.setState({results: data})
            }
        }.bind(this))
    }
    saveArticle(event) {
        console.log("clicked")
        helpers.savePost().then(function(){}.bind(this))
    }
    // render page
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-newspaper-o"></i> New York Times Search</h1>
                </div>
                
                <Search setTerm={this.setTerm} results={this.state.results} saveArticle={this.saveArticle}/>

                <div className="row">
                    <Saved />
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Main;