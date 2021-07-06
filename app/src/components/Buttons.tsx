import styles from '../styles/Buttons.module.scss';
import { useState } from 'react';
interface IButtonProps {
	onSetResult: Function
}

export function Buttons(props: IButtonProps) {
	const [num, setNum] = useState('')
	const [dupOp, setDupOp] = useState(false)
	const concatNum = (acc: string, input: string,) => {
		setNum(`${acc}${input}`);
		setDupOp(false)
	}
	const calCulate = (acc: string, operator: string) => {
		if (!dupOp) {
			props.onSetResult(eval(acc));
			setNum(`${num}${operator}`);
			setDupOp(true)
		} else {
			setNum(`${num.slice(0, -1)}${operator}`);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(num, '7')}>7</button>
				<button onClick={() => concatNum(num, '8')}>8</button>
				<button onClick={() => concatNum(num, '9')}>9</button>
				<button className={styles.dark}>DEL</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(num, '4')}>4</button>
				<button onClick={() => concatNum(num, '5')}>5</button>
				<button onClick={() => concatNum(num, '6')}>6</button>
				<button onClick={() => calCulate(num, '+')} >+</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(num, '1')}>1</button>
				<button onClick={() => concatNum(num, '2')}>2</button>
				<button onClick={() => concatNum(num, '3')}>3</button>
				<button onClick={() => calCulate(num, '-')}>-</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum(num, '.')}>.</button>
				<button onClick={() => concatNum(num, '0')}>0</button>
				<button onClick={() => calCulate(num, '/')}>/</button>
				<button onClick={() => calCulate(num, '*')}>x</button>
			</div>
			<div className={styles['button-row']}>
				<button className={styles.dark} onClick={() => { setNum(''); props.onSetResult('0') }}>RESET</button>
				<button className={styles.submit}>=</button>
			</div>
		</div >

	);
}
