import React from "react";
import MainContent from "../main-content/main-content";
import Header from "../../components/header/header";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainContent />
      </div>
    );
  }
}
export default App;
