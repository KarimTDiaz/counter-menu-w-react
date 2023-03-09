import ColorsContainer from '../colors-container/ColorsContainer';
import CounterContainer from '../counter-container/CounterContainer';
import Menu from '../menu/Menu';

import { StyledMainContainer } from './styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<Menu></Menu>
			<ColorsContainer></ColorsContainer>
			<CounterContainer></CounterContainer>
		</StyledMainContainer>
	);
};

export default MainContainer;
