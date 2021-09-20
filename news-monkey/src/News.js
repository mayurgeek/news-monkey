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
    
    
constructor(){
    super();
    this.state = {
        articles:[],
        loading:false,
        page:1,
        //totalResults:1
    }
}   


 async componentDidMount(){
    this.setState({loading:true})
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0e38307582e44d184f453e588cca5c4&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parseData = await data.json()

    console.log(parseData.articles)
    this.setState({articles:parseData.articles,
        loading:false,}) 
}

 handleclickprev =  async ()=>{
    this.setState({loading:true})
     this.setState({page: this.state.page - 1 ,})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=e0e38307582e44d184f453e588cca5c4&page${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parseData = await data.json()
   
    console.log(parseData.articles)
    this.setState({
       articles : parseData.articles,
       loading:false,
    })
}

 handleclicknext = async ()=>{ 
     this.setState({loading:true})
 if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
  

 }else{ this.setState({page: this.state.page + 1 ,})
 let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category${this.props.category}&apiKey=e0e38307582e44d184f453e588cca5c4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
 let data = await fetch(url)
 let parseData = await data.json()

 console.log(parseData.articles)
 this.setState({
    articles : parseData.articles,
    totalResults:parseData.totalResults,
    loading:false
}) }

}

    render() {

return(
    <div className="container">
        {this.state.loading === true ? <Spiner/> : <h2>NewsMonkey - Top HeadLines</h2> }

  <div className="row row-cols-1 row-cols-md-3 g-4">
      {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-xl-3 col-sm-4 my-3" key={element.url}>
              <Newscard title={(element.title === null)?"No Title":element.title.slice(0,45)} description={(element.description === null)?"No Description":element.description.slice(0,85)} imgUrl={element.urlToImage} moreUrl={element.url} />
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
