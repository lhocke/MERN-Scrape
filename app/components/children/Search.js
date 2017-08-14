var React = require('react');

class Search extends React.Component{
    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.setTerm(this.state.searchTerm);
        this.setState({searchTerm: ""})
    }
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
                                <form role="form">
                                    <div className="form-group">
                                        <label htmlFor="search">Search Term:</label>
                                        <input value={this.props.searchTerm} type="text" className="form-control" id="search-term" onChange={this.handleChange} required/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                                        <select className="form-control" id="num-records-select">
                                            <option value="1">1</option>
                                            <option value="5" selected>5</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="start-year">Start Year (Optional):</label>
                                        <input type="text" className="form-control" id="start-year"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="end-year">End Year (Optional):</label>
                                        <input type="text" className="form-control" id="end-year"/>
                                    </div>
                                    <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                                    <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Search;