import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import SearchInput from "../../components/searchInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { sizes } from "../../constants/sizes";
import FilterModal from "../../components/filter";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
    

const SearchScreen = ()=>{
    const [modal, setModal] = useState(false);
    return (
    <SafeAreaView style={styles.container}>
        
            <SearchInput autoFocus={true}>
                        <View style={[styles.filter]}>
            <TouchableOpacity onPress={()=>{
                Keyboard.dismiss()
                setModal(true)
            }}>
                <Ionicons name="filter-outline" size={24} />
            </TouchableOpacity>
        </View>
            </SearchInput>
                <FilterModal show={modal} close={() => {setModal(false)}}/>
    </SafeAreaView>)
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: sizes.width * 0.05

    },
        filter:{
        position: 'absolute',
        top: 37,
        right: 10,
        zIndex: 1,        
    },

})