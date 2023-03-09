import styled from 'styled-components';

const StyledColorsContainer = styled.div``;
const ColorWindow = styled.div`
	width: 300px;
	height: 300px;
	border: 1px solid black;
	background-color: ${({ color }) => color};
`;

const ColorsButtonsContainer = styled.div`
	display: flex;
`;
export { StyledColorsContainer, ColorWindow, ColorsButtonsContainer };
