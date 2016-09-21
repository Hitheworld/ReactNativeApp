import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	TouchableOpacity,
	TouchableHighlight,
	PixelRatio,
	Dimensions,
	View,
	Image,
	Text
} from 'react-native';

export default class ErrorView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const onPressErrer = this.props.onPressErrer;
		return (
			<TouchableOpacity activeOpacity={0.9} style={styles.error} onPress={onPressErrer}>
				<View style={styles.error}>
					<Text>服务器异常!</Text>
					<Text>轻触屏幕重新加载!</Text>
				</View>
			</TouchableOpacity>
		)
	}

}

const styles = StyleSheet.create({
	error: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	}
});