import styles from '../styles/ValueDisplay.module.scss';

export function ValueDisplay() {
  const value = 399981;

  return (
    <div className={styles.container}>
      <span className={styles.value}>
        {new Intl.NumberFormat('en-US').format(value)}
      </span>
    </div>
  )
}
