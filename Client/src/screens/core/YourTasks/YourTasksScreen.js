import { StyleSheet, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function YourTasksScreen({navigation}) {
    const tasks = ['task'];

    return (
        <SafeAreaView style={styles.container}>
            {tasks.length === 0
                ?
                <View style={styles.no_tasks_wrap}>
                    <Text style={styles.no_tasks_text}>No Tasks</Text>
                </View>
                :
                <View style={styles.tasks_container}>
                    <View style={styles.title_wrap}>
                        <Text style={styles.task_title}>YOUR TASKS</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.tasks_wrap}>
                            <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                                <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                                <Text style={styles.task_text}>Do Triginometry homework</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                                <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                                <Text style={styles.task_text}>Do Triginometry homework</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.task_wrap} onPress={() => navigation.navigate('TaskScreen')}>
                                <MIcon name="checkbox-blank-outline" size={28} style={{ color: '#fff'}} />
                                <Text style={styles.task_text}>Do Triginometry homework</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={styles.add_btn_wrap}>
                        <TouchableOpacity style={styles.add_btn}>
                            <IIcon name="ios-add-circle" size={28} style={{ color: '#E0E1DD'}} />
                            <Text style={styles.add_btn_text}> Add Task </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
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
    // TASKS TITLE
    title_wrap: {
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    task_title: {
        color: '#778DA9',
        fontSize: 26,
        fontWeight: '600',
        marginTop: 24,
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
        padding: 14,
    },
    // TASKS CONTENT
    task_wrap: {
        borderColor: '#fff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    task_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '300',
        marginLeft: 6,
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