import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // TODO: maybe refactor this into just high level component that container react rotuer and stuff

  render() {
    return (
      <div>
        <Header />
        Content Here
        <Footer/>
      </div>
    );
  }
}
export default App;
