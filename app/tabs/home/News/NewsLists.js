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
import ErrorView from '../../../common/ErrorView';
import LoadingView from '../../../common/LoadingView';

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
		if (!this.state.loaded) {
			return <LoadingView />;
		}

		this._fetchListData();
	}

	render() {
		let onPress = this.props.onPressDetails;

		if (!this.state.loaded) {
			return <LoadingView />;
		}

		return (
			<View style={styles.container}>
				{((this.state.dataSource==null)? true:false) ?
				<ListView dataSource={this.state.dataSource}
				          style={styles.container}
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
				          enableEmptySections={true}>
				</ListView >
				:
				<ErrorView onPressErrer={this._Reload.bind(this)} />
				}
			</View>
		)
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

});