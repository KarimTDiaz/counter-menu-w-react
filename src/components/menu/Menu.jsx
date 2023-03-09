import { useState } from 'react';
import {
	Nav,
	MenuList,
	MenuItem,
	MenuLink,
	MenuIcon,
	StyledMenu
} from './styles';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledMenu>
				<MenuIcon src='/public/bars-solid.svg' onClick={() => setOpen(!open)} />
				<Nav>
					<MenuList open={open}>
						<MenuItem>
							<MenuLink>HOME</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink>ABOUT</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink>PROJECTS</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink>CONTACT</MenuLink>
						</MenuItem>
					</MenuList>
				</Nav>
			</StyledMenu>
		</>
	);
};

export default Menu;
