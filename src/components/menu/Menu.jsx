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
	const [display, setDisplay] = useState('none');
	return (
		<>
			<StyledMenu>
				<MenuIcon
					src='/public/bars-solid.svg'
					onClick={() => displayChange(display, setDisplay)}
				/>
				<Nav>
					<MenuList display={display}>
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

const displayChange = (display, setDisplay) => {
	display === 'none' ? setDisplay('block') : setDisplay('none');
};

export default Menu;
