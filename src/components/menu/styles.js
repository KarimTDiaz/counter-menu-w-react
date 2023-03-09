import styled from 'styled-components';

const StyledMenu = styled.div``;
const MenuIcon = styled.img`
	width: 50px;
	display: block;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
const Nav = styled.nav``;

const MenuList = styled.ul`
	display: block;
	transition: transform 0.3s;
	transform: translateX(${({ open }) => (open ? '-100%' : '0')});
`;

const MenuItem = styled.li``;

const MenuLink = styled.a``;

export { Nav, MenuList, MenuItem, MenuLink, MenuIcon, StyledMenu };
