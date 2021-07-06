import styles from '../styles/Buttons.module.scss';
import { useState, useEffect } from 'react';
interface IButtonProps {
	onSetDisplay: Function
}

export function Buttons(props: IButtonProps) {
	const [accResultStr, setAccResultStr] = useState('0')
	const [secondNumStr, setSecondNumStr] = useState('0')
	const [resetSecondNumStr, setResetSecondNumStr] = useState(false)
	const [dupOp, setDupOp] = useState(false)
	const [display, setDisplay] = useState('0')
	const [result, setResult] = useState(0)
	const [lastOperator, setLastOperator] = useState('')

	useEffect(() => {
		props.onSetDisplay(display)
	}, [display, props])

	useEffect(() => {
		setDisplay(accResultStr)
	}, [accResultStr])
	useEffect(() => {
		setDisplay(secondNumStr)
	}, [secondNumStr])

	const concatNum = (input: string) => {
		resetSecondNumStr ? setSecondNumStr(`${input}`) : setSecondNumStr(`${secondNumStr}${input}`);

		// debugger
		setResetSecondNumStr(false)
		setDupOp(false)
	}
	const calculate = () => {
		if (lastOperator !== '') {

			// debugger
			const cleanAccNumStr = parseFloat(accResultStr)
			const cleanSecNumStr = parseFloat(secondNumStr)
			const result = eval(`${cleanAccNumStr}${lastOperator}${cleanSecNumStr}`)
			setAccResultStr(result)
			// debugger
		} else {
			setAccResultStr(secondNumStr)
			// debugger
		}

	}

	const addOperator = (operator: string) => {
		if (!dupOp) {
			calculate()
			setResetSecondNumStr(true)
			setLastOperator(operator)
			setDupOp(true)

			// debugger
		}

		// debugger

		// debugger
	}

	const onClickReset = () => {
		setAccResultStr('0');
		setSecondNumStr('0');
		setLastOperator('')
	}

	return (
		<div className={styles.container}>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum('7')}>7</button>
				<button onClick={() => concatNum('8')}>8</button>
				<button onClick={() => concatNum('9')}>9</button>
				<button className={styles.dark}>DEL</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum('4')}>4</button>
				<button onClick={() => concatNum('5')}>5</button>
				<button onClick={() => concatNum('6')}>6</button>
				<button onClick={() => addOperator('+')} >+</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum('1')}>1</button>
				<button onClick={() => concatNum('2')}>2</button>
				<button onClick={() => concatNum('3')}>3</button>
				<button onClick={() => addOperator('-')}>-</button>
			</div>
			<div className={styles['button-row']}>
				<button onClick={() => concatNum('.')}>.</button>
				<button onClick={() => concatNum('0')}>0</button>
				<button onClick={() => addOperator('/')}>/</button>
				<button onClick={() => addOperator('*')}>x</button>
			</div>
			<div className={styles['button-row']}>
				<button className={styles.dark} onClick={() => onClickReset()}>RESET</button>
				<button className={styles.submit}>=</button>
			</div>
		</div >

	);
}
