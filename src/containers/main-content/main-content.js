import React from "react";
import { Switch, Route } from "react-router-dom";

import SplashPage from "../../components/splash-page/splash-page";
import ReadingList from "../../components/reading-list/reading-list";

import { getBooks } from "../../api/books";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: getBooks()
      // movies: getMovies()
    };
  }

//   <Route
//   path="/movies"
//   render={props => <Movies movies={this.state.movies} />}
// />

  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route
            path="/reading-list"
            render={props => <ReadingList books={this.state.books} />}
          />
        </Switch>
      </main>
    );
  }
}
export default MainContent;
