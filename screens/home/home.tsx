import { StyleSheet, Text, View } from "react-native";
import AdvertisingList from "./components/advertisingList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderSearch from "./components/headerSearch";

const HomeScreen = ()=>{

        return(
        <View style={[styles.container]}>
          <HeaderSearch />
          <AdvertisingList />
        </View>);
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F2F6"
  }
  });

export default HomeScreen