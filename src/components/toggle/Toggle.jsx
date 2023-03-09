import { useState } from 'react';
import { StyledToggle } from './styles';

const Toggle = () => {
	const [theme, setTheme] = useState(false);
	return <StyledToggle onClick={() => setTheme(!theme)} translate={theme} />;
};

export default Toggle;
