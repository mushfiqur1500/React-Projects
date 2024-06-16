import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonscontainer}>
        <div className={styles.button}></div>
        <button className={styles.button}>C</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
}

export default App;
