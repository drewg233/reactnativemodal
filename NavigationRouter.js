import React, { Component } from 'react';
import { Scene, Router, Drawer, Stack, Actions, Modal, Overlay } from 'react-native-router-flux';

// Scenes
import HomeScreen from './components/HomeScreen';
import TestModalScreen from './components/TestModalScreen';

class NavigationRouter extends Component {

	render() {
		return (
			<Router>
				<Scene key="modal" modal>
					<Scene key='root' hideNavBar initial>
						<Scene key='home' component={ HomeScreen } hideNavBar tabs />
					</Scene>
					<Scene key='testModal' title='Modal' component={ TestModalScreen } hideNavBar />
				</Scene>
			</Router>
		)
	}
}

export default NavigationRouter;