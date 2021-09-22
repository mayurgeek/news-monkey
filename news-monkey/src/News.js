import React, { Component } from 'react'
import Newscard from './Newscard'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export default class News extends Component {
static defaultProps = {
    country :"in",
     category : "science",
}
static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
}
    
 capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }   
constructor(props){
    super(props);
    this.state = {
        articles:[],
        loading:false,
        page:1,
        //totalResults:1
    }
    document.title = `NewsMonkey ${this.capitalizeFirstLetter(this.props.category)} News`
}   

 updatenews = async()=>{
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ca11b2052e3b42bba7272d1dfb6a45f0&page=${this.state.page}&pageSize=${this.props.pageSize}`
   let data = await fetch(url)
   let parseData = await data.json()

   console.log(parseData.articles)
   this.setState({articles:parseData.articles,
       loading:false,}) 
}

 async componentDidMount(){
   this.setState({page: this.state.page + 1 ,})
    this.updatenews()
}

 handleclickprev =  async ()=>{
    this.setState({page: this.state.page - 1 ,})
    console.log(this.state.page)
    this.updatenews()
}

 handleclicknext = async ()=>{ 
    this.setState({page: this.state.page + 1 ,})
    console.log(this.state.page)
    this.updatenews()
}

    render() {

return(
    <div className="container">
        {this.state.loading === true ? <Spiner/> : <h3 className="text-center my-3 text-warning shadow bg-dark border border-warning rounded-pill py-2">NewsMonkey - {this.props.category} Top HeadLines</h3> }

  <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-xl-4 col-sm-6 my-2" key={element.url}>
              <Newscard title={(element.title === null)?"No Title":element.title.slice(0,45)} description={(element.description === null)?"No Description":element.description.slice(0,85)} 
              imgUrl={element.urlToImage} moreUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.id} />
            </div>
        })}
        <div className="col-12 mt-3 d-flex justify-content-around">
            <button className="btn btn-sm rounded-pill bg-dark btn-outline-warning" disabled={this.state.page <= 1} onClick={this.handleclickprev}>&lt; Prev</button>
            <button className="btn btn-sm rounded-pill bg-dark btn-outline-warning" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleclicknext}>Next &gt;</button>
        </div>
        
    </div>
</div>
)
     
    }
}
