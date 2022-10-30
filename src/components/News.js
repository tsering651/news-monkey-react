import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

 async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=7b7195fd9d964b35b8ac281aa47d7d43"
     let data= await fetch(url);
     let parsedData=await data.json();
     console.log(parsedData);
     this.setState({articles:parsedData.articles})
}

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Trending-News headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4"key={element.url}>
                <NewsItem
                  url={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                />
              </div>
            
          })}
        </div>
        <div className="container d-flex justify-content-between">
         <button type="button" class="btn btn-primary my-3"> &larr; Previous</button>
         <button type="button" class="btn btn-primary my-3">Next &rarr;</button>
        </div>
      </div>
    );
  }
}
