import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, Picker } from 'react-native';
import { GlobalStyles } from "../themes/styles";
import { hp } from "../themes/sizes";
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';
import MonthPicker from 'react-native-month-year-picker';

function Payment() {
    const [cardType, setCardType] = React.useState("Debit Card");
    const [number, setNumber] = React.useState("");
    const [expiry, setExpiry] = React.useState("");
    const [cvv, setCvv] = React.useState("");

    const handleLogin = () => {
        console.log(cardType, number, expiry, cvv)
    }
    const handleExpiry = (e) => {
        setExpiry(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Payment</Text>
            </View>

            <Picker
                selectedValue={cardType}
                style={{ height: 40, width: "100%", marginTop: 10 }}
                onValueChange={(itemValue, itemIndex) => setCardType(itemValue)}
            >
                <Picker.Item label="Debit Card" value="Debit Card" />
                <Picker.Item label="Credit Card" value="Credit Card" />
            </Picker>
            <TextInput
                placeholder="Card Number"
                placeholderTextColor={Colors.DARK_GREY}
                style={styles.Input}
                keyboardType='numeric'
                value={number}
                onChangeText={(t) => { setNumber(t) }} />
            <View style={styles.cvvContainer}>
                <TextInput
                    placeholder="CVV"
                    placeholderTextColor={Colors.DARK_GREY}
                    textContentType="password"
                    style={styles.cvv}
                    keyboardType='numeric'
                    autoCompleteType={"password"}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    value={cvv}
                    onChangeText={(t) => { setCvv(t) }} />
                <TextInput
                    placeholder="Expiry Date (MMYY)"
                    placeholderTextColor={Colors.DARK_GREY}
                    style={styles.expiry}
                    keyboardType='numeric'
                    autoCapitalize={"none"}
                    value={expiry}
                    maxLength={4}
                    onChangeText={handleExpiry} />

            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={[styles.text, { textAlign: "center" }]}>
                    Pay Now
                </Text>
            </TouchableOpacity>

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    Input: {
        height: 40,
        fontSize: 18,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        width: "100%"

    }, cvv: {
        height: 40,
        fontSize: 18,

        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        width: "40%"


    },
    cvvContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    expiry: {
        height: 40,
        fontSize: 18,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        width: "58%",
        marginLeft: 5
    },
    button2: {
        width: "60%",
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,

    },
    button: {
        backgroundColor: Colors.DEEP_TEAL,
        height: 40,
        width: "100%",
        marginTop: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        width: "100%"
    },
    Heading: {
        fontSize: 24,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",

    },
    gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 10,
        height: 60,
        marginTop: 20,
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
});

export default Payment
