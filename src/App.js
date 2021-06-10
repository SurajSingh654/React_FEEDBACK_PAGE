import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import React from "react";
const App = () => {
  // return React.createElement(
  //   "div",
  //   { className: "main-body" },
  //   React.createElement(Header, {}),
  //   React.createElement(Content, {})
  // );
  const saveData = (enteredData) => {
    const FeedCard = {
      ...enteredData,
    };
    // console.log(FeedCard);
    // if (FeedCard.submit === "false") console.log("hello");
  };

  return (
    <div className="main-body">
      <Header />
      <Content onSubmitting={saveData} />
    </div>
  );
};

export default App;
