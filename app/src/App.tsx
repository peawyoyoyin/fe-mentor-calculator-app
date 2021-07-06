import { Buttons } from './components/Buttons';
import { Navbar } from './components/Navbar';
import { useTheme } from './components/themes/ThemeProvider';
import { ValueDisplay } from './components/ValueDisplay';
import styles from './styles/App.module.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${styles[`theme-${theme}`]}`}>
      <div className={styles.calculator}>
        <Navbar />
        <ValueDisplay />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
