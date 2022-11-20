import { StyleSheet, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function YourTasksScreen({navigation}) {
    const tasks = ['ds'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasks_container}>
                <View style={styles.title_wrap}>
                    <Text style={styles.task_title}>YOUR TASKS</Text>
                </View>
                {tasks.length === 0
                ?
                <View style={styles.no_tasks_wrap}>
                    <Text style={styles.no_tasks_text}>No Tasks</Text>
                </View>
                :
                <ScrollView>
                    <View style={styles.tasks_wrap}>
                        <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                            <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                            <Text style={styles.task_text}>Do Triginometry homework</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                            <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                            <Text style={styles.task_text}>Respond to Emails</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                            <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                            <Text style={styles.task_text}>Write English essay</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                }
                <View style={styles.add_btn_wrap}>
                    <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                        <MCIcon name="playlist-add" size={32} style={{ color: '#E0E1DD'}} />
                        <Text style={styles.add_btn_text}> Add Task </Text>
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
        backgroundColor: "#111111",
    },
    // NO TASKS
    no_tasks_wrap: {
        height: '75%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    no_tasks_text: {
        color: '#777',
        fontSize: 22,
        fontWeight: '300',
    },
    // TASKS TITLE
    title_wrap: {
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    task_title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 22,
    },
    // TASKS SETUP
    tasks_container: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    // TASKS CONTENT
    tasks_wrap: {
        flex: 1,
        width: deviceWidth,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 2,
        padding: 14,
    },
    task_wrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 12,
    },
    task_text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 8,
    },
    // TASKS ADD BUTTON
    add_btn_wrap: {
        width: deviceWidth,
        alignItems: 'center',
    },
    add_btn: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#415A77',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    add_btn_text: {
        color: '#E0E1DD',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 2,
    },
});