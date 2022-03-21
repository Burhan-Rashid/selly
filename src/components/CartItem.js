import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from "../themes/colors";
import Icon from 'react-native-vector-icons/AntDesign';

const CartItem = ({ productName, productPrice, image, handleRemoveItem }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} alt="product..." style={styles.image} />
            <View style={styles.description}>
                <Text style={styles.text}>{productName}</Text>
                <Text style={styles.text}>Price: ${productPrice}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRemoveItem}>
                <Icon name="delete" size={30} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "30%"
    },
    container: {
        width: "100%",
        height: 100,
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.LIGHT_TEAL,
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 5,
    },
    description: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 10,
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        flex: 0.3,
        backgroundColor: Colors.DEEP_TEAL,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
})
export default CartItem
