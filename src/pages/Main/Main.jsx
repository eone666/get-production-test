import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./EntityList/EntityList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotFoundPage from "../../pages/404/404";
import Logout from "../../pages/Logout/Logout";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="content">
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/logout" exact component={Logout} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
