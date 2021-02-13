import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Pagina404 from "../pages/404";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/badges";
import BadgesNew from "../pages/BadgesNew";
import Home from "../pages/home";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:badgeid/edit" component={BadgeEdit} />
          <Route path="/404" component={Pagina404} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
