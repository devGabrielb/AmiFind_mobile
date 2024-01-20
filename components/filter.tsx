import React, { useEffect, useState } from "react";
import { Animated, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
type filterProps ={
    show: boolean
    close: ()=> void
}

const CategoryButtons = [
    {
        "id": 1,
        "name":"Encontrado",
        "value":"encontrado",
        "isSelected": false
    },
        {
        "id": 2,
        "name":"Perdido",
        "value":"perdido",
        "isSelected": false
        
    },
        {
        "id": 3,
        "name":"Adoção",
        "value":"adoção",
        "isSelected": false

    }
];

const { height, width } = Dimensions.get('window')

const FilterModal:React.FC<filterProps> = ({ show, close }) => {
    const insets = useSafeAreaInsets()
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100,useNativeDriver:true }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
    ]).start()
  }

 useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show]) 
  
  return( 
 <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
            
      <Animated.View 
        style={[styles.modal, {
            paddingTop:insets.top,
            transform: [
                { translateY: state.modal }
          ]
        }]}
        >
        <View style={styles.modalHeader}>

            <View style={styles.closeIcon}>
                <TouchableOpacity onPress={close}>
                <Ionicons name="close-outline" size={26} color="black"/> 
                </TouchableOpacity>
            </View>
            <Text style={styles.modalTitle}>Advanced search</Text>
            <View></View>    
        </View>
        
        <View>
            
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Category</Text>
                <View style={styles.categoryButtons}>
                {CategoryButtons.map((category, index)=>(
                    <TouchableOpacity key={category.id}style={styles.categoryButton}>
                    <View>
                        <Text>{category.name}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        </View>
      </Animated.View>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    zIndex:2
  },
  modal: {
    width: '100%',
    height: height ,
    backgroundColor: '#F1F2F6',
    paddingLeft: 10,
    paddingRight: 20,
    
  },
  
  text: {
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  modalHeader:{
    marginLeft: 10,
      marginTop: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  closeIcon:{
    borderRadius: 50,
    backgroundColor: "white",
  },
  modalTitle:{
    fontFamily: 'Manrope_500Medium',
    fontSize: 20,
    alignItems: 'center'
 },
 categoryContainer:{
    paddingTop: 30    

 },
 categoryTitle:{
    marginLeft: 10,
    marginBottom:8,
    color: "gray",
    fontFamily: 'Manrope_400Regular',


 },
 categoryButtons:{
    flex:1,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
 },

 categoryButton:{
    marginLeft: 10,
    
    paddingHorizontal: 10,
    width: '30%',
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    borderRadius: 10
 }
})

export default FilterModal;