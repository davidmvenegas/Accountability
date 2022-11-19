import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import AutoHeightImage from 'react-native-auto-height-image';
// import Logo from '../../assets/MAIN_LOGO.png'

export default function LandingScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_wrap}>
                {/* <AutoHeightImage
                    width={300}
                    source={Logo}
                /> */}
            </View>
            <View style={styles.description_wrap}>
                <Text style={styles.description_text_1}>Welcome</Text>
                <Text style={styles.description_text_2}>End procrastination and get work done.</Text>
            </View>

            <View style={styles.btn_wrap}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.btn}>
                    <Text style={styles.btn_text}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={{ ...styles.btn, backgroundColor: '#802d2d' }}>
                    <Text style={styles.btn_text}> Register </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#0D1B2A',
    },
    logo_wrap: {
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description_wrap: {
        flex: 1.6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 350,
    },
    description_text_1: {
        color: 'white',
        fontSize: 27,
        fontWeight: '600',
        textAlign: 'left',
        lineHeight: '40',
    },
    description_text_2: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        lineHeight: '40',
    },
    btn_wrap: {
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    btn: {
        width: 250,
        backgroundColor: '#086972',
        padding: 20,
        paddingLeft: 15,
        margin: 10,
        borderRadius: 8,
    },
    btn_text: {
        fontSize: 23,
        fontWeight: '500',
        color: '#fff',
        border: '1px solid #fff',
        textAlign: 'center',
    },
});