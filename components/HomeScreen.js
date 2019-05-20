import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
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
		marginTop: 100,
		fontSize: 24,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default HomeScreen;
