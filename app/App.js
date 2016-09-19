import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	PixelRatio,
	View,
	Text
} from 'react-native';

import AppNavigator from './AppNavigator';

export default class App extends Component {

	render() {
		return (
			<AppNavigator />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});