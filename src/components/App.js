import React from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "../styles.css";
//import Card from "../displayCard";
import { getNews } from "../action/getNews";
import Home from "./Home/Home";
import ItemNews from "./ItemNews/ItemNews";

const { Header, Footer, Content } = Layout;

function App(props) {
  //if (!props.load) id.click();
  return (
    <div className="App">
      <Header className="header">
        <h1 className="header-logo">Top100News</h1>
        <button
          id="btn"
          className="header-btn"
          onClick={() => props.toUpdate(props.oldData)}
        >
          click
        </button>
      </Header>
      <Content className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item/:id" component={ItemNews} />
        </Switch>
      </Content>
      <Footer className="footer">
        <p>Ant Design ©2018 Created by Ant UED</p>
      </Footer>
    </div>
  );
}

export default connect(
  (state) => ({
    stateCard: state.afterSort,
    oldData: state.beforeSort,
    load: state.isLoad
  }),
  (dispatch) => ({
    toUpdate: (oldData) => {
      dispatch(getNews(oldData));
    },
  })
)(App);
