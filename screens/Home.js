import { StyleSheet, Text, View,SafeAreaView, Image,Pressable } from 'react-native';
import React from 'react'
const Home=({navigation})=> {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/wallpaper.png')} style={styles.image} />
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View style={styles.middle}>
                <Image source={require('../assets/mid.gif')} style={styles.mid} />                
            </View>
            <View style={styles.contain}>
                <Pressable
                    onPress={() =>
                        navigation.navigate('back', { name: 'Jane' })
                    }
                    style={styles.button}
                ><Text style={styles.bottomtext}>Get Started </Text></Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        resizeMode: "cover",
        position: "absolute",
        borderColor: "white",

    },
    text: {
        display: "flex",
        color: "#1C75D1",
        fontSize: 70,
        lineHeight: 80,
        width: "100%",
        height: "100%",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "30%",

    },
    logo: {
        width: "100%",
        position: "absolute",
        bottom: 500,
    },
    middle: {
        position: "absolute",
    },

    contain: {
        width: "100%",
        padding: 10,
        position: "absolute",
        bottom: 50,
    },
    button: {
        backgroundColor: '#1C75D1',
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    bottomtext: {
        fontSize: 17,
        fontWeight: "500",
        color: "white",
    },
});
