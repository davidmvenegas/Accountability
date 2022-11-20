import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export default function TaskScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(new Date());

    function handleCreateTask() {
        console.log('Create task...')
        navigation.navigate('YourTasksScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.create_tasks_container}>
                <View style={styles.section_1}>
                    <View style={styles.top_title_wrap}>
                        <Text style={styles.top_title}>Create a Task</Text>
                        <Text style={styles.create_task_title}>Fill out the following fields to create your task</Text>
                    </View>
                    <View style={styles.total_input_wrap}>
                        <View style={styles.task_input_wrap}>
                            <TextInput
                                style={styles.title_input}
                                placeholder='Title'
                                placeholderTextColor={'#999'}
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                                />
                        </View>
                        <View style={styles.task_input_wrap}>
                            <TextInput
                                style={styles.details_input}
                                placeholder='Details'
                                placeholderTextColor={'#999'}
                                multiline={true}
                                value={description}
                                onChangeText={(text) => setDescription(text)}
                                />
                        </View>
                        <View style={styles.task_input_wrap}>
                            <View style={styles.deadline_input}>
                                <Text style={styles.deadline_text}>Deadline</Text>
                                <DateTimePicker
                                    value={deadline}
                                    mode={'datetime'}
                                    display={'default'}
                                    is24Hour={true}
                                    minimumDate={new Date(Date.now())}
                                    onChange={(event, value) => setDeadline(value)}
                                    themeVariant="dark"
                                    style={styles.date_picker}
                                    />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.create_btn_wrap}>
                        <TouchableOpacity style={styles.create_btn} onPress={() => handleCreateTask()}>
                            <MIcon name="create" size={28} style={{ color: '#E0E1DD' }} />
                            <Text style={styles.create_btn_text}> Create </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancel_btn} onPress={() => navigation.navigate('YourTasksScreen')}>
                            <Text style={styles.cancel_btn_text}> Back </Text>
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
        backgroundColor: "#111111",
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
    top_title_wrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '600',
        marginTop: 6,
        marginBottom: 12,
    },
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
        width: deviceWidth - 32,
        marginBottom: 12,
    },
    title_input: {
        color: 'white',
        fontSize: 18,
        width: '100%',
        height: 48,
        paddingLeft: 8,
        backgroundColor: '#111',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 5,
    },
    // INPUT DETAILS
    details_input: {
        color: 'white',
        fontSize: 18,
        width: '100%',
        height: 150,
        paddingTop: 8,
        paddingLeft: 8,
        backgroundColor: '#111',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 5,
    },
    // INPUT DATETIME
    deadline_input: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#111',
        borderColor: '#555',
        borderWidth: 1,
        borderRadius: 5,
        height: 54,
    },
    deadline_text: {
        color: '#999',
        fontSize: 18,
        paddingLeft: 8,
        paddingRight: 8,
    },
    date_picker: {
        width: 222,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    // TASKS CREATE BUTTON
    create_btn_wrap: {
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    create_btn: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#415A77',
        padding: 18,
        marginBottom: 12,
        borderColor: '#415A77',
        borderWidth: 2,
        borderRadius: 8,
    },
    create_btn_text: {
        color: '#E0E1DD',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
    cancel_btn: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#622D2F',
        padding: 14,
        marginBottom: 20,
        borderRadius: 8,
    },
    cancel_btn_text: {
        color: '#E0E1DD',
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
});