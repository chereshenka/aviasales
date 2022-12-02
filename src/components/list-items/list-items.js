import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from "antd";

import styles from "./list-items.module.scss";
import Item from "../item";

export default function ListItems() {
  const list = useSelector((state) => {
    return state.tickets.tickets;
  });

  const filterArray = useSelector((state) => state.filter.filter);
  const alert = useSelector((state) => state.alert.alert);
  const spinner = useSelector((state) => state.spinner.spinner);

  const [ticketsCount, setTicketsCount] = useState(5);
  const filtered = () => {
    const arr = [];
    if (filterArray.length === 0 || list === 0 || filterArray.includes("all")) {
      return list;
    }
    for (const element of list) {
      for (const key of element.segments) {
        for (const digit of filterArray) {
          key["stops"].length === Number(digit) ? arr.push(element) : false;
        }
      }
    }
    return arr;
  };
  const items =
    list.length > 0 || list !== 0
      ? filtered()
          .slice(0, ticketsCount)
          .map((el, index) => <Item key={index} {...el} />)
      : null;

  const message =
    alert && !spinner && items === null ? (
      <div className={styles.alertBox}>
        <Alert
          message="Ошибка!"
          description="Рейсов, подходящих под заданные фильтры, не найдено"
          type="info"
        />
      </div>
    ) : null;

  return (
    <>
      <div className={styles.list}>
        <ul>
          {items}
          {message}
        </ul>
      </div>
      <button
        className={styles.list__more}
        onClick={() => setTicketsCount((val) => val + 5)}
      >
        Показать еще 5 билетов!
      </button>
    </>
  );
}
