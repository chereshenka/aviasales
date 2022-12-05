import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { sortTicketsByPrice, sortTicketsByTime } from "../../redux/actions";

import styles from "./tabs.module.scss";

const Tab = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tickets.tickets);
  const tab = useSelector((state) => state.tab.tab);

  const onChangeTab = (e) => {
    console.log("click");
    const item = e.target.id;
    dispatch({ type: item.toUpperCase() });
    item === "cheap"
      ? dispatch(sortTicketsByPrice(state))
      : dispatch(sortTicketsByTime(state));
  };

  return (
    <>
      <div className={styles.tab__list} onClick={onChangeTab}>
        <button
          id="cheap"
          className={
            styles.tab__cheap + " " + (tab === "cheap" ? styles.active : null)
          }
        >
          Самый дешевый
        </button>
        <button
          id="fast"
          className={
            styles.tab__fast + " " + (tab === "fast" ? styles.active : null)
          }
        >
          Самый быстрый
        </button>
        <button
          id="optimal"
          className={
            styles.tab__optimal +
            " " +
            (tab === "optimal" ? styles.active : null)
          }
          disabled
        >
          Оптимальный
        </button>
      </div>
    </>
  );
};

export default Tab;
