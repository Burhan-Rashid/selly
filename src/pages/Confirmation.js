import React from 'react'
import CartItem from '../components/CartItem'

import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, ScrollView, Modal } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';


const PRODUCTS = [
    { image: "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31.fit_lim.size_1050x.jpg", name: "Macbook Pro", price: "$1599" },
    { image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg", name: "Iphone 12", price: "$789" },
    { image: "https://i.rtings.com/assets/products/wZBvFZvM/keychron-k2-version-2/design-medium.jpg", name: "Keychron k2", price: "$359" },
    { image: "https://photos5.appleinsider.com/gallery/31493-52775-dell-UP3218K-8k-monitor-xl.jpg", name: "Dell p32 Monitor", price: "$239" },
    { image: "https://images.samsung.com/in/smartphones/galaxy-s21/buy/s21_family_kv_mo_img.jpg", name: "samsung s10", price: "$699" },
    { image: "https://www.zdnet.com/a/img/resize/779cf562c906bbc41229173884c9eab696d0e07e/2022/02/09/05cd63e5-bb23-40e9-a08c-6cdb3334a077/best-samsung-phone-gettyimages-1238324602.jpg?width=1200&fit=bounds&auto=webp", name: "Note 10+", price: "$889" },
]

export default function Confirmation({ navigation }) {

    const items = useSelector((state) => state.cartReducer.selectedItems)
    const dispatch = useDispatch();

    const [showModal, setShowModal] = React.useState(false)

    React.useEffect(() => {
        let timerId = setTimeout(() => {
            setShowModal(true);
        }, 5000)
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    const handleModal = () => {
        setShowModal(!showModal);
        dispatch({
            type: "EMPTY_CART",
        })
        navigation.navigate("Products")
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Order Confirmation</Text>
            </View>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 5 }} contentContainerStyle={styles.scrollview}>
                {items.items.map((product, index) => {
                    return <View key={index} style={styles.productContainer} >
                        <Text>{product.name}</Text>
                        <Text>${product.price}</Text>
                    </View>
                })}

                <View style={styles.details}>
                    <View style={styles.bottomContainer}>
                        <Text>
                            Total Amount Paid:
                        </Text>
                        <Text>
                            ${items.totalPrice}
                        </Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text>
                            Order Id:
                        </Text>
                        <Text>
                            178542369452
                        </Text>
                    </View>
                </View>
            </ScrollView>

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
                            onPress={handleModal}
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
        flex: 1,
        borderTopWidth: 1,
        marginTop: 10
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
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
