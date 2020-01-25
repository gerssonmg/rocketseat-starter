import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';


export default function Main({ navigation }) {

    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get(`/products?page=${page}`);
            const { docs, ...info } = response.data;
            setProducts([...products, ...docs]);
            setProductInfo(info);
        }
        loadProducts();
    }, [page]);

    renderItem = ({ item }) => (
        <View style={styles.productsContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity
                style={styles.productButton}
                onPress={() => {
                    navigation.navigate('Product', { product: item })
                }}
            >
                <Text style={styles.productButtonText}>
                    Acessar
               </Text>
            </TouchableOpacity>
        </View>
    )

    loadMore = () => {
        if (page === productInfo.pages) {
            return;
        } else {
            setPage(page + 1);
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={products}
                keyExtractor={item => item._id}
                renderItem={renderItem}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20,
    },
    productsContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20

    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24,
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold',
    }
})