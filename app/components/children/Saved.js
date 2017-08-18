import React from 'react'
import helpers from '../utils/helpers'

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {saved: []}
    }
    componentDidMount() {
        helpers.getSaved().then((returned)=>{
            let data = returned.data
            console.log(data)
        });
    }
    render() {
        return (
        <div className="col-sm-12">
            <br/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-table"></i>   Saved Articles</h3>
                </div>
                <div className="panel-body" id="well-section">
                    {function() {
                        for (var i =0; i < this.state.saved.length; i++){
                            let saved = this.state.saved[i]
                            console.log(saved)
                            let url = saved.url;
                            let headline = saved.headline.main;
                            let snippet = saved.snippet;
                            <div key={i} className="row">
                                <div className="col-sm-10">
                                    <a href={url}>
                                        <h3>{headline}</h3>
                                    </a>
                                    <p>{snippet}</p>
                                </div>
                                <div className="col-sm-2">
                                    <button type="button" className="btn btn-danger" id="save-article" onClick={() => {this.props.saveArticle(search)}}>Save This</button>
                                </div>
                            </div>
                        }
                    }}
                </div>
            </div>
        </div>
        );
    }
}
export default Saved;