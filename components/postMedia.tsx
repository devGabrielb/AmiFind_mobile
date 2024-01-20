import {Image, StyleSheet, View } from "react-native"

const PostMedia = () =>{
    return (<View style={styles.container}>
    <Image style={styles.image} source={{uri: "https://images.dog.ceo/breeds/terrier-russell/iguet3.jpg"}}/>
    </View>)
}

export default PostMedia;

const styles = StyleSheet.create({

    container:{
        flex: 0.8,
        padding: 8,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width: '95%',
        height:  '90%',
        borderRadius: 10

    }

})