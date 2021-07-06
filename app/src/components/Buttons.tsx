import styles from '../styles/Buttons.module.scss';
import { useState, useEffect } from 'react';
interface IButtonProps {
	onSetDisplay: Function
}

export function Buttons(props: IButtonProps) {
	const [numStr, setNumStr] = useState('')
	const [dupOp, setDupOp] = useState(false)
	const [display, setDisplay] = useState(0)
	const [result, setResult] = useState(0)

	useEffect(() => {
		props.onSetDisplay(display)
	}, [display, props])

	useEffect(() => {
		setDisplay(result)
	}, [result])

	const concatNum = (acc: string, input: string,) => {
		setDisplay(parseFloat(input))
		setNumStr(`${acc}${input}`);
		setDupOp(false)
	}
	const calCulate = (acc: string, operator: string) => {
		if (!dupOp) {
			setResult(eval(acc));
			setNumStr(`${numStr}${operator}`);
			setDupOp(true)
		} else {
			setNumStr(`${numStr.slice(0, -1)}${operator}`);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(numStr, '7')}>7</button>
				<button onClick={() => concatNum(numStr, '8')}>8</button>
				<button onClick={() => concatNum(numStr, '9')}>9</button>
				<button className={styles.dark}>DEL</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(numStr, '4')}>4</button>
				<button onClick={() => concatNum(numStr, '5')}>5</button>
				<button onClick={() => concatNum(numStr, '6')}>6</button>
				<button onClick={() => calCulate(numStr, '+')} >+</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(numStr, '1')}>1</button>
				<button onClick={() => concatNum(numStr, '2')}>2</button>
				<button onClick={() => concatNum(numStr, '3')}>3</button>
				<button onClick={() => calCulate(numStr, '-')}>-</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(numStr, '.')}>.</button>
				<button onClick={() => concatNum(numStr, '0')}>0</button>
				<button onClick={() => calCulate(numStr, '/')}>/</button>
				<button onClick={() => calCulate(numStr, '*')}>x</button>
			</div>
			<div className={styles['button-row']}>
				<button className={styles.dark} onClick={() => { setNumStr(''); setResult(0) }}>RESET</button>
				<button className={styles.submit}>=</button>
			</div>
		</div >

	);
}
