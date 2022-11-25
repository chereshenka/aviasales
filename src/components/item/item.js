import styles from "./item.module.scss";
const Item = (props) => {
  const { price } = props;
  return (
    <li className={styles.card}>
      <ul>
        <li className={styles.card__header}>
          <p className={styles.card__price}>{price} Р</p>
          <img
            className={styles.card__logo}
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/2880px-S7_new_logo.svg.png"
          />
        </li>
        <li className={styles.card__tickets}>
          <div className={styles.card__variant}>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>MOW – HKT</p>
              <p className={styles.variant__info}>10:45 – 08:00</p>
            </div>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>В пути</p>
              <p className={styles.variant__info}>21ч 15м</p>
            </div>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>2 пересадки</p>
              <p className={styles.variant__info}>HKG, JNB</p>
            </div>
          </div>
          <div className={styles.card__variant}>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>MOW – HKT</p>
              <p className={styles.variant__info}>10:45 – 08:00</p>
            </div>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>В пути</p>
              <p className={styles.variant__info}>21ч 15м</p>
            </div>
            <div className={styles.variant__divsize}>
              <p className={styles.variant__title}>1 пересадки</p>
              <p className={styles.variant__info}>HKG</p>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};
export default Item;
