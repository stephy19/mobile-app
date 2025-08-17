import { View , ScrollView ,Text,StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";

export default function index() {
  return (
    // <View style={styles.container}>
    //     <Text>hello</Text>
    //     <Text>ceci est un : </Text>
    //     <Text>test</Text>

    //     <Link style={styles.link} href={"/accueil/page"}>
    //     <Text>page d'accueil</Text>
    //     </Link>

    // </View>
    <Redirect href={"/accueil/page"} />

  )
}

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         backgroundColor : '#fff',
//         alignItems : 'center',
//         justifyContent : 'center',
//     },

//     link :{
//         backgroundColor : 'green',
//         padding : 10,
//     }
// })