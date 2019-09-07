import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Images from '../../../assets/images'
import { PRIMARY_COLOR, SECONDARY_COLOR, TITLE_COLOR } from '../../../assets/color'
import { FONT_PRIMARY, FONT_SEMIBOLD, FONT_LIGHT, FONT_REGULAR, FONT_MEDIUM, FONT_EXTRA_LIGHT } from '../../../assets/fonts'

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
            validate:null
        }
        
        this.onLogin = this.onLogin.bind(this)
    }

    componentDidMount() {
    }

    

    onLogin() {
        this.props.navigation.navigate('Dashboard')
    }

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Image source={Images.menu} style={{ height: 40, width: 150 }} resizeMode='contain' />
                        <Text style={styles.subtitle}>Login with email or a social account.</Text>
                    </View>
                    <View style={styles.email}>
                        <TextInput
                            placeholder='Email address'
                            placeholderTextColor={TITLE_COLOR}
                            onChangeText={(text) => this.setState({ email: text })}
                            style={styles.textField}
                        />
                    </View>
                    <View style={styles.password}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={TITLE_COLOR}
                            onChangeText={(text) => this.setState({ password: text })}
                            secureTextEntry={this.state.showpswrd}
                            style={styles.textField}
                        />
                        <TouchableOpacity style={{justifyContent:'center',paddingRight:15 }}
                            onPress={() => this.setState({ showpswrd: !this.state.showpswrd })}>
                            <FontAwesome5 name={this.state.showpswrd?'eye':'eye-slash' }size={18} color='#656565' />
                        </TouchableOpacity>
                    </View>
                    <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.reset}>Reset Password</Text>
                    {this.props.error &&<Text style={styles.validationText}>{this.props.error} </Text>}
                    <TouchableOpacity onPress={this.onLogin} style={styles.button}>
                        <Text style={styles.signin}>{this.props.isLogging ? 'Signing In...' : 'Sign In'}</Text>
                        <AntDesign name='arrowright' size={26} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.member}>Not a member?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
                        <Text style={styles.signup}>Signup Now</Text>
                    </TouchableOpacity>
                    <View style={styles.sepratorContainer}>
                        <View style={styles.seprator} />
                        <View style={styles.orContainer}>
                            <Text style={styles.or}>OR</Text>
                        </View>
                        <View style={styles.seprator} />
                    </View>
                    <TouchableOpacity style={styles.facebook} onPress={this.login_fb}>
                        <Fontisto name='facebook' size={18} color='white' />
                        <Text style={styles.signinwith}>Sign in with<Text style={styles.social}> Facebook</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.google} onPress={this.signIn}>
                        <Fontisto name='google' size={18} color='white' />
                        <Text style={styles.signinwith}>Sign in with<Text style={styles.social}> Google</Text></Text>
                    </TouchableOpacity>
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
        padding:15,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        padding: 15
    },
    header: {
        alignItems: 'center',
    },
    welcome: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 30,
        textAlign: 'center',
        color: TITLE_COLOR
    },
    subtitle: {
        fontFamily: FONT_REGULAR,
        fontSize: 22,
        paddingTop: 10,
        paddingBottom: 15,
        alignSelf: 'flex-start',
        color: TITLE_COLOR,
    },
    email: {
        height: 50,
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 5
    },
    password: {
        flexDirection:'row',
        height: 50,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 5
    },
    textField: {
        flex:1,
        fontSize: 18,
        fontFamily: FONT_SEMIBOLD,
        paddingLeft: 15,
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'center',
    },
    reset: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'right',
        paddingTop: 5,
        marginBottom: 15,
        color: '#656565'
    },
    validationText:{
        color: '#f44336',
        fontFamily: FONT_LIGHT,
        fontSize: 15,
        paddingHorizontal: 15,
        marginBottom:10,
        marginTop:-5
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    signin: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 18,
        color: TITLE_COLOR,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15
    },
    member: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 18,
        textAlign: 'center',
        color: TITLE_COLOR,
        opacity: .4,
        lineHeight: 21
    },
    signup: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 21,
        textDecorationLine: 'underline',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        lineHeight: 25
    },
    sepratorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    seprator: {
        flex: 1,
        height: 1,
        width: '100%',
        backgroundColor: '#707070',
        opacity: .2
    },
    orContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 15,
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    or: {
        fontFamily: FONT_REGULAR,
        fontSize: 16,
        color: TITLE_COLOR
    },
    facebook: {
        height: 50,
        width: '100%',
        backgroundColor: '#3b5998',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15
    },
    google: {
        height: 50,
        width: '100%',
        backgroundColor: '#db3236',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30
    },
    social: {
        fontFamily: FONT_SEMIBOLD,
        fontSize: 16,
        color: TITLE_COLOR,
        color: 'white',
        textAlign: 'left'
    },
    signinwith: {
        fontFamily: FONT_MEDIUM,
        fontSize: 14,
        color: TITLE_COLOR,
        color: 'white',
        paddingLeft: 15
    },
})