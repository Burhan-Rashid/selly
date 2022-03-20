import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, Image } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';

const Product = ({ productName, productPrice, image, handleProduct }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} alt="product..." style={styles.image} />
            <View style={styles.description}>
                <Text style={styles.text}>{productName}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.text}>Price:</Text>
                    <Text style={styles.text}>${productPrice}''</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleProduct}>
                <Text style={{ width: "100%", textAlign: "center", fontSize: 16 }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        height: "60%",
        width: "100%"
    },
    container: {
        width: "100%",
        height: 270,
        flex: 1,
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
        marginTop: 10,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        backgroundColor: Colors.DEEP_TEAL,
        width: "100%",
        marginTop: 10,
        //borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
})
export default Product
