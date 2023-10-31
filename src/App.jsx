import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { useState } from "react";
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const result = num1 + num2;
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
      <NavBar />
      <button onClick={() => setNum1((prevValue) => prevValue + 1)}>num1 {num1}</button>
      <button onClick={() => setNum2((oldValue) => oldValue + 1)}>num2 {num2} </button>
      <p>{result}</p>
      <Header username={data.username} email={data.email} />
      <ArticleList articles={data.articles} />
      <Footer contact={data.contactInfo.email} />
    </>
  );
}

export default App;
