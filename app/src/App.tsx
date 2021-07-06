import { Buttons } from './components/Buttons';
import { Navbar } from './components/Navbar';
import { ValueDisplay } from './components/ValueDisplay';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ValueDisplay />
      <Buttons />
    </div>
  );
}

export default App;
