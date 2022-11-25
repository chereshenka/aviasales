import styles from "./tabs.module.scss";

const Tab = () => {
  return (
    <div className={styles.tab__list}>
      <button className={styles.tab__cheap + " " + styles.active}>
        Самый дешевый
      </button>
      <button className={styles.tab__fast}>Самый быстрый</button>
      <button className={styles.tab__optimal}>Оптимальный</button>
    </div>
  );
};

export default Tab;
