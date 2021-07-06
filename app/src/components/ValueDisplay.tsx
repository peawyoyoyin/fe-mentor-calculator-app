import styles from '../styles/ValueDisplay.module.scss';
import { useEffect, useState } from 'react';

interface IValueDisplayProps {
	displayResult: string
}

export function ValueDisplay(props: IValueDisplayProps) {
	const [value, setValue] = useState(props.displayResult)
	useEffect(() => { setValue(props.displayResult) }, [props.displayResult])
	return (
		<div className={styles.container}>
			<span className={styles.value}>
				{new Intl.NumberFormat('en-US').format(parseFloat(value))}
			</span>
		</div>
	)
}
