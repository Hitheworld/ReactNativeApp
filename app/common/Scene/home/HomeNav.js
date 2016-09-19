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

import NewsView from './News/NewsView';

export default class Nav extends Component {

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}>
                <NewsView tabLabel='推荐'/>
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
        )
    }
}