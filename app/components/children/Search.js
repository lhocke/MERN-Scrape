import React from 'react';
import helpers from "../utils/helpers";

class Search extends React.Component{
    // define initial values
    constructor(props) {
        super(props);
        this.state = {searchTerm:"", numResults: "5", startYear: "", endYear: "", saved: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault(); 
        this.props.setTerm(
            this.state.searchTerm,
            this.state.numResults,
            this.state.startYear,
            this.state.endYear
        );
        this.setState({
            searchTerm: "",
            numResults: "5",
            startYear: "",
            endYear: "",
            saved: ""
        })
    }
    handleReset() {
        $('#well-section').empty()
    }
    // render search component
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <br/>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-list-alt"></i>   Search Parameters</h3>
                            </div>
                            <div className="panel-body">
                                <form role="form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="search">Search Term:</label>
                                        <input name="searchTerm" value={this.state.searchTerm} type="text" className="form-control" id="search-term" onChange={this.handleChange} required/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                                        <select name="numResults" value={this.state.numResults} className="form-control" id="num-records-select" onChange={this.handleChange} required>
                                            <option value="1">1</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="start-year">Start Year (Optional):</label>
                                        <input name="startYear" value={this.state.startYear} type="text" className="form-control" id="start-year" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="end-year">End Year (Optional):</label>
                                        <input name="endYear" value={this.state.endYear} type="text" className="form-control" id="end-year" onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                                    <button type="button" className="btn btn-default" id="clear-all" onClick={this.handleReset}><i className="fa fa-trash"></i> Clear Results</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <br/>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-table"></i>   Top Articles</h3>
                            </div>
                            <div className="panel-body" id="well-section">
                                {this.props.results.map((search, i) => {
                                    console.log(search)
                                    var article = `article ${i}`
                                    return (
                                        <div key={i} className="row">
                                            <div className="col-sm-10">
                                                <a href={search.web_url}>
                                                    <h3>{search.headline.main}</h3>
                                                </a>
                                                <p>{search.snippet}</p>
                                            </div>
                                            <div className="col-sm-2">
                                                <button type="button" className="btn btn-danger" id="save-article" onClick={() => {this.props.saveArticle(search)}}>Save This</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Search;