import { View, Text, StyleSheet, ScrollView,ImageBackground,FlatList } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import houselist from '@/assets/datas-appartement.json';
import AppartmentList from "@/components/home/AppartmentList";
import Users from "@/components/home/Users";
import PostList  from "@/components/Post/PostList";
export default function Index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.appcontainer}>

      <View style={styles.container}>
        <Text style={styles.text}>Découvrir</Text>
        <AntDesign name="search1" size={30} color="black" />
      </View>

   <View >
    <AppartmentList/>
    <Users/>
    <PostList/>
   </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    flatlistcontainer:{
        gap: 20 , 
        marginLeft:20, 
        paddingRight:20
    },
    houselocation:{
        fontSize:25,
    },
    mt1:{
        marginTop: 10,
    },
  appcontainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom:30,
    marginTop: 50,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image : {
    height: 200,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 15,
  },
  block :{
    width: 320,
    gap: 10,
  },
  tag:{
    padding: 5,
    backgroundColor: 'purple',
    opacity: 0.8,
    borderRadius: 30,
  },
  tagtext:{
    color: 'white',
   padding: 5,
  },
  rowbetween:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tagcontainer:{
    backgroundColor:'#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius:5,
    padding:5,
  },
  tagtest:{
    color: 'black',
    fontSize: 20,
    
  }
});
