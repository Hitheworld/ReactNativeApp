import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Navigator,
	PixelRatio,
	ScrollView,
	ListView,
	WebView,
	View,
	Image,
	Text
} from 'react-native';

import Header from '../../../common/Header';

export default class NewsDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let name = this.props.name;
		return (
			<View style={styles.flex}>
				<Header
					style={styles.header}
					leftItem={{
			            icon: require('./images/backOff.png'),
			            title: 'Menu',
			            layout: 'icon',
			            onPress: () => this.props.navigator.pop(),
		            }}
					rightItem={{
			            icon: require('./images/more.png'),
			            title: 'always',
			            onPress: () => this.props.navigator.pop(),
			        }}
				>
					<View style={styles.headerTitle}>
						<Text style={styles.headerTitleText}>{name}</Text>
					</View>
				</Header>
				<WebView
					ref='webview'
					automaticallyAdjustContentInsets={false}
					style={styles.webView}
					source={{uri: 'http://app.my0832.com/?action=bbs.topic.show&topicId=522900'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					onNavigationStateChange={this.onNavigationStateChange}
					onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
					startInLoadingState={true}
					scalesPageToFit={this.state.scalesPageToFit}
				/>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
    header: {
        backgroundColor: '#393a3f',
	},
	headerTitle: {
		flex:1,
		justifyContent: 'center',
	},
	headerTitleText: {
		color: '#ffffff',
		fontSize: 20,
		textAlign: 'center',
		marginLeft: -110,
	}
});
