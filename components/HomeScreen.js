import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		}
	}

	render() {
		const { count } = this.state;

		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>
					Count: { count }
				</Text>

				<Button
					onPress={ () => { this.setState({ count: count + 1 }) } }
					title="Add 1"
					color="#FFF"
				/>


				<Text style={styles.paragraph}>
					Home Screen
				</Text>

				<Button
					onPress={ () => Actions.testModal() }
					title="Show Modal"
					color="#FFF"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
		flex: 1,
		backgroundColor: 'green',
	},
	paragraph: {
		margin: 24,
		fontSize: 24,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default HomeScreen;
