import React, { Component } from 'react';
import {
	StyleSheet,
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

import NewsDetail from './NewsDetail';

export default class News extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let data = this.props.datadb;
		let onPress = this.props.onPress;
		let img = data.media_avatar_url;
		let pic = this.props.datadb ? {uri: img ? img : 'https://facebook.github.io/react/img/logo_og.png'} : require('./images/default.jpg');
		return (
			<TouchableHighlight  underlayColor='rgba(34,26,38,0.1)' onPress={onPress}>
				<View  style={styles.item}>
                    <View style={styles.itemImageBox}>
                        <Image style={styles.itemImage} source={pic} />
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader} numberOfLines={2}>{data.title}</Text>
                        <View style={styles.itemMeta}>
                            <View style={styles.itemMetaTop}>
                                <Text style={styles.itemMetaTopText}>{data.source}</Text>
                            </View>
                            <View style={styles.itemMetaTopTime}>
                                <Text style={styles.itemMetaTopTimeText}>{data.behot_time}</Text>
                            </View>
                        </View>
                    </View>
                </View>
			</TouchableHighlight>
		)
	}

}

const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
	    backgroundColor: 'rgba(255,255,255,1)',
        borderBottomColor: '#2e2e32',
        borderBottomWidth: 2/PixelRatio.get(),
        borderStyle: 'dashed',
    },
    itemImageBox: {
        width: 120,
        height: 80,
    },
    itemImageBg: {
		width: 120,
		height: 80,
	},
    itemImage: {
		width: 120,
		height: 80,
	},
    itemContent: {
		flex: 1,
		paddingLeft: 10,
	},
    itemHeader: {
		flex: 1,
	},
	itemMeta: {
		flexDirection: 'row',
	},
    itemMetaTop: {
	    paddingLeft: 5,
	    paddingRight: 5,
		height: 15,
		borderRadius: 5,
		justifyContent: 'center',
		borderColor: 'rgba(55,212,1,1)',
		borderWidth: 3/PixelRatio.get(),
		marginRight: 10,
	},
    itemMetaTopText: {
		fontSize: 10,
		textAlign: 'center',
		color: 'rgba(55,212,1,1)',
	},
    itemMetaTopTime: {

	},
    itemMetaTopTimeText: {

	}
});
