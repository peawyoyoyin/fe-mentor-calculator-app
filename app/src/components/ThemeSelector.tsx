import styles from '../styles/ThemeSelector.module.scss';
import { useTheme } from "./themes/ThemeProvider";

export function ThemeSelector() {
  const { theme, cycleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles['theme-selector-label']}>
        Theme
      </div>
      <div className={styles['switch-container']}>
        <div className={styles.labels}>
          <label>1</label>
          <label>2</label>
          <label>3</label>
        </div>
        <div className={styles.switch} onClick={cycleTheme}>
          <div className={`${styles.dial} ${styles[`dial-${theme}`]}`}></div>
        </div>
      </div>
    </div>
  )   
}
