import styles from '../styles/ValueDisplay.module.scss';

interface IValueDisplayProps {
	displayResult: string
}

export function ValueDisplay(props: IValueDisplayProps) {
	return (
		<div className={styles.container}>
			<span className={styles.value}>
				{new Intl.NumberFormat('en-US').format(parseFloat(props.displayResult))}
			</span>
		</div>
	)
}
