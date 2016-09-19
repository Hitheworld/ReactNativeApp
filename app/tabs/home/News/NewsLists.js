import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	TouchableOpacity,
	ActivityIndicator,
	ProgressBarAndroid,
	ProgressViewIOS,
	TouchableHighlight,
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

import News from './News';
//import NewsDetail from './NewsDetail';

const REQUEST_URL = 'http://www.toutiao.com/api/article/feed/?category=__all__&utm_source=toutiao&max_behot_time=0&max_behot_time_tmp=0&as=A115978D586AAFF&cp=57D83ADA5FAF1E1';

const BANNER_IMGS = [
    require('../images/banner/1.jpg'),
    require('../images/banner/2.jpg'),
    require('../images/banner/3.jpg'),
    require('../images/banner/4.jpg')
];

export default class NewsLists extends Component {

	// 初始化模拟数据
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
		this.state = {
            dataSource1: dataSource.cloneWithPages(BANNER_IMGS),
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
				this.setState({
					data: true,
				});
				console.error(error);
		});
	}

    _renderPage(data, pageID) {
        return (
            <Image style={styles.bannerImage}
                source={data}
                />
        );
    }

	_Reload() {
		this._fetchListData();
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		if (!this.state.data) {
			return (
				<TouchableHighlight style={styles.error} onPress={this._Reload.bind(this)}>
					<Text>服务器异常!</Text>
					<Text>轻触屏幕重新加载!</Text>
				</TouchableHighlight>
			);
		}

		let onPress = this.props.onPressDetails;

		return (
			<ListView dataSource={this.state.dataSource}
			           renderRow={(rowData) =>
			                <View style={styles.listContainer}>
								<News datadb={rowData}   onPress={onPress} />
							</View>
			           }
                      renderHeader={()=>{
                      return(
                        <View>
                            <ViewPager
                                style={styles.banner}
                                dataSource={this.state.dataSource1}
                                renderPage={this._renderPage}
                                isLoop={true}
                                autoPlay={true}/>
                        </View>
                        )}
                   }
			           style={styles.container}>
			</ListView >
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
	},
	error: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#363336',
	}
});