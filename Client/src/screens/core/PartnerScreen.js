import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function PartnerScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.contentText}>Say hello to your Partner:</Text>
            <Text style={styles.contentText}>Kevin Smith</Text>
            <Text style={styles.contentText}>Age: 23</Text>
            <Text style={styles.contentText}>Location: United States</Text>
            <Text style={styles.contentText}>Tasks Completed: 292</Text>
            <Text style={styles.contentText}>Member Since: Feburary 2020</Text>

            <View style={styles.add_btn_wrap}>
                <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                    <Text style={styles.add_btn_text}> Remove Partner </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.add_btn_wrap}>
                <TouchableOpacity style={styles.add_btn} onPress={() => navigation.navigate('AddTaskScreen')}>
                    <Text style={styles.add_btn_text}> Assign Partner </Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#111111",
    },
    contentText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 30,
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