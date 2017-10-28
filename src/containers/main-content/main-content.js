import React from "react";
import { Switch, Route } from "react-router-dom";

import Blog from "../../components/blog/blog";
import ReadingList from "../../components/reading-list/reading-list";
import Work from "../../components/work/work";

import { getBooks } from "../../api/books";
import { getWork } from "../../api/work";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: getBooks(),
      work: getWork()
    };
  }

  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route
            path="/reading-list"
            render={props => <ReadingList books={this.state.books} />}
          />
          <Route
            path="/work"
            render={props => <Work work={this.state.work} />}
          />
        </Switch>
      </main>
    );
  }
}
export default MainContent;
