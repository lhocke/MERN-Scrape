var React = require('react');

class Saved extends React.Component {
    render() {
        return (
        <div className="col-sm-12">
            <br/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-table"></i>   Saved Articles</h3>
                </div>
                <div className="panel-body" id="well-section">
                </div>
            </div>
        </div>
        );
    }
}
module.exports = Saved;