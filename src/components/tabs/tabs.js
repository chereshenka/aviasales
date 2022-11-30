import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  sortTicketsByPrice,
  sortTicketsByTime,
} from "../../redux/ticket-state";

import styles from "./tabs.module.scss";

const Tab = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tickets.tickets);
  const tab = useSelector((state) => state.tab.tab);

  const onChangeTab = (e) => {
    const item = e.target;
    const id = item.id;
    dispatch({ type: id.toUpperCase() });
  };

  return (
    <>
      <div className={styles.tab__list} onClick={onChangeTab}>
        <button
          id="cheap"
          onClick={() => dispatch(sortTicketsByPrice(state))}
          className={
            styles.tab__cheap + " " + (tab === "cheap" ? styles.active : null)
          }
        >
          Самый дешевый
        </button>
        <button
          id="fast"
          onClick={() => dispatch(sortTicketsByTime(state))}
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
