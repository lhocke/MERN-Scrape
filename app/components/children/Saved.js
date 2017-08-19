var React = require('react');
var helpers = require('../utils/helpers')

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {saved: []}
    }
    componentDidMount(){
        helpers.getSaved().then((returned)=>{
            let data = returned.data
            this.setState({saved: data})
        });
    }
    render() {
        return (
        <div className = "row">
            <div className="col-sm-12">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa fa-table"></i>   Saved Articles</h3>
                    </div>
                    <div className="panel-body" id="well-section">
                        {this.state.saved.map((article, i) => {
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
                                        <button type="button" className="btn btn-danger" id="delete-article" onClick={()=>{this.props.delete(article)}}>Delete This</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Saved;