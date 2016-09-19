/**
 * 跳转
 * return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight : 跳转的效果
 *  可在node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js查看
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Navigator,
	PixelRatio,
	ScrollView,
	View,
	Image,
	Text
} from 'react-native';

import FirstPageComponent from '../Scene/FirstPageComponent';

export default class NV extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	_pressButton() {
		const { navigator } = this.props;
		if(navigator) {
			//很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
			navigator.pop();
		}
	}

	render() {
		let defaultName = 'FirstPageComponent';
		let defaultComponent = FirstPageComponent;
		return (
			<Navigator
					initialRoute={{ name: defaultName, component: defaultComponent }}
					configureScene={(route) => {
	                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                    }}
					renderScene={(route, navigator) => {
		                let Component = route.component;
		                return <Component {...route.params} navigator={navigator} />
            }} />
		)
	}

}