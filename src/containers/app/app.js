import React from "react";
import MainContent from "../main-content/main-content";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
export default App;
