import { StyleSheet, SafeAreaView, ScrollView, View, Text, Dimensions } from 'react-native';

export default function NotificationsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title_text}>Welcome to Notifications</Text>
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
        backgroundColor: "#000",
    },
    title_text: {
        marginTop: 250,
        color: '#fff',
        fontSize: 22,
        fontWeight: '400',
    },
});