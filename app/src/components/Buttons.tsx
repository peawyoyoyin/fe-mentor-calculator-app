import styles from '../styles/Buttons.module.scss';

export function Buttons() {
  return (
    <div className={styles.container}>
      <div className={styles['button-row']}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className={styles.dark}>DEL</button>
      </div>
      <div className={styles['button-row']}>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div className={styles['button-row']}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div className={styles['button-row']}>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </div>
      <div className={styles['button-row']}>
        <button className={styles.dark}>RESET</button>
        <button className={styles.submit}>=</button>
      </div>
    </div>

  );
}
