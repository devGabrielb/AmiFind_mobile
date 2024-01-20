import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { sizes } from "../constants/sizes";
import { DetailsPageNavigationProp } from "../navigation/navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

interface DetailsProps{
    id: number;
    title: string;
    description: string;
    advertisingCategory: string
    date: string,
    location: string
    breed: string
    sex: string,
    imageUrl: string
    postDate: string
}

const DetailsPage = ()=>{
    const { goBack } = useNavigation<DetailsPageNavigationProp>()
    const params = useRoute().params as DetailsProps
    return(
    <>

    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image}source={{uri:params.imageUrl}} />
        
                <View style={styles.share}>
                    <TouchableOpacity>
                        <Ionicons name="share-social-outline" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
        
                <View style={styles.goBack}>
                    <TouchableOpacity onPress={goBack}>
                        <Ionicons style={styles.goBackIcon} name="arrow-back-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
        
        </View>
        <View style={styles.contentContainer}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

        <View style={styles.firstLineContainer}>
            <View style={styles.category}>
                <Text style={styles.categoryText}>{params.advertisingCategory}</Text>
            </View>
            <View><Text style={{color:"#ADADAD"}}>{params.postDate}</Text></View>
        </View>

        <View>
                <View style={{marginVertical:15}}>
                    <Text style={{fontFamily: 'Manrope_500Medium', textAlign:"left", fontSize:24}}>{params.title}</Text>
                </View>
            <View style={{marginBottom:20}}>
                <Text style={{fontFamily: 'Manrope_400Regular', textAlign:"left", fontSize:15}}>{params.description}</Text>
            </View>
            <View>
                
                <View style={styles.dataContainer}>
                    <Text style={styles.dataTitle}>Date Lost:</Text>
                    <Text style={styles.dataContent}>{params.date}</Text>
                </View>
                
                
                <View style={styles.dataContainer}>
                    <Text style={styles.dataTitle}>Location:</Text>
                    <Text style={styles.dataContent}>{params.location}</Text>
                </View>
                
                
                <View style={styles.dataContainer}>
                    <Text style={styles.dataTitle}>Breed:</Text>
                    <Text style={styles.dataContent}>{params.breed}</Text>
                </View>
                
                <View style={[styles.dataContainer,{borderBottomWidth:0}]}>
                    <Text style={styles.dataTitle}>Sex:</Text>
                    <Text style={styles.dataContent}>{params.sex}</Text>
                </View>               
                <View style={styles.buttonContainer}>
                    <Ionicons name="call-outline" size={24} color="white" />
                    <Text style={styles.buttonTitle}>Ligar</Text>
                </View>               

            </View>
        </View>

        </ScrollView>
        </View>

    </View>
    </>
    )
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        fontFamily: 'Manrope_400Regular',
    },
    imageContainer:{
        width: sizes.width,
        height: sizes.height * 0.5,
        
    },
    image:{
       width: '100%',
       height: '100%' 
    },
    share:{
        top: 50,
        right:10,
        padding:5,
        borderRadius: 50,
        position:"absolute",
        backgroundColor: "#FEFFFF",
    },
    shareIcon:{
        textAlign:"center"
    },
    goBack:{
        zIndex: 1000000000,
        top: 50,
        left: 10,
        padding: 5,
        borderRadius: 50,
        position:"absolute",
        backgroundColor: "#FEFFFF",
        
    },
    goBackIcon:{
        textAlign:"center"
    },
    contentContainer:{
        overflow:"hidden",
        paddingTop: 20,
        paddingHorizontal: 20,
        position: "absolute",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "white",
        height: 500,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9
    },
    firstLineContainer:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    category:{
        backgroundColor:'yellow',
        borderRadius: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 9,
        paddingVertical: 5
    },
    categoryText:{
        textAlign: 'center',
        fontFamily: 'Manrope_500Medium',
        fontWeight: "bold",
        color: "#121212"
    },
    dataContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop: 20,
        borderColor:"#F1F2F6",
        borderBottomWidth: 1,
        fontFamily: 'Manrope_400Regular',
    },
    dataTitle:{
        paddingBottom: 10,
        fontSize: 14,
        color: "grey"
},
    dataContent:{
        marginTop: 20,
        paddingBottom: 10,
        fontSize: 14,
        color:"black",
        fontFamily: 'Manrope_500Medium',

    },
    buttonContainer:{
        backgroundColor:"black",
        marginTop: 10,
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonTitle:{
        color: "white",
        marginLeft: 5,
        fontFamily: 'Manrope_500Medium',
        
    }

    

});
export default DetailsPage;
