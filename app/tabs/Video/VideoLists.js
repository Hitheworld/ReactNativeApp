import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	ProgressBarAndroid,
	Navigator,
	PixelRatio,
	Dimensions,
	ScrollView,
	ListView,
	View,
	Image,
	Text
} from 'react-native';
import ViewPager from 'react-native-viewpager';

import VideoView from './VideoView';
import VideoDetail from './VideoDetail';

const REQUEST_URL = 'http://www.toutiao.com/api/article/feed/?category=video&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&as=A16597BD78BC20F&cp=57D85CC2709FAE1';

export default class VideoLists extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds,
			loaded: false,
		};
	}

	componentDidMount() {
		this._fetchListData();
	}

	_fetchListData(){
		return fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseJson.data),
					loaded: true,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	_pressButton() {
		const { navigator } = this.props;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if(navigator) {
			navigator.push({
				name: 'VideoDetail',
				component: VideoDetail,
			})
		}
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<View style={styles.flex}>
				<ListView dataSource={this.state.dataSource}
			         renderRow={(rowData) =>
			              <View style={styles.listContainer}>
							  <VideoView datadb={rowData}  onPress={this._pressButton.bind(this)} />
						  </View>
			         }
			         style={styles.container}
			         enableEmptySections={true}>
				</ListView >
			</View>
		)
	}

	renderLoadingView() {
		return (
			<View style={styles.containerLoading} >
				<ActivityIndicator size="large" />
			</View>

		);
	}

}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		backgroundColor: 'rgba(243,243,243,1)',
	},
	listContainer: {
		flex: 1,
		marginTop: 10,
		borderTopColor: 'rgba(255,255,255,1)',
		borderTopWidth: 2/PixelRatio.get(),
	},
	containerLoading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});