import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	ProgressViewIOS,
	ActivityIndicator,
	View,
	Image,
	Text
} from 'react-native';

export default class LoadingView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		if(Platform.OS === 'ios'){
			return (
				<View style={styles.containerLoading} >
					<ProgressViewIOS  progressTintColor="yellow" progress={this.getProgress(0.8)} />
				</View>
			);
		}else if(Platform.OS === 'android'){
			return (
				<View style={styles.containerLoading} >
					<ActivityIndicator size="large" />
					<Text>努力加载中...</Text>
				</View>
			);
		}
	}

	//ios
	getProgress(offset) {
		var progress = this.state.progress + offset;
		return Math.sin(progress % Math.PI) % 1;
	}

}

const styles = StyleSheet.create({
	containerLoading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});