import {View, Text, Pressable , StyleSheet} from "react-native";

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My first React Native Screen</Text>
            <Text>Built with Expo + React Native.</Text>
            <Pressable onPress={()=> console.log("Hello")}>
                <Text>Tap me</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:12
    },
})
