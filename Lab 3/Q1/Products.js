import React, {useState, useEffect} from 'react';
import { View, Image, StyleSheet, Text, FlatList, Button } from "react-native";

export default function Products() {
  const [data, setData] = useState([])
  const filePath = 'https://dummyjson.com/products/'; 
  useEffect(() => {
    //Alert.alert(filePath);
    fetch(filePath)
      .then((response) => { if (!response.ok) {
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
  });
  const Item = ({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail}) => (
    <View style={{flex:1, flexDirection: 'row', margin: 4, backgroundColor: '#D8D8D8'}}>
      <View style={{flex: 0.3, padding:10}}>
        <Image
          style={{width: 80, height: 80}}
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
        <View style={styles.allButtonInRow}>
          <View style={styles.button}>
            <Button title='DETAIL'></Button>
          </View>
          <View style={styles.button}>
            <Button title='ADD'></Button>
          </View >
          <View style={styles.button}>
            <Button title='DELETE'></Button>
          </View>
        </View>
        
        
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
    fontWeight: 'bolder',
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

  button: {
    margin: 2,
    paddingTop: 6,
  },
  
});