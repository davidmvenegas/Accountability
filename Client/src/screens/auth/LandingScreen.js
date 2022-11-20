import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Background from '../../assets/background_landing.jpg'
import Logo from '../../assets/MAIN_LOGO.png'

export default function LandingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.cover_image}>
                <View style={styles.darken}></View>
                <View style={styles.logo_wrap}>
                    <Image style={styles.logo} source={Logo} />
                </View>
                <View style={styles.description_wrap}>
                    <Text style={styles.description_text_1}>Welcome</Text>
                    <Text style={styles.description_text_2}>Stay accountable and get work done more efficiently.</Text>
                </View>
            </ImageBackground>

            <View style={styles.btn_wrap}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.btn}>
                    <Text style={styles.btn_text}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={{ ...styles.btn, backgroundColor: '#4C3527' }}>
                    <Text style={styles.btn_text}> Register </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#111',
    },
    darken: {
        position: 'absolute',
        backgroundColor: '#00000055',
        borderWidth: 1,
        height: '100%',
        width: '100%',
        marginLeft: 25,
    },
    cover_image: {
        flex: 1,
        justifyContent: "center",
    },
    logo_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
    },
    logo: {
        width: 300,
        height: 32,
    },
    description_wrap: {
        flex: 1.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: deviceWidth,
        marginLeft: 50,
    },
    description_text_1: {
        color: 'white',
        fontSize: 28,
        fontWeight: '600',
        lineHeight: '50',
    },
    description_text_2: {
        color: 'white',
        fontSize: 18,
        fontWeight: '200',
        lineHeight: '25',
        marginRight: 20,
    },
    btn_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btn: {
        width: 320,
        backgroundColor: '#8B705D',
        padding: 17,
        margin: 8,
        borderRadius: 8,
    },
    btn_text: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        border: '1px solid #fff',
        textAlign: 'center',
    },
});