import { useState } from "react"

import styles from '../styles/ThemeSelector.module.scss';

export function ThemeSelector() {
  const [theme, setTheme] = useState(0);

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
        <div className={styles.switch} onClick={() => setTheme(theme => (theme + 1) % 3)}>
          <div className={`${styles.dial} ${styles[`dial-${theme}`]}`}></div>
        </div>
      </div>
    </div>
  )   
}
