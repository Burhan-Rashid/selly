import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import { Gradients, Colors } from "../themes/colors";
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        if (email === "" || password === "") {
            return alert("Please enter your email and password first!")
        }
        if (email.trim().toLowerCase() === "test@gmail.com" && password.trim() === "123456") {
            navigation.navigate("Products")
        } else {
            return alert("Please enter a valid email and password!")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                start={[1, 0]}
                end={[0, 1]}
                colors={[Gradients.DARK.Start, Gradients.DARK.End]}>
                <Text style={styles.Heading}>Login</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={Colors.DARK_GREY}
                    textContentType="emailAddress"
                    style={styles.Input}
                    autoCompleteType={"email"}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    value={email}
                    onChangeText={(t) => { setEmail(t) }} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={Colors.DARK_GREY}
                    textContentType="password"
                    style={styles.Input}
                    autoCompleteType={"password"}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(t) => { setPassword(t) }} />
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Input: {
        height: 40,
        color: Colors.WHITE,
        fontSize: 20,
        borderColor: Colors.WHITE,
        borderBottomWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        width: "100%"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    button: {
        backgroundColor: Colors.DEEP_TEAL,
        height: 50,
        width: "40%",
        marginTop: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
    },
    Heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.WHITE,
        width: "100%",
        textAlign: "center",
    },
    gradient: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Login
