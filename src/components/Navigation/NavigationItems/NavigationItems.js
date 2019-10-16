import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem to="/">BurgerBuilder</NavigationItem>
		{ props.isAuthenticated
			? <NavigationItem to="/orders">Orders</NavigationItem> 
			: null
		}
		{ !props.isAuthenticated 
			? <NavigationItem to="/auth">Authenticate</NavigationItem> 
			: <NavigationItem to="/logout">Logout</NavigationItem>
		}
	</ul>
);

export default navigationItems;