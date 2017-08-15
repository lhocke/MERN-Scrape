import React from 'react'
import helpers from '../utils/helpers'

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {saved: []}
    }
    // componentDidMount() {
    //     helpers.getSaved().then(function(data){
    //         this.setState({saved: data})
    //     }.bind(this));
    // }
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
export default Saved;