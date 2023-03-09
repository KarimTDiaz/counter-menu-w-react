import styled from 'styled-components';

const StyledToggle = styled.div`
	background-color: black;
	width: 100px;
	height: 40px;
	border-radius: 25px;
	margin: 1rem;

	&::after {
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: grey;

		transform: translateX(${({ translate }) => (translate ? '150%' : '0')});
	}
`;

export { StyledToggle };
