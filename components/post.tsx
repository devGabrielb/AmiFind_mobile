import { Text,Image, StyleSheet, View, TouchableOpacity } from "react-native";
import PostMedia from "./postMedia";
import PostContent from "./postContent";
import { sizes } from "../constants/sizes";
import { useNavigation } from "@react-navigation/native";
import { DetailsPageNavigationProp} from "../navigation/navigation";

const POST_HEIGHT = sizes.height *0.22;
const POST_WIDTH = sizes.width * 0.9;


const Post =()=>{
    const navigator = useNavigation<DetailsPageNavigationProp>()
    return(
                <TouchableOpacity
                onPress={()=>navigator.navigate("DetailsPage",
                {
                    title:"mikasa loka de balinha do dono",
                    description:"Desaparecida no villa real pois o dono saiu pra curtir e deixou a janela aberta. a coitada não sabe ficar sozinha, qualquer novidade ganha balinha de graça",
                    advertisingCategory:"Perdida",
                    breed:"pe duro",
                    date:"January 19, 10:22",
                    postDate:"January 19, 11:30",
                    id: 1,
                    location:"Villa real",
                    sex:"Female",
                    imageUrl:"https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
                }
                )}
                >                
                    <View style={styles.card_container}>
                        <PostMedia />
                        <PostContent />
                    </View>
                </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card_container:{
        marginTop: 20,
        flex: 1,
        width: POST_WIDTH,
        height: POST_HEIGHT,
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#121212",
        shadowRadius: 5,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }});

export default Post;