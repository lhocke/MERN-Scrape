var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron" style="background-color: #20315A ; color: white;">
                    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <br/>
                    <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
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
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <br/>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                            </div>
                            <div className="panel-body" id="well-section">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr/>
                        <h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart"></i></small></h5>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;