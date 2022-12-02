import React from "react";
import { dateFormating } from "../../utils/date-format-function";
import itemStyle from "./item.module.scss";
import PropTypes from "prop-types";

export default function Item(props) {
  const { price, carrier, segments } = props;
  return (
    <li className={itemStyle.card}>
      <ul>
        <li className={itemStyle.card__header}>
          <p className={itemStyle.card__price}>{price} Р</p>
          <img
            className={itemStyle.card__logo}
            alt="logo"
            src={`https://pics.avs.io/99/36/${carrier}.png`}
          />
        </li>
        <li className={itemStyle.card__tickets}>
          {segments.map((segment) => {
            const { stops, date, duration } = segment;
            const timeObj = dateFormating(date, duration);
            return (
              <div key={segment.date} className={itemStyle.card__variant}>
                <div className={itemStyle.variant__divsize}>
                  <p className={itemStyle.variant__title}>
                    {segment.origin} - {segment.destination}
                  </p>
                  <p className={itemStyle.variant__info}>
                    {timeObj.flyStartTime} - {timeObj.flyEndTime}
                  </p>
                </div>
                <div className={itemStyle.variant__divsize}>
                  <p className={itemStyle.variant__title}>В пути</p>
                  <p className={itemStyle.variant__info}>
                    {timeObj.travelTimeHour}ч{timeObj.travelTimeMinutes}м
                  </p>
                </div>
                <div className={itemStyle.variant__divsize}>
                  <p className={itemStyle.variant__title}>
                    {stops.length ? stops.length : "нет"} пересадки
                  </p>
                  <p className={itemStyle.variant__info}>{stops.join(", ")}</p>
                </div>
              </div>
            );
          })}
        </li>
      </ul>
    </li>
  );
}

Item.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.array,
};
