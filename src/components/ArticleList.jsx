import Article from "./Article";
function ArticleList(props) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        {props.articles.map((art) => (
          <Article header={art.header} content={art.content}></Article>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
