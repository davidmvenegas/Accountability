import { StyleSheet, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { queryTasks } from '../../database/api/tasklist';
import { queryUser } from '../../database/api/users';


export default function HomeScreen() {
    const user = useSelector(store => store.user);

    /* useEffect(() => {
        queryUser(user).then((data) => console.log(data))
    }, []) */

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title_text}>Welcome to Home</Text>
                <View style={styles.add_btn_wrap}>
                    <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                        <Text style={styles.add_btn_text}> Read First Article </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.add_btn_wrap}>
                    <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                        <Text style={styles.add_btn_text}> Read Second Article </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.add_btn_wrap}>
                    <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                        <Text style={styles.add_btn_text}> Read Third Article </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#111111",
    },
    title_text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
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