import React, { Component } from 'react'
import { SafeAreaView,StyleSheet, View, TouchableOpacity, Text, Image, TextInput, FlatList } from 'react-native'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Images from '../../../assets/images'
import { PRIMARY_COLOR, SECONDARY_COLOR, TITLE_COLOR } from '../../../assets/color'
import { FONT_PRIMARY, FONT_SEMIBOLD, FONT_LIGHT, FONT_REGULAR, FONT_MEDIUM, FONT_EXTRA_LIGHT } from '../../../assets/fonts'

let response = [{tripId:1,tripName:'allo'}]

class App extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            user: null,
            showpswrd: true,
            validate: null
        }
        this.onLogin = this.onLogin.bind(this)
    }

    componentDidMount() {
    }



    onLogin() {
    }

    renderItem(item) {
        return (
            <TouchableOpacity style={styles.cardList} onPress={() => this.props.navigation.navigate('TripDetail')}>
                <View style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.title}>{item.tripName}</Text>
                    <View>
                        <Text style={styles.subtitle}>{item.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={response}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item) => item.tripId.toString()} />
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 15
    },
    flatList: {
        flex: 1,
    },
    cardList: {
        flexDirection: 'row',
        paddingBottom: 15,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8
    },
    textContainer: {
        paddingLeft: 15,
        flex: 1,
        // justifyContent: 'space-between'
    },
    title: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 16,
        color: TITLE_COLOR,
        lineHeight: 20
    },
    subtitle: {
        fontFamily: FONT_REGULAR,
        fontSize: 14,
        color: TITLE_COLOR
    },
    type: {
        fontSize: 12,
        fontFamily: FONT_REGULAR,
        color: PRIMARY_COLOR,
    },
    img: {
        height: 100,
        width: '100%',
        borderRadius: 8
    },
    cardGrid: {
        flex: 1 / 2,
        margin: 5
    }
})