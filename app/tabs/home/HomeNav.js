import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Navigator,
    PixelRatio,
    Dimensions,
    ScrollView,
    ListView,
    View,
    Image,
    Text
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';

import Header from '../../common/Header';
import NewsLists from './News/NewsLists';
import NewsDetail from './News/NewsDetail';

export default class HomeNav extends Component {

	constructor(props) {
		super(props);
	}

	_pressButton() {
		const { navigator } = this.props;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if(navigator) {
			navigator.push({
				name: '阅读',
				component: NewsDetail,
			})
		}
	}

    render() {
        return (
	        <View style={styles.flex}>
		        <Header
			        title="首页"
			        style={styles.header}
			        leftItem={{
			            icon: require('./images/home_icons/cz.png'),
			            title: 'Menu',
			            layout: 'icon',
			            onPress: () => this.props.navigator.push({

		                }),
		            }}>
		        </Header>
		        <ScrollableTabView
			        tabBarUnderlineColor="#f6f6f6"
			        renderTabBar={() => <ScrollableTabBar/>}>
			        <NewsLists tabLabel='推荐'  onPressDetails={this._pressButton.bind(this)} />
			        <Text tabLabel='Tab2'/>
			        <Text tabLabel='Tab3'/>
			        <Text tabLabel='Tab4'/>
			        <Text tabLabel='Tab5'/>
			        <Text tabLabel='Tab6'/>
			        <Text tabLabel='Tab4'/>
			        <Text tabLabel='Tab5'/>
			        <Text tabLabel='Tab6'/>
			        <Text tabLabel='Tab4'/>
			        <Text tabLabel='Tab5'/>
			        <Text tabLabel='Tab6'/>
		        </ScrollableTabView>
		    </View>
        )
    }
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	header: {
		backgroundColor: '#393a3f',
	},
});