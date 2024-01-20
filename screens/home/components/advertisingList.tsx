import { View,FlatList, StyleSheet } from "react-native";
import Post from "../../../components/post";


const source = [
    {
        id:"",
        image:"",
        title:"",
        category:"",
        date:""
    }
]
const AdvertisingList = () =>{
    return (<View style={styles.container }>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={source}
        keyExtractor={item => item.id}
        renderItem= {({index, item}) =>{
            return (
                <View>
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                   <Post />
                </View>
            );
        }}
        >

        </FlatList>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        overflow:'hidden'
    },
})

export default AdvertisingList;