import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const toolbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<BurgerMenu clicked={props.openSideDrawer} />
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems isAuthenticated={props.isAuth} />
			</nav>
		</header>
	);
}

export default toolbar;