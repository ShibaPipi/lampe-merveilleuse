import React, { Component } from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store";
import { GlobalStyle } from './style';
import { GlobalIconfont } from "./statics/iconfont/iconfont";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconfont/>
        <HashRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/detail/:id" exact component={Detail}/>
            <Route path="/write" exact component={Write}/>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
