import React from 'react'
import CartItem from '../components/CartItem'

import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, ScrollView, Modal } from 'react-native';
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
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
    { image: "https://picsum.photos/200/300", name: "Lenovo p32-30 monitor", price: "$789" },
]

export default function Confirmation() {

    const [showModal, setShowModal] = React.useState(false)

    React.useEffect(() => {
        let timerId = setTimeout(() => {
            setShowModal(true);
        }, 5000)
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Order Confirmation</Text>
            </View>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 5 }} contentContainerStyle={styles.scrollview}>
                {PRODUCTS.map((product, index) => {
                    return <View key={index} style={styles.productContainer} >
                        <Text>{product.name}</Text>
                        <Text>{product.price}</Text>
                    </View>
                })}
            </ScrollView>
            <View style={styles.details}>
                <Text>
                    Total Amount Paid: $1909
                </Text>
                <Text>
                    Order Id: 178542369452
                </Text>
            </View>
            {/* <TouchableOpacity style={styles.checkout}>
                <Text style={{ color: "white", fontWeight: "800", fontSize: 16, width: "100%", textAlign: "center" }}>Go To Home</Text>
            </TouchableOpacity> */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                    setShowModal(!showModal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Thanks For Shopping</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setShowModal(!showModal)}
                        >
                            <Text style={styles.textStyle}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: "90%"
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingTop: 20,
    },
    scrollview: {


    },
    details: {
        flex: 1
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
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
    }
})
