import uniqid from "uniqid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { Space, Spin } from "antd";

import styles from "./list-items.module.scss";
import itemStyle from "./item.module.scss";

export default function ListItems() {
  const ticketData = useSelector((state) => {
    return state.tickets;
  });

  const filterArray = useSelector((state) => state.filter.filter);

  const [ticketsCount, setTicketsCount] = useState(5);

  const list = ticketData.tickets || 0;
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
    list.length > 0
      ? filtered()
          .slice(0, ticketsCount)
          .map((el) => {
            return (
              <li key={uniqid()} className={itemStyle.card}>
                <ul>
                  <li className={itemStyle.card__header}>
                    <p className={itemStyle.card__price}>{el.price} Р</p>
                    <img
                      className={itemStyle.card__logo}
                      alt="logo"
                      src={`https://pics.avs.io/99/36/${el.carrier}.png`}
                    />
                  </li>
                  <li className={itemStyle.card__tickets}>
                    {el.segments.map((elem) => {
                      const { stops, date, duration } = elem;
                      const datesec = Date.parse(date);
                      const flyEndTime = format(
                        datesec + duration * 60000,
                        "HH':'mm",
                      );
                      return (
                        <div key={uniqid()} className={itemStyle.card__variant}>
                          <div className={itemStyle.variant__divsize}>
                            <p className={itemStyle.variant__title}>
                              {elem.origin} - {elem.destination}
                            </p>
                            <p className={itemStyle.variant__info}>
                              {format(parseISO(date), "HH':'mm")} - {flyEndTime}
                            </p>
                          </div>
                          <div className={itemStyle.variant__divsize}>
                            <p className={itemStyle.variant__title}>В пути</p>
                            <p className={itemStyle.variant__info}>
                              {Math.floor((duration / 60) % 60)}ч{" "}
                              {Math.floor(duration % 60)}м
                            </p>
                          </div>
                          <div className={itemStyle.variant__divsize}>
                            <p className={itemStyle.variant__title}>
                              {stops.length ? stops.length : "нет"} пересадки
                            </p>
                            <p className={itemStyle.variant__info}>
                              {stops.join(", ")}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </li>
            );
          })
      : null;

  const data = items ? (
    items
  ) : (
    <Space size="large">
      <Spin size="large" />
    </Space>
  );

  return (
    <>
      <div className={styles.list}>
        <ul>{data}</ul>
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
