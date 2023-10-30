import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
function App() {
  const data = {
    username: "mig",
    email: "mig@me.com",
    articles: [
      { header: "Hello World", content: "This is my first article" },
      { header: "Hello World 2", content: "This is my second article" },
      { header: "Hello World 3", content: "This is my third article" },
    ],
    contactInfo: {
      email: "stuff@kea.dk",
    },
  };
  return (
    <>
      <Header username={data.username} email={data.email} />
      <ArticleList articles={data.articles} />
      <Footer contact={data.contactInfo.email} />
    </>
  );
}

export default App;
