/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	PixelRatio,
	View,
	Text
} from 'react-native';

import TabBar from './app/tabs/TabBar.android';
import App from './app/App';

class ReactNativeApp extends Component {

	render() {
		return (
			<View style={styles.flex}>
				<App />
			</View>
		);

	}

}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	}
});

AppRegistry.registerComponent('reactNativeApp', () => ReactNativeApp);
