import React from 'react';
import Found from './children/Found';
import Search from './children/Search';
import Saved from './children/Saved';
import helpers from './utils/helpers';

//Using extends to comply with future convention 
class Main extends React.Component {
    // lifecycle events
    constructor(props) {
        super(props);
        this.state = {searchTerm: "", startYear: "", endYear: "", numResults: "5", results: [], saved: []}
        this.setTerm = this.setTerm.bind(this);
        this.saveArticle= this.saveArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
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
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            helpers.runQuery(this.state.searchTerm,
                this.state.numResults,
                this.state.startYear,
                this.state.endYear)
            .then((data) => {
                if (data) {
                    this.setState({results: data})
                }
            })
        }
        
    }
    componentDidMount() {
        helpers.getSaved().then((returned)=>{
            let data = returned.data
            this.setState({saved: data})
            // console.log(this.state.saved)
        });
    }
    getArticles() {
        helpers.getSaved().then((returned)=>{
            let data = returned.data
            this.setState({saved: data})
        });
    }
    saveArticle(article) {
        helpers.savePost(article)
    }
    deleteArticle(article) {
        helpers.removeSaved(article).then(this.getArticles());
    }
    // render page
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-newspaper-o"></i> New York Times Search</h1>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Search setTerm={this.setTerm} />
                    </div>
                </div>
                <div className = "row">
                    <div className="col-sm-12">
                        <Found results={this.state.results} saveArticle={this.saveArticle} />
                    </div>
                </div>
                <div className="row">
                    <Saved saved={this.state.saved} delete={this.deleteArticle}/>
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

export default Main;