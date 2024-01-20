import { PixelRatio, StyleSheet, Text, View } from "react-native"

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:any) => size / fontScale;

const PostContent = () =>{
    return (<View style={styles.container}>
        <View style={styles.category}>
            <Text style={styles.categoryText}>Perdido</Text>
        </View>
        <View>
        <Text style={styles.title}>Cachorro macho encontrado !</Text>
        <Text style={styles.location}>cohab Massangano - PE</Text>
        <Text style={styles.date}>January 15, 20:08</Text>
        </View>
    </View>)
}

export default PostContent;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height:     '100%',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title:{
        fontFamily: 'Manrope_500Medium',
        fontSize: getFontSize(19),
        lineHeight: 26
    },
    location:{

        fontFamily: 'Manrope_400Regular',
        fontSize: getFontSize(14),
        color: "grey"
    },
    date:{
        fontFamily: 'Manrope_400Regular',
        fontSize: getFontSize(14),
        color: "grey"

    },

    category:{
        backgroundColor:'yellow',
        borderRadius: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 1
    },
    categoryText:{
        textAlign: 'center',
        fontFamily: 'Manrope_500Medium',
        fontWeight: "bold",
        color: "#121212"
    }
})

