import React from 'react'
import helpers from '../utils/helpers'

class Saved extends React.Component {
    constructor(props) {
        super(props);
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
                    {this.props.saved.map((article, i) => {
                        return (
                            <div key={i} className="row">
                                <div className="col-sm-10">
                                    <a href={article.url}>
                                        <h3>{article.title}</h3>
                                    </a>
                                    <p>{article.snippet}</p>
                                    <hr/>
                                </div>
                                <div className="col-sm-2">
                                    <button type="button" className="btn btn-danger" id="save-article" onClick={()=>{this.props.delete(article)}}>Delete This</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        );
    }
}
export default Saved;