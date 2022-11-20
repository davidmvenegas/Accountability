import { StyleSheet, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';

export default function TaskScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasks_container}>
                <Text style={styles.task_title}>TASK</Text>
                <ScrollView>
                    <View style={styles.tasks_wrap}>
                        <View style={styles.task_wrap}>
                            <Text style={styles.task_text}>Do Triginometry homework</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.add_btn_wrap}>
                    <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('YourTasksScreen')}>
                        <Text style={styles.add_btn_text}> Back </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d1b2a",
    },
    // NO TASKS
    no_tasks_wrap: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    no_tasks_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
    },
    // TASKS SETUP
    tasks_container: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    tasks_wrap: {
        flex: 1,
        width: deviceWidth,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    },
    // TASKS TITLE
    task_title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '400',
        marginTop: 12,
        marginLeft: 10,
        marginBottom: 20,
    },
    // TASKS CONTENT
    task_wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    task_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '200',
        marginLeft: 8,
    },
    // TASKS ADD BUTTON
    add_btn_wrap: {
        width: deviceWidth,
        alignItems: 'center',
    },
    add_btn: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#415A77',
        padding: 12,
        margin: 20,
        borderRadius: 10,
    },
    add_btn_text: {
        color: '#E0E1DD',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 2,
    },
});