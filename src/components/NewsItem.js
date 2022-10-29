import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let{title,description}=this.props;
    return (
      <div >
        <div class="card" style={{width:"18rem"}}>
          <img src="https://ichef.bbci.co.uk/news/1024/branded_news/6ABA/production/_127422372_gettyimages-1244317110.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
             {description}
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
