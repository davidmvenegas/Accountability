import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { home, your_tasks, partner_tasks, partner } from '../redux/actions/navigationAction';
import { useDispatch, useSelector } from 'react-redux';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome5'

export default function NavigationComponent({ navigation }) {
    const dispatch = useDispatch();
    const location = useSelector((store) => store.navigation.location);

    function handleHomeClick() {
        navigation.navigate('HomeScreen');
        dispatch(home());
    }
    function handleYourTasksClick() {
        navigation.navigate('YourTasksScreen');
        dispatch(your_tasks());
    }
    function handlePartnerTasksClick() {
        navigation.navigate('PartnerTasksScreen');
        dispatch(partner_tasks());
    }
    function handlePartnerClick() {
        navigation.navigate('PartnerScreen');
        dispatch(partner());
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <TouchableOpacity onPress={handleHomeClick} style={location === 'HOME_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <IIcon name="home" size={33} color={location === 'HOME_SCREEN' ? '#E0E1DD' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleYourTasksClick} style={location === 'YOUR_TASKS_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <FIcon name="tasks" size={33} color={location === 'YOUR_TASKS_SCREEN' ? '#E0E1DD' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePartnerTasksClick} style={location === 'PARTNER_TASKS_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <FIcon name="user-friends" size={33} color={location === 'PARTNER_TASKS_SCREEN' ? '#E0E1DD' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePartnerClick} style={location === 'PARTNER_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <FIcon name="search" size={33} color={location === 'PARTNER_SCREEN' ? '#E0E1DD' : '#999'} />
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
        backgroundColor: "#111111",
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
        borderColor: '#E0E1DD',
        borderTopWidth: 4,
    },
});