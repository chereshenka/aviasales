import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addFilterInArray, filterTicketsByCategory } from "../../redux/actions";
import uniqid from "uniqid";

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
  const filterArrayState = useSelector((state) => {
    return state.filter.filter;
  });
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
    const target = e.target;
    let input;
    let arr = [];
    //checking where make click
    if (target.localName === "label") {
      input = target.firstElementChild;
    } else {
      input = target;
    }

    if (input.id === "all") {
      if (input.checked) {
        setFilterArray((data) => {
          return data.map((el) => {
            filterArrayState.includes(el.id) ? false : arr.push(el.id);
            return el.checked ? el : { ...el, checked: true };
          });
        });
        dispatch(addFilterInArray(arr));
      } else {
        setFilterArray((data) => {
          return data.map((el) => {
            return el.checked ? { ...el, checked: false } : el;
          });
        });
        dispatch(addFilterInArray(arr));
      }
    } else {
      //change obj element state
      const id = filterArray.findIndex((el) => el.id === input.id);
      const oldItem = filterArray[id];
      setFilterArray((arr) => [
        ...arr.slice(0, id),
        { ...oldItem, checked: !oldItem.checked },
        ...arr.slice(id + 1),
      ]);
      //redux state
      if (filterArrayState.includes(input.id)) {
        arr = filterArrayState.filter(
          (filter) => filter !== input.id && filter !== "all",
        );
        dispatch(addFilterInArray(arr));
      } else {
        arr = filterArrayState;
        arr.push(input.id);
        dispatch(addFilterInArray(arr));
      }
    }
    dispatch(filterTicketsByCategory(filterArrayState));
  };

  const items = filterArray.map((element, index) => (
    <div key={index + element.id}>
      <label htmlFor={element.id}>
        <input
          id={element.id}
          type="checkbox"
          className={styles.filter__checkbox}
          checked={element.checked}
          onChange={(e) => check(e)}
        />
        {element.name}
      </label>
    </div>
  ));
  return (
    <div key={uniqid()} className={styles.filter}>
      <p className={styles.filter__title}>Количество пересадок</p>
      {items}
    </div>
  );
};
export default FilterList;
