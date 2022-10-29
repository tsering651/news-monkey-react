import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Trending-News headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="MyTitLE" description="how about you" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitLE" description="how about you" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitLE" description="how about you" />
          </div>
        </div>
       
      </div>
    );
  }
}
