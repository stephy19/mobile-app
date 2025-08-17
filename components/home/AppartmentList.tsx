import { View, Text, StyleSheet, ImageBackground,FlatList } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import houselist from '@/assets/datas-appartement.json';
import AppartmentItem from '@/components/home/AppartmentItem';

function AppartmentList() {


  return (
    <View>
              <FlatList
              
        contentContainerStyle={styles.flatlistcontainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={houselist}
        keyExtractor={(item) => item.id.toString()} // ou une autre propriété unique
        renderItem={({ item }) => {
            return (
                <AppartmentItem item={item} />
            )
        }}
      />
    </View>
  )
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
export default AppartmentList