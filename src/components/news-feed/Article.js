import React from "react";
import "./NewsFeed.css";

const Article = ({ article, i }) => {
  return (
    <div className="container">
      <li key={i}>
        Author:{article.author ? article.author : "Anonymous"} <br></br>
        Content:{article.content}
      </li>
    </div>
  );
};

export default Article;
