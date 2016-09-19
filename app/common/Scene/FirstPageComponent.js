
import React, { Component } from 'react';
import {
	StyleSheet,
	PixelRatio,
	View,
	Image,
	Text,
	Navigator,
	TouchableOpacity
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	_pressButton() {
		const { navigator } = this.props;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if(navigator) {
			navigator.push({
				name: 'SecondPageComponent',
				component: SecondPageComponent,
			})
		}
	}

	render() {
		return (
			<View style={styles.TopNavigation}>
				<TouchableOpacity style={styles.TopNavigationTouch} onPress={this._pressButton.bind(this)}>
					<Text style={styles.TopNavigationText}>点我跳转</Text>
				</TouchableOpacity>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	TopNavigation: {
		height: 120,
		backgroundColor:  'rgba(0,0,0,.8)',
	},
	TopNavigationTouch: {

	},
	TopNavigationText: {
		fontSize: 20,
		textAlign: 'center',
	}
});