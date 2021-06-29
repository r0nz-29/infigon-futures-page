import Nav from './Nav';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';
import logo from '../images/logo.png';

const Header = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useEffect(()=>{
		window.addEventListener('resize', ()=>{setWidth(window.innerWidth)})
	}, []);
	const [showDrawer, setShowDrawer] = React.useState(false);
	return (
		<>
		<header>
			<img src={logo} alt="infigon" />
			{
				window.innerWidth > 800 ? <Nav/> : (
					<IconButton onClick={()=>setShowDrawer(!showDrawer)} >
        		<MenuIcon />
      		</IconButton>
				) 
			}
		</header>
		<Drawer
			anchor='bottom'
			open={showDrawer}
			onClose={()=>setShowDrawer(!showDrawer)}
		>
			<List>
				{
					['Home', 'How we help', 'Programs', 'FAQs', 'Get in Touch'].map((item, ndx) => (
						<ListItem button key={ndx} > 
							<ListItemText>
								{item}
							</ListItemText>
						</ListItem> 
					))
				}
			</List>
		</Drawer>
		</>
	);
}

export default Header;