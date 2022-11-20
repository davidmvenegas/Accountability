import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { newTasktoTasklist } from '../../../database/api/tasklist';
import { useSelector } from 'react-redux';

export default function TaskScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const user = useSelector(store => store.user);

    function handleCreateTask()  {
        newTasktoTasklist(title, description, deadline, user).then(console.log("Added user"))
        navigation.navigate('YourTasksScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.create_tasks_container}>
                <View style={styles.section_1}>
                    {/* <View style={}>
                        <Text style={styles.create_task_title}>Fill out the following fields to create your task</Text>
                    </View> */}
                    <Text style={styles.create_task_title}>Fill out the following fields to create your task</Text>
                    <View style={styles.total_input_wrap}>
                        <View style={styles.task_input_wrap}>
                            <TextInput
                                style={styles.task_input}
                                placeholder='Title'
                                placeholderTextColor={'#999'}
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                                />
                        </View>
                        <View style={styles.task_input_wrap}>
                            <TextInput
                                style={styles.task_input}
                                placeholder='Details'
                                placeholderTextColor={'#999'}
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                                />
                        </View>
                        <View style={styles.task_input_wrap}>
                            <TextInput
                                style={styles.task_input}
                                placeholder='Deadline'
                                placeholderTextColor={'#999'}
                                value={deadline}
                                onChangeText={(text) => setDeadline(text)}
                                />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.create_btn_wrap}>
                        <TouchableOpacity style={styles.create_btn} onPress={() => handleCreateTask()}>
                            <Text style={styles.create_btn_text}> Create Task </Text>
                        </TouchableOpacity>
                    </View>
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
    create_tasks_container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    section_1: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 16,
    },
    // TASKS TITLE
    create_task_title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 20,
    },
    // INPUT TITLE
    total_input_wrap: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    task_input_wrap: {
        width: 300,
        marginBottom: 10,
    },
    task_input: {
        color: 'white',
        fontSize: 16,
        width: 300,
        height: 55,
        borderWidth: 1,
        padding: 10,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 4,
    },
    // TASKS CREATE BUTTON
    create_btn_wrap: {
        width: deviceWidth,
        alignItems: 'center',
    },
    create_btn: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#415A77',
        padding: 12,
        margin: 20,
        borderRadius: 10,
    },
    create_btn_text: {
        color: '#E0E1DD',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginLeft: 2,
    },
});