import React, { useState } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../Auxiliary/auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	
	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false);
	}

	const sideDrawerOpenedHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	}
	
		return (
			<Auxiliary>
				<Toolbar 
				isAuth={props.isAuthenticated}
				openSideDrawer={sideDrawerOpenedHandler} />
				<SideDrawer 
					isAuth={props.isAuthenticated}
					closed={sideDrawerClosedHandler}
					open={sideDrawerIsVisible} />
				<main className={classes.Content}>
					{props.children}
				</main>
			</Auxiliary>
		)
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(layout);