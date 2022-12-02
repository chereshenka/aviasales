import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

import logo from "../../img/logo.png";
import FilterList from "../filter-list";
import Tab from "../tabs";
import ListItems from "../list-items";
import { fetchTickets } from "../../async/aviasales-data";
import Authorization from "../../service/authorization";
import { useSelector } from "react-redux";

const auth = new Authorization();

export default function App() {
  const spinner = useSelector((state) => {
    return state.spinner.spinner;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getKeyFromServer();
  }, []);

  async function getKeyFromServer() {
    const key = await auth.getKey();
    const serverLink = auth._serverLink;
    dispatch(fetchTickets(key, serverLink));
  }
  return (
    <div className="site">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className="main">
        <FilterList />
        <div className="content">
          <Tab />
          {spinner ? (
            <div className="spinner-box">
              <Spin size="large" />
            </div>
          ) : null}
          <ListItems />
        </div>
      </div>
    </div>
  );
}
