import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Modal } from 'react-native';
import { Colors } from "../themes/colors";
import { useDispatch, useSelector } from 'react-redux';

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
            <ScrollView style={styles.scrollview}>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
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
        flex: 1,
        width: "100%",
        paddingHorizontal: 5
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
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
