import React, { Component } from 'react'
import Newscard from './Newscard'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export default class News extends Component {

    static defaultProps = {
        country: "in",
        category: "science",
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `NewsMonkey ${this.capitalizeFirstLetter(this.props.category)} News`
    }

    updatenews = async () => {
        this.props.progresshandle(25)
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        this.props.progresshandle(40)
        let parseData = await data.json()
        this.props.progresshandle(60)
        console.log(parseData.articles)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        })
        this.props.progresshandle(100)
    }

    async componentDidMount() {
        this.setState({ page: this.state.page + 1, })
        this.updatenews()
    }

    fetchMoreData = async () => {
        this.props.progresshandle(30)
        this.setState({ page: this.state.page + 1, })
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.props.progresshandle(60)

        console.log(parseData.articles)
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false,
        })
        this.props.progresshandle(100)
    }


    render() {
        return (
            <>
                {/* {this.state.loading === true ? <Spiner/> : <h3 className="text-center my-3 text-warning shadow bg-dark border border-warning rounded-pill py-2">NewsMonkey - {this.props.category} Top HeadLines</h3> } */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading === true ? <Spiner /> : <h3 className="text-center my-3 text-warning shadow bg-light border border-warning rounded-pill py-2">No More</h3>}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {

                                return <div className="col-xl-4 col-sm-6 my-2" key={element.url}>
                                    <Newscard title={(element.title === null) ? "No Title" : element.title.slice(0, 45)} description={(element.description === null) ? "No Description" : element.description.slice(0, 85)}
                                        imgUrl={element.urlToImage} moreUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.id} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )

    }
}
