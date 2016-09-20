'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Navigator,
	PixelRatio,
	ScrollView,
	ListView,
	View,
	Image,
	Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeView from './home/HomeView';
import VideoHome from './Video/VideoHome';
import InfoHome from './Info/InfoHome';
//import HomePage from '../common/Scene/home/HomePage ';

const HOME = '主页';
const HOME_NORMAL = "home";
const HOME_FOCUS = "home";
const CATEGORY = '视频';
const CATEGORY_NORMAL = "video-camera";
const CATEGORY_FOCUS = "video-camera";
const FAXIAN = '关注';
const FAXIAN_NORMAL = "heart-o";
const FAXIAN_FOCUS = "heart-o";
const CART = '发现';
const CART_NORMAL = "compass";
const CART_FOCUS = "compass";
const PERSONAL = '我';
const PERSONAL_NORMAL = "header";
const PERSONAL_FOCUS = "header";

export default class TabBar extends Component {

	constructor(props) {
		super(props);
		this.state = {selectedTab: HOME}
	}

	_renderTabItem(img, selectedImg, tag, childView) {
		return (
			<TabNavigator.Item
				selected={this.state.selectedTab === tag}
				renderIcon={() =>
				<View style={styles.tabIiem}>
					<Icon style={styles.tabIcon} name={img} color="#9b9db1" />
					<Text style={[styles.tabText,{color:'#9b9db1'}]}>{tag}</Text>
				</View>}
				renderSelectedIcon={() =>
				<View style={styles.tabIiem}>
					<Icon style={styles.tabIcon} name={selectedImg} color="#00b7fa" />
					<Text style={[styles.tabText,{color:'#00b7fa'}]}>{tag}</Text>
				</View>}
				onPress={() => this.setState({ selectedTab: tag })}>
				{childView}
			</TabNavigator.Item>
		);
	}

	static _createChildView(tag) {
		return (
			<View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
				<Text style={{fontSize:22}}>{tag}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
					{this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomeView nav={this.props.nav} />)}
					{this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, <VideoHome nav={this.props.nav} />)}
					{this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, TabBar._createChildView(FAXIAN))}
					{this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, TabBar._createChildView(CART))}
					{this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <InfoHome nav={this.props.nav} /> )}
				</TabNavigator>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	tab: {
		height: 52,
		backgroundColor: '#303030',
		alignItems: 'center',
	},
	tabIiem: {

	},
	tabText: {
		fontSize: 10,
		textAlign: 'center',
		marginTop: 5,
	},
	tabIcon: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 5,
	}
});