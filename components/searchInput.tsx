import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { sizes, spacing } from "../constants/sizes";
import React, { ReactNode} from "react";

type searchInputProps = {
    style?: StyleProp<ViewStyle>
    autoFocus?: boolean
    children?: ReactNode
}
const SearchInput:React.FC<searchInputProps> =({style, autoFocus,children})=>{
    
    return (
            <View style={[styles.searchContainer, style]}>
                <View style={styles.search}>
                    <Ionicons name="search" size={24} color="#D0D0D0" />
                </View>
                <TextInput placeholder="Search..." autoFocus={autoFocus} style={styles.field}></TextInput>
                {children}
            
            </View>

    );
}
export default SearchInput;

const styles = StyleSheet.create({
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
    search:{
        position: 'absolute',
        top: 37,
        left: 10,
        zIndex: 1, 
    },
    field: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: spacing.xl+ 10,
        paddingRight: spacing.m,
        paddingVertical: spacing.m,
        borderRadius: sizes.radius,
        height: 54,
        flex: 1,
        shadowColor: "black",
        shadowRadius: 4,
        shadowOpacity: 0.1,
        shadowOffset: {
        width: 0,
        height: 2,
        },
  },
})
