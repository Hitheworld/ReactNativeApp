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
import ParallaxScrollView from 'react-native-parallax-scroll-view';


export default class AccountsHome extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
		this.state = {
			loaded: true,
		};
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		let onPress = this.props.onPressDetails;

		return (
			<ParallaxScrollView
				backgroundColor="blue"
				contentBackgroundColor="pink"
				parallaxHeaderHeight={300}
				renderForeground={() => (
			       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			          <Text>Hello World!</Text>
			        </View>
			      )}>
				<View style={{ height: 500 }}>
					<Text>Scroll me</Text>
				</View>
			</ParallaxScrollView>
		)
	}

	renderLoadingView() {
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
	flex: {
		flex: 1,
		backgroundColor: 'rgba(243,243,243,1)',
	},
	container: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		marginTop: 10,
		borderTopColor: 'rgba(255,255,255,1)',
		borderTopWidth: 2/PixelRatio.get(),
	},
	banner: {
		height:130
	},
	bannerImage: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').width)*0.3582,
		resizeMode: 'stretch'
	},
	containerLoading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});