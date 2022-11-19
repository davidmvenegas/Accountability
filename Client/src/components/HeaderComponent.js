import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { notifications, settings } from '../redux/actions/navigationAction';
import AutoHeightImage from 'react-native-auto-height-image';
import IIcon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/MAIN_LOGO.png'


export default function HeaderComponent() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const location = useSelector((store) => store.navigation.location);

    function handleNotificationsClick() {
        navigation.navigate('NotificationsScreen');
        dispatch(notifications());
    }
    function handleProfileClick() {
        navigation.navigate('SettingsScreen');
        dispatch(settings());
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.logo_wrap}>
                    <AutoHeightImage
                        width={190}
                        source={Logo}
                    />
                </View>
                <View style={styles.image_wrap}>
                    <TouchableOpacity onPress={handleNotificationsClick}>
                        <IIcon style={styles.notification_image} name="ios-notifications" size={25} color={location === 'NOTIFICATIONS_SCREEN' ? '#0099ff' : '#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleProfileClick}>
                        <IIcon style={styles.profile_image} name="settings-sharp" size={25} color={location === 'SETTINGS_SCREEN' ? '#0099ff' : '#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        height: 92,
        width: deviceWidth,
        borderBottomWidth: 1,
        borderColor: '#353e4f',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000",
        padding: 20,
        paddingTop: 68,
        marginLeft: -16,
        marginTop: -46,
    },
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    logo_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    image_wrap: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    notification_image: {
        height: 25,
        width: 25,
        marginRight: 22,
    },
    profile_image: {
        height: 25,
        width: 25,
    },
});