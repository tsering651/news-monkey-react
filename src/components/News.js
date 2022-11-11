import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";




export default class News extends Component {
 
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b7195fd9d964b35b8ac281aa47d7d43&page=1&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true
      })
    let data = await fetch(url);
    let parsedData = await data.json();
   
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  
  }
  handleNextClick= async ()=> {
    if(this.state.page + 1>Math.ceil(this.state.totalResults/10)){
             alert("No more news...");
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b7195fd9d964b35b8ac281aa47d7d43&page=${
     this.state. page
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
   
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    });}
  }

   handlePrevClick=async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7b7195fd9d964b35b8ac281aa47d7d43&page=${
      this.state.page -1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  }
   
  render() {
    
    return (
      <div className="container my-3">
        <h2 className='text-center'>Trending-News headlines</h2>
       {
        //if loading is true then it will show the spinner
       this.state.loading && <Spinner/>
       } 
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  url={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-primary my-3"
            onClick={this.handlePrevClick}
          >
           
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-primary my-3"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1>Math.ceil(this.state.totalResults/10)}
            
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
