import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/AntDesign';

const PRODUCTS = [
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
]

function Products() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Home</Text>
                <TouchableOpacity>
                    <Icon name="shoppingcart" size={40} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 5 }} contentContainerStyle={styles.scrollview}>
                {PRODUCTS.map((product, index) => {
                    return <Product key={index} image={product.image} productName={product.name} productPrice={product.price} />
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingTop: 20,
    },
    scrollview: {


    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 10,
        height: 60,
        // borderWidth: 1,
        // borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        backgroundColor: Colors.SOFT_GREY

    },
    text: {
        fontSize: 18,
        fontWeight: "700",
        width: 100
    }
})

export default Products
