import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Alert } from "antd";

import styles from "./list-items.module.scss";
import Item from "../item";
import { filtered } from "../../utils/filter-functions";

function ListItems() {
  const list = useSelector((state) => {
    return state.tickets.tickets;
  });

  const filterArray = useSelector((state) => state.filter.filter);
  const alert = useSelector((state) => state.alert.alert);
  const spinner = useSelector((state) => state.spinner.spinner);

  const [ticketsCount, setTicketsCount] = useState(5);
  const items = useMemo(
    () =>
      list.length > 0 || list !== 0
        ? filterArray.length > 0
          ? filtered(list, filterArray)
          : list
        : null,
    [list, filterArray],
  );

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
          {items.slice(0, ticketsCount).map((el, index) => (
            <Item key={index} {...el} />
          ))}
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
export default ListItems;
