import { Buttons } from './components/Buttons';
import { Navbar } from './components/Navbar';
import { useTheme } from './components/themes/ThemeProvider';
import { ValueDisplay } from './components/ValueDisplay';
import styles from './styles/App.module.scss';
import { useState } from 'react';

function App() {
	const { theme } = useTheme();
	const [display, setDisplay] = useState('0')

	return (
		<div className={`${styles.container} ${styles[`theme-${theme}`]}`}>
			<div className={styles.calculator}>
				<Navbar />
				<ValueDisplay displayResult={display} />
				<Buttons onSetDisplay={setDisplay} />
			</div>
		</div>
	);
}

export default App;
