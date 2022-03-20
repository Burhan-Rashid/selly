import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/AntDesign';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';

const PRODUCTS = [
    { image: "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31.fit_lim.size_1050x.jpg", name: "Macbook Pro", price: 1599 },
    { image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg", name: "Iphone 12", price: 789 },
    { image: "https://i.rtings.com/assets/products/wZBvFZvM/keychron-k2-version-2/design-medium.jpg", name: "Keychron k2", price: 359 },
    { image: "https://photos5.appleinsider.com/gallery/31493-52775-dell-UP3218K-8k-monitor-xl.jpg", name: "Dell p32 Monitor", price: 239 },
    { image: "https://images.samsung.com/in/smartphones/galaxy-s21/buy/s21_family_kv_mo_img.jpg", name: "samsung s10", price: 699 },
    { image: "https://www.zdnet.com/a/img/resize/779cf562c906bbc41229173884c9eab696d0e07e/2022/02/09/05cd63e5-bb23-40e9-a08c-6cdb3334a077/best-samsung-phone-gettyimages-1238324602.jpg?width=1200&fit=bounds&auto=webp", name: "Samsung Note 10+", price: 889 },
]

function Products({ navigation }) {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartReducer.selectedItems);
    //console.log(items)
    const handleCart = () => {
        navigation.navigate("Cart")
    }

    const handleProduct = (index) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                item: PRODUCTS[index],
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Home</Text>
                <TouchableOpacity onPress={handleCart}>
                    <View style={styles.cartNumber}>
                        <Text>
                            {items.items.length}
                        </Text>
                    </View>
                    <Icon name="shoppingcart" size={41} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, width: "100%", paddingHorizontal: 5 }} contentContainerStyle={styles.scrollview}>
                {PRODUCTS.map((product, index) => {
                    return <Product key={index} image={product.image} productName={product.name} productPrice={product.price} handleProduct={() => handleProduct(index)} />
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
    cartNumber: {
        height: 25,
        width: 25,
        //backgroundColor: Colors.DEEP_TEAL,
        borderRadius: 12.5,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 4,
        right: 5
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
