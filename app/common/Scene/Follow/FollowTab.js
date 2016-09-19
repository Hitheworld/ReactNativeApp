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

import NewsDetail from '../home/News/NewsDetail';

export default class FollowTab extends Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

        };
    }

    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'NewsDetail',
                component: NewsDetail,
            })
        }
    }

    render() {
        return (
            <View style={styles.flex}>

                <ScrollView>
                    <TouchableOpacity style={styles.list_view} onPress={this._pressButton.bind(this)}>
                        <Text>朋友圈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list_view} onPress={this._pressButton.bind(this)}>
                        <Text>朋友圈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list_view} onPress={this._pressButton.bind(this)}>
                        <Text>朋友圈</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        //paddingVertical: 20
    },
    list_view: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,1)',
        flexDirection : 'row',
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    }
});