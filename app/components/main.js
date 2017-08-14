var React = require('react');
var Search = require('./children/Search');

class Main extends React.Component{
    getInitialState() {
        return( {searchTerm: "", results: "", saved: ""})
    },
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-newspaper-o"></i> New York Times Search</h1>
                </div>
                <div className="row">
                    <Search />
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