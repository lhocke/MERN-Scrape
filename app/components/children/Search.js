var React = require('react');

class Search extends React.Component{
    render() {
        return (
            <div className="col-sm-12">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa  fa-list-alt"></i>   Search Parameters</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label for="search">Search Term:</label>
                                <input type="text" className="form-control" id="search-term"/>
                            </div>

                            <div className="form-group">
                                <label for="pwd">Number of Records to Retrieve:</label>
                                <select className="form-control" id="num-records-select">
                                    <option value="1">1</option>
                                    <option value="5" selected>5</option>
                                    <option value="10">10</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="start-year">Start Year (Optional):</label>
                                <input type="text" className="form-control" id="start-year"/>
                            </div>
                            <div className="form-group">
                                <label for="end-year">End Year (Optional):</label>
                                <input type="text" className="form-control" id="end-year"/>
                            </div>
                            <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                            <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Search;