import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem to="/">BurgerBuilder</NavigationItem>
		<NavigationItem to="/orders">Orders</NavigationItem>
		<NavigationItem to="/checkout">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;