import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
}
    from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const AddService = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('data');
            if (value !== null) {
                setData(JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAdding = async (name, price) => {
        const apiURL = `https://kami-backend-5rs0.onrender.com/services`;
        const postData = {name: name, price: price};
        const token = data.token;

        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        axios
            .post(apiURL, postData, axiosConfig)
            .then(response => {
                console.log(response.data);
                console.log(token);
            })
            .catch(error => {
                console.log(token);
                console.log('Fail: ', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Service Name</Text>
            <TextInput
                style={styles.input}
                placeholder="service name"
                onChangeText=
                    {
                        text => setName(text)
                    }
            />
            <Text style={styles.title}>
                Price
            </Text>

            <TextInput style={styles.input} onChangeText={text => setPrice(text)}/>
            <Button
                style={styles.button}
                title="Add"
                onPress={() => handleAdding(name, price)}
            />
        </View>
    );
};

export default AddService;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        margin: 8,
    },

    title: {
        color: 'black',
        fontSize: 18,
    },

    input: {
        height: 50,
        width: '80%',
        margin: 12,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
    },

    button: {
        width: '80%',
        backgroundColor: 'green',
        marginTop: 12,
        borderRadius: 12,
    },
});
