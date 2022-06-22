import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, SafeAreaView,FlatList, ActivityIndicator} from 'react-native';

const Api = "https://zenquotes.io/api/quotes/";
const Details = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(Api)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))
            .finally(setLoading(false));
    },[]);
    return <SafeAreaView style={styles.container}>
        {isLoading ? (<ActivityIndicator size="large" color="red" />) : (
            <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Text style={{
                    padding: 10, fontSize: 20 , borderWidth: 1,
                    backgroundColor: "red", color: "yellow",
                    borderColor: "yellow",
}}>
                    {item.q}  - by {item.a}
                </Text>
            )}
        />)}
           </SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default  Details
