import { CounterButtonsContainer, StyledCounterContainer } from './styles';
import { useState } from 'react';
import Button from '../button/Button';

const CounterContainer = () => {
	const [counter, setCounter] = useState(0);

	return (
		<StyledCounterContainer>
			<h2>{counter}</h2>
			<CounterButtonsContainer>
				<Button
					text='Decrease'
					handleClick={() => decrease(counter, setCounter)}
				></Button>
				<Button text='Reset' handleClick={() => reset(setCounter)}></Button>
				<Button
					text='Increase'
					handleClick={() => increase(counter, setCounter)}
				></Button>
			</CounterButtonsContainer>
		</StyledCounterContainer>
	);
};

const decrease = (counter, setCounter) => {
	setCounter(counter - 1);
};

const increase = (counter, setCounter) => {
	setCounter(counter + 1);
};
const reset = setCounter => {
	setCounter(0);
};

/* 
const counter = 0

const setCounter = newCounter =>{
	counter = newCounter
}
*/

export default CounterContainer;
