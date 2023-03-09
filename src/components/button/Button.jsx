import { StyledButton } from './styles';

const Button = ({ text, handleClick }) => {
	return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
