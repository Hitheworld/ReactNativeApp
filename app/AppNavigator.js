import React, { Component } from 'react';
import {
	StyleSheet,
	Navigator,
	Platform
} from 'react-native';

import TabBar from './tabs/TabBar.android';

export default class AppNavigator extends Component {

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
		return (
			<Navigator
				initialRoute={{  }}
				configureScene={(route) => {
					 if (Platform.OS === 'android') {
				         return Navigator.SceneConfigs.PushFromRight;
				     }
				        // TODO: Proper scene support
			         if (route.shareSettings || route.friend) {
			             return Navigator.SceneConfigs.FloatFromRight;
			         } else {
			             return Navigator.SceneConfigs.FloatFromBottom;
			         }
                }}
				renderScene={ this.renderScene } />
		)
	}

	renderScene(route, navigator) {
		return <TabBar navigator={navigator} />;
	}

}