import { Component } from "react";

import logo from "../../img/logo.png";
import FilterList from "../filter-list";
import Tab from "../tabs";
import ListItems from "../list-items";
import Authorization from "../../service/authorization";

export default class App extends Component {
  auth = new Authorization();
  componentDidMount() {
    this.auth.getKey();
  }
  render() {
    return (
      <div className="site">
        <div>
          <img className="logo" src={logo} />
        </div>
        <div className="main">
          <FilterList />
          <div className="content">
            <Tab />
            <ListItems />
          </div>
        </div>
      </div>
    );
  }
}
