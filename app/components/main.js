var React = require('react');
var Search = require('./children/Search');
var Saved = require('./children/Saved');

// class Main extends React.Component{
    
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: "", results: "", saved: ""}
    }
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