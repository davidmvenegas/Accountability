import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { home } from '../redux/actions/navigationAction';
import { useDispatch, useSelector } from 'react-redux';
import IIcon from 'react-native-vector-icons/Ionicons';

export default function NavigationComponent({ navigation }) {
    const dispatch = useDispatch();
    const location = useSelector((store) => store.navigation.location);

    function handleHomeClick() {
        navigation.navigate('HomeScreen');
        dispatch(home());
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <TouchableOpacity onPress={handleHomeClick} style={location === 'HOME_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <IIcon name="home" size={33} color={location === 'HOME_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#353e4f',
        paddingBottom: 45,
        backgroundColor: "#000",
    },
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    },
    title_wrap: {
        height: 60,
        width: 65,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title_wrap_highlighted: {
        height: 60,
        width: 65,
        marginTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: '#0099ff',
        borderTopWidth: 4,
    },
});