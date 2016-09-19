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

export default class NewsDetail extends Component {

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
		let name = this.props.name;
		return (
			<View style={styles.flex}>
				<View style={styles.header}>
                    <View style={styles.header_left}>
                        <TouchableOpacity style={styles.header_btn} onPress={this._pressButton.bind(this)}>
                            <Image style={styles.backOff} source={require('./images/backOff.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header_title}>
                        <Text style={styles.title}>标题-{name}</Text>
                    </View>
                    <View style={styles.header_right}>
                        <Image style={styles.more} source={require('./images/more.png')} />
                    </View>
				</View>
				<ScrollView style={styles.pageContainer}>
					<View style={styles.container}>
						<Text style={styles.newsTitle}>标题-{name}</Text>
					</View>

					<View style={styles.container}>
						<Image source={{uri : 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.newsPic} />
					</View>

					<View style={styles.container}>
						<Text style={styles.newsContent}>内容</Text>
					</View>
				</ScrollView>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
    header: {
        height: 50,
        flexDirection : 'row',
        justifyContent: 'space-between',
        backgroundColor: '#393a3f',
	},
    header_left: {

    },
    header_btn: {
        marginLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRightColor: '#2e2e32',
        borderRightWidth: 4/PixelRatio.get(),
    },
    backOff: {
        width: 29,
        height: 28,

    },
    header_title: {

    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 20,
    },
    header_right: {
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    more: {
        width: 6,
        height: 28,
    },
	container: {
		flex: 1,
		flexDirection : 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	newsTitle : {
		color : '#4f4f4f',
		fontSize : 18,
		textAlign : 'left',
		marginTop : 10,
		marginBottom : 10,
		fontWeight : 'bold'
	},
	newsPic : {
		width : 180,
		height : 120,
		margin: 10,
	},
	newsContent : {
		margin : 10,
		marginTop : 10,
		flex: 1,
		color : '#4f4f4f',
		fontSize : 16,
		textAlign : 'left',
		writingDirection : 'ltr',
		lineHeight : 20
	},
});
