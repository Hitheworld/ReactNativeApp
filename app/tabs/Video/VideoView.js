import React, { Component } from 'react';
import {
	StyleSheet,
	Dimensions,
	PanResponder,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableHighlight,
	PixelRatio,
	ScrollView,
	ListView,
	View,
	Image,
	Text
} from 'react-native';

import VideoDetail from './VideoDetail';

export default class VideoView extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let data = this.props.datadb;
		let onPress = this.props.onPress;
		let img = data.image_url;
		let pic = this.props.datadb ? {uri: img ? img : 'https://facebook.github.io/react/img/logo_og.png'} : require('./images/default.png');
		return (
			<TouchableWithoutFeedback  underlayColor='rgba(34,26,38,0.1)' onPress={onPress}>
				<View style={styles.itemImageBox}>
					<Image style={styles.itemImage} source={pic} />
					<View style={styles.itemVideoContent}>
						<View style={styles.itemVideoTop}>
							<Text style={styles.itemVideoTopText}>{data.video_duration_str}</Text>
						</View>
						<View style={styles.itemVideoBottom}>
							<Text style={styles.itemVideoBottomTitle}>{data.title}</Text>
							<Text style={styles.itemVideoBottomTop}>热度:{data.comments_count ? data.comments_count : 0}</Text>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		)
	}

}

const styles = StyleSheet.create({
	item: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').width)*0.6,
		backgroundColor: 'rgba(255,255,255,1)',
	},
	itemImageBox: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').width)*0.6,
	},
	itemImage: {
		width: Dimensions.get('window').width,
		height: (Dimensions.get('window').width)*0.6,
	},
	itemVideoContent: {
		position: 'absolute',
		top: 20,
		bottom: 20,
		left: 20,
		right: 20,
	},
	itemVideoTop: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 60,
		height: 30,
		backgroundColor: 'rgba(255,72,102,0.5)',
		alignItems: 'center',
	},
	itemVideoTopText: {
		color: '#FFFFFF',
		textAlign: 'center',

	},
	itemVideoBottom: {
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	itemVideoBottomTitle: {
		color: '#FFFFFF'
	},
	itemVideoBottomTop: {
		color: '#FFFFFF'
	}
});
