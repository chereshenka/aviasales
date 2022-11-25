import styles from "./filter-list.module.scss";

const FilterList = () => {
  return (
    <div className={styles.filter}>
      <p className={styles.filter__title}>Количество пересадок</p>
      <label>
        <input type="checkbox" className={styles.filter__checkbox} /> <p>Все</p>
      </label>
      <label>
        <input type="checkbox" className={styles.filter__checkbox} />
        <p>Без пересадок</p>
      </label>
      <label>
        <input type="checkbox" className={styles.filter__checkbox} />
        <p>1 пересадка</p>
      </label>
      <label>
        <input type="checkbox" className={styles.filter__checkbox} />
        <p>2 пересадки</p>
      </label>
      <label>
        <input type="checkbox" className={styles.filter__checkbox} />
        <p>3 пересадки</p>
      </label>
    </div>
  );
};
export default FilterList;
