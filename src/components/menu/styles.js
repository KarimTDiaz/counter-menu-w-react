import styled from 'styled-components';

const StyledMenu = styled.div``;
const MenuIcon = styled.img`
	width: 50px;
`;
const Nav = styled.nav``;

const MenuList = styled.ul`
	display: ${({ display }) => display};
`;

const MenuItem = styled.li``;

const MenuLink = styled.a``;

export { Nav, MenuList, MenuItem, MenuLink, MenuIcon, StyledMenu };
