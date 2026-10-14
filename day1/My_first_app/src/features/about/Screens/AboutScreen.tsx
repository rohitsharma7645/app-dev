import { View, Text, StyleSheet, Pressable } from "react-native";

export default function AboutScreen() {
    return (
        <View style={style.container}>
            <View style={style.card}>
                <Text style={style.title}>Course 1</Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eos?
                </Text>
                <Pressable onPress={() => console.log("Card1 clicked")}>
                    <Text style={style.btn}>See more</Text>
                </Pressable>
            </View>

            <View style={style.card}>
                <Text style={style.title}>Course 2</Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eos?
                </Text>
                <Pressable onPress={() => console.log("Card2 clicked")}>
                    <Text style={style.btn}>See more</Text>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        gap:8
    },
    card: {
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 5,
        padding: 8
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    btn: {
        color: "blue",
    },
});
