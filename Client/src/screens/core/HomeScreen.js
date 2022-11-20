import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0D1B2A",
    },
    title_text: {
        marginTop: 250,
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
    },
});