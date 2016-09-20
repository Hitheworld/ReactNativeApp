import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	TouchableOpacity,
	ActivityIndicator,
	ProgressBarAndroid,
	ProgressViewIOS,
	Navigator,
	PixelRatio,
	Dimensions,
	ScrollView,
	ListView,
	View,
	Image,
	Text
} from 'react-native';

import Talks from './Talks';

export default class InfoHome extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
		this.state = {
			loaded: true,
		};
	}

	render() {

		return (
			<Talks
				key="talks"
				/>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#393a3f'
	},

});