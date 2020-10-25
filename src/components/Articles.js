import React, { useState, useEffect } from "react";
import SkeletonElement from "./skeleton/SkeletonElement";
import SkeletonArticle from "./skeleton/SkeletonArticles";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);

  // console.log(articles);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {/* <SkeletonElement type="title" />
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="text" />
      <SkeletonElement type="avatar" /> */}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles &&
        Array.from(Array(5).keys()).map((item) => (
          <SkeletonArticle key={item} />
        ))}
    </div>
  );
};

export default Articles;
