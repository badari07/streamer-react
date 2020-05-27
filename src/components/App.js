import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/new" exact component={StreamCreate} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
