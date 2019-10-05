import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
		<NavLink 
			className={classes.NavigationItem} 
			to={props.to}>{props.children}</NavLink>
	);

export default navigationItem;