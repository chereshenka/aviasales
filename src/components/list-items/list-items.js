import { Component } from "react";
import uniqid from "uniqid";

import Item from "../item";

import styles from "./list-items.module.scss";

export default class ListItems extends Component {
  data = [
    { title: "first", price: 100 },
    { title: "second", price: 100 },
    { title: "third", price: 100 },
    { title: "fifth", price: 100 },
    { title: "sixth", price: 100 },
    { title: "first", price: 100 },
  ];

  render() {
    return (
      <>
        <div className={styles.list}>
          <ul>
            {this.data.map((el) => (
              <Item key={uniqid()} title={el.title} price={el.price} />
            ))}
          </ul>
        </div>
        <button className={styles.list__more}>Показать еще 5 билетов!</button>
      </>
    );
  }
}
