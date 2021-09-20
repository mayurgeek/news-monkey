import React, { Component } from 'react'

export default class Newscard extends Component {
    render() {
      //let [title, description, imgUrl,] = this.props;
        return (
            <>
            <div>
                <div className="card h-100">
                    <img className="card-img-top " src={(this.props.imgUrl === null)? "https://cdn.crash.net/styles/large_article/s3/image_importer/MotoGP/2941521.0008.jpg?itok=08_5Vgsq":this.props.imgUrl} alt="Card image cap" />
                    <div className="card-body bg-dark text-light text-center">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.moreUrl} target="blank" className="btn btn-sm btn-outline-warning">More Details</a>
                    </div>
                </div>
            </div>
            
            </>
        )
        
    }
}
