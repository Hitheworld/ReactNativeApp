/**
 *  我的场景
 */
import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

export default class MyScene extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onForward: PropTypes.func.isRequired,
		onBack: PropTypes.func.isRequired,
	}

	render() {
		return (
			<View>
				<Text>
					当前的场景 : { this.props.title }</Text>
				<TouchableHighlight onPress={this.props.onForward}>
					<Text>点击我加载下一个场景</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack}>
					<Text>点击我回去</Text>
				</TouchableHighlight>
			</View>
		)
	}

}