var React = require('react');
var Search = require('./children/Saved')

var Main = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron" style="background-color: #20315A ; color: white;">
                    <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
                </div>
                <div className="row">
                    <Search />
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
                        {//<Saved />
                        }
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Main;