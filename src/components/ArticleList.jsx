import Article from "./Article";
function ArticleList() {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}

export default ArticleList;
