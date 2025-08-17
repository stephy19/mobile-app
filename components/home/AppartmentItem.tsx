
import { View, Text, StyleSheet, ImageBackground,FlatList, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import houselist from '@/assets/datas-appartement.json';
import {router} from 'expo-router'
const AppartmentItem =  ({item}) => {

    const handleTouchImage =() =>{
        router.navigate({pathname:'/houses/[id]',
            params:{id:item.id}
        })
    }
    return (
      <TouchableOpacity onPress={handleTouchImage}>
           <View style={styles.block}>
                        <ImageBackground 
                        resizeMode="cover" 
                         source={{ uri: item.cover_image_url }} 
                         style={styles.image}>
        
                       <View style={{flexDirection:"row"}}>
                         <View style={styles.tag}>
                            <Text style={styles.tagtext}>Enregistrer Nouvellement</Text>
                        </View>
                       </View>
        
                        </ImageBackground>
        
                        <View >
                            <View style={styles.rowbetween}>
                                <Text style={styles.houselocation}>{item.location_city}</Text>
                                <View style={styles.tagcontainer}>
                                    <Text style={styles.tagtest}>5.0</Text>
                                    <AntDesign name="star" size={20} color="orange" />
                                </View>
                            </View>

                               <View style={[styles.rowbetween, styles.mt1]}>
                                <Text style={{fontSize:20}}>{item.month_price} $/ mois</Text>
                                <View style={styles.tagcontainer}>
                                    <AntDesign name="user" size={20} color="orange" />
                                    <Text style={styles.tagtest}>visites</Text>
                                </View>
                            </View>
                        </View>

                    </View>
        </TouchableOpacity>
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
export default AppartmentItem;