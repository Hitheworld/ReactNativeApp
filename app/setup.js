import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	PixelRatio,
	View,
	Text
} from 'react-native';
//import {Provider} from 'react-redux';

import App from './App';

export default class setup extends Component {

	render() {
		return (
			<View>
				<App />
			</View>
		);
	}

}
