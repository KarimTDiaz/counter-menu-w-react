import {
	ColorWindow,
	StyledColorsContainer,
	ColorsButtonsContainer
} from './styles';
import Button from '../button/Button';
import { useState } from 'react';

const ColorsContainer = () => {
	const [color, setColor] = useState();
	return (
		<StyledColorsContainer>
			<ColorWindow color={color} />
			<ColorsButtonsContainer>
				<Button text='Blue' handleClick={() => setColor('blue')} />
				<Button text='Yellow' handleClick={() => setColor('yellow')} />
				<Button text='Orange' handleClick={() => setColor('orange')} />
			</ColorsButtonsContainer>
		</StyledColorsContainer>
	);
};

export default ColorsContainer;
