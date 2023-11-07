import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, FlatList, Button, TextInput} from "react-native";

export default function Products() {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const filePath = 'https://dummyjson.com/products/';
    const getProducts = () => {
        fetch(!value ? filePath : `${filePath}search?q=${value}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })

            .then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        getProducts()
    });

    const Item = ({title, description, price, discountPercentage, rating, stock, brand, category, thumbnail}) => (
            <View style={{flex: 1, flexDirection: 'column', margin: 4, backgroundColor: '#D8D8D8'}}>
                <View style={{flex: 0.3, padding: 10}}>
                    <Text>Product Detail</Text>
                    <Image
                        style={styles.image}
                        source={{uri: thumbnail}}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Title: {title} </Text>
                    <Text>Description: {description} </Text>
                    <Text>Price: {price} </Text>
                    <Text style={styles.discount}>Discount: {discountPercentage} </Text>
                    <Text>Rating: {rating} </Text>
                    <Text>Stock: {stock} </Text>
                    <Text>Branch: {brand} </Text>
                    <Text>Category: {category} </Text>
                </View>
            </View>
    );

    const renderItem = ({item}) => (
        <Item
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
            stock={item.stock}
            brand={item.brand}
            category={item.category}
        />
    );

    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight: "bold"}}>Search Products</Text>
                <TextInput style={styles.input}
                           value={value}
                           onChangeText={(value) => setValue(value)}
                />
                <View>
                    <Button title='SEARCH' onPress={() => getProducts()}/>
                </View>
            </View>
            {data && (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            )}
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 8,
    },
    content: {
        flex: 0.6,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    discount: {
        color: '#3D9A3D',
    },
    allButtonInRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: "100%",
        height: 150,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});
