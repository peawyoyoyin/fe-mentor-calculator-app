import { ThemeSelector } from "./ThemeSelector";
import styles from '../styles/Navbar.module.scss'

export function Navbar() {
  return (
    <div className={styles['navbar-container']}>
      <div className={styles.logo}>
        calc
      </div>
      <ThemeSelector />
    </div>
  )
}
