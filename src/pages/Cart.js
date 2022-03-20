import React from 'react'
import CartItem from '../components/CartItem'

import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';


// const PRODUCTS = [
//     { image: "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31.fit_lim.size_1050x.jpg", name: "Macbook Pro", price: "$1599" },
//     { image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg", name: "Iphone 12", price: "$789" },
//     { image: "https://i.rtings.com/assets/products/wZBvFZvM/keychron-k2-version-2/design-medium.jpg", name: "Keychron k2", price: "$359" },
//     { image: "https://photos5.appleinsider.com/gallery/31493-52775-dell-UP3218K-8k-monitor-xl.jpg", name: "Dell p32 Monitor", price: "$239" },
//     { image: "https://images.samsung.com/in/smartphones/galaxy-s21/buy/s21_family_kv_mo_img.jpg", name: "samsung s10", price: "$699" },
//     { image: "https://www.zdnet.com/a/img/resize/779cf562c906bbc41229173884c9eab696d0e07e/2022/02/09/05cd63e5-bb23-40e9-a08c-6cdb3334a077/best-samsung-phone-gettyimages-1238324602.jpg?width=1200&fit=bounds&auto=webp", name: "Note 10+", price: "$889" },
// ]

export default function Cart({ navigation }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartReducer.selectedItems)
    console.log(items.totalPrice)
    const handleCheckout = () => {
        if (items.items.length === 0) {
            return alert("There are no items in your cart!")
        }
        navigation.navigate("Payment")
    }

    const handleRemoveItem = (index) => {
        console.log(index);
        console.log(items.items[index].price)
        dispatch({
            type: "DELETE_FROM_CART",
            payload: {
                index: index,
                price: items.items[index].price
            }
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Shopping Cart</Text>
            </View>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 5 }} contentContainerStyle={styles.scrollview}>
                {items.items.length === 0 ?
                    <View style={styles.container2}>
                        <Text>There are no items in your cart!</Text>
                    </View>
                    :
                    items.items.map((product, index) => {
                        return <CartItem key={index} image={product.image} productName={product.name} productPrice={product.price} handleRemoveItem={() => handleRemoveItem(index)} />
                    })}
            </ScrollView>
            <TouchableOpacity onPress={handleCheckout} style={styles.checkout}>
                <Text style={{ color: "white", fontWeight: "800", fontSize: 16, width: "100%", textAlign: "center" }}>Checkout</Text>
            </TouchableOpacity>
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
        width: "100%"
    },
    checkout: {
        backgroundColor: Colors.NAVY,
        height: 50,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold",
        elevation: 24,
        borderRadius: 25,
        position: "absolute",
        bottom: 10
    },
    container2: {
        flex: 1,
        marginTop: "50%",
        justifyContent: "center",
        alignItems: "center"
    }
})
