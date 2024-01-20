import { StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sizes, spacing } from "../../../constants/sizes";
import SearchInput from "../../../components/searchInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const HeaderSearch = ()=>{
    const navigator = useNavigation()
    const insets = useSafeAreaInsets()
    return (


        <View style={[styles.container ]}>
            <View style={[styles.content, {marginTop: insets.top}]}>
            <Text style={styles.title}>
                Perdido, encontrado ou adoção ? 
                Vamos achar o seu Pet!
            </Text>
            <TouchableOpacity
            onPress={()=> {
                navigator.navigate('SearchScreen')
            }}
            >
            <SearchInput style={{pointerEvents:'none'}}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        maxHeight:sizes.height * 0.3,
        backgroundColor:"#FFF96B",
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginBottom: 30,
        paddingHorizontal: spacing.l
        
    },
    content:{
        flex:1,
        paddingTop: 20,
        paddingBottom: 20,
      justifyContent:"space-between",
    },
    title:{
        fontFamily: 'Manrope_500Medium',
        fontSize: 22,
        textAlign:"left"
    },
    searchContainer:{
        flexDirection: 'row',
        paddingTop: spacing.l,
    },
})
export default HeaderSearch;