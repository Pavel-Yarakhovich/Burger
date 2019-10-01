import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerOpenedHandler = () => {
		this.setState({showSideDrawer: true});
	}
	
	render () {
		return (
			<Auxiliary>
				<Toolbar openSideDrawer={this.sideDrawerOpenedHandler} />
				<SideDrawer 
					closed={this.sideDrawerClosedHandler}
					open={this.state.showSideDrawer} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Auxiliary>
		)
	}
};

export default Layout;