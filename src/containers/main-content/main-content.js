import React from "react";
import { Switch, Route } from "react-router-dom";

import Blog from "../../components/blog/blog";
import ReadingList from "../../components/reading-list/reading-list";
import Work from "../../components/work/work";

class MainContent extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/reading-list" component={ReadingList} />
          <Route path="/work" component={Work} />
        </Switch>
      </main>
    );
  }
}
export default MainContent;
