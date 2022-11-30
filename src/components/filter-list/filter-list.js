import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import { addFilterInArray } from "../../redux/filter-state";

import styles from "./filter-list.module.scss";

const FilterList = () => {
  const filterList = [
    {
      id: "all",
      name: "Все",
      checked: false,
    },
    {
      id: "0",
      name: "Без пересадок",
      checked: false,
    },
    {
      id: "1",
      name: "1 пересадки",
      checked: false,
    },
    {
      id: "2",
      name: "2 пересадки",
      checked: false,
    },
    {
      id: "3",
      name: "3 пересадки",
      checked: false,
    },
  ];

  const [filterArray, setFilterArray] = useState(filterList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      filterArray[1]["checked"] &&
      filterArray[2]["checked"] &&
      filterArray[3]["checked"] &&
      filterArray[4]["checked"] &&
      !filterArray[0]["checked"]
    ) {
      setFilterArray((el) =>
        el.map((element) =>
          element.id === "all" ? { ...element, checked: true } : element,
        ),
      );
    }
    if (
      (!filterArray[1]["checked"] ||
        !filterArray[2]["checked"] ||
        !filterArray[3]["checked"] ||
        !filterArray[4]["checked"]) &&
      filterArray[0]["checked"]
    ) {
      setFilterArray((el) =>
        el.map((element) =>
          element.id === "all" ? { ...element, checked: false } : element,
        ),
      );
    }
  }, [filterArray]);

  const check = (e) => {
    const item = e.target.id;

    if (item === "all") {
      e.target.checked
        ? setFilterArray((data) => {
            return data.map((el) =>
              el.checked ? el : { ...el, checked: true },
            );
          })
        : setFilterArray((data) => {
            return data.map((el) =>
              el.checked ? { ...el, checked: false } : el,
            );
          });
    } else {
      const id = filterArray.findIndex((el) => el.id === item);
      const oldItem = filterArray[id];
      const newItem = { ...oldItem, checked: !oldItem.checked };
      setFilterArray((arr) => [
        ...arr.slice(0, id),
        newItem,
        ...arr.slice(id + 1),
      ]);
    }
    dispatch(addFilterInArray(item));
  };

  const items = filterArray.map((element) => (
    <label key={uniqid()}>
      <input
        id={element.id}
        type="checkbox"
        className={styles.filter__checkbox}
        defaultChecked={element.checked}
      />
      <p>{element.name}</p>
    </label>
  ));
  return (
    <div className={styles.filter} onClick={check}>
      <p className={styles.filter__title}>Количество пересадок</p>
      {items}
    </div>
  );
};
export default FilterList;
