import React from 'react'
import CartItem from '../components/CartItem'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from "../themes/colors";
import { useDispatch, useSelector } from 'react-redux';

export default function Cart({ navigation }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartReducer.selectedItems)

    const handleCheckout = () => {
        if (items.items.length === 0) {
            return alert("There are no items in your cart!")
        }
        navigation.navigate("Payment")
    }

    const handleRemoveItem = (index) => {
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
            <ScrollView style={styles.scrollView}>
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
                <Text style={styles.checkoutText}>Checkout</Text>
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
    scrollView: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 10,
        height: 60,
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
    },
    checkoutText: {
        color: "white",
        fontWeight: "800",
        fontSize: 16,
        width: "100%",
        textAlign: "center"
    }
})
