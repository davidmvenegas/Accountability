import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { your_tasks, partner_tasks, partner } from '../../redux/actions/navigationAction';
import { useDispatch } from 'react-redux';

export default function HomeScreen({navigation}) {
    const dispatch = useDispatch();

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
        <SafeAreaView style={styles.container}>
            <View style={styles.title_wrap}>
                <Text style={styles.title_text}>Quick Actions</Text>
            </View>
            <View style={styles.btns_wrap}>
                <TouchableOpacity style={styles.btn} onPress={() => handleYourTasksClick()}>
                    <Text style={styles.btn_text}> Your Tasks </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handlePartnerTasksClick()}>
                    <Text style={styles.btn_text}> Partner Tasks </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handlePartnerClick()}>
                    <Text style={styles.btn_text}> Go to Partner </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "#111",
    },
    title_wrap: {
        width: deviceWidth,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    title_text: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: '600',
    },
    // BUTTONS
    btns_wrap: {
        width: deviceWidth,
        alignItems: 'center',
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#333435',
        padding: 28,
        marginBottom: 20,
        borderRadius: 10,
    },
    btn_text: {
        color: '#E0E1DD',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginLeft: 2,
    },
});