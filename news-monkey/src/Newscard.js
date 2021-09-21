import React, { Component } from 'react'

export default class Newscard extends Component {
    render() {
      //let [title, description, imgUrl,] = this.props;
        return (
            <>
         
                <div className="card border border-warning">
                <span class="position-absolute top-0  translate-middle badge rounded bg-warning">{this.props.source===null?"Unknow-Source":this.props.source}</span>
                    <img className="card-img-top " src={(this.props.imgUrl === null)? "https://cdn.crash.net/styles/large_article/s3/image_importer/MotoGP/2941521.0008.jpg?itok=08_5Vgsq":this.props.imgUrl} alt="Loading. .." />
                    <div className="card-body bg-dark text-light text-center">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text"><small>By - {this.props.author === null?"Unknow":this.props.author}</small></p>
                        <a href={this.props.moreUrl} target="blank" className="btn btn-sm btn-outline-warning">More Details</a>
                    </div>
                </div>
          
            
            </>
        )
        
    }
}
