import  {View, Text , StyleSheet , Image,TouchableOpacity , Platform }  from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


function Useritem({user}) {
  return (
    <TouchableOpacity style={styles.root}>
      <Image style={styles.userimage} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mcdA_uoJahxn3PQ-IC9WROV-GF2wuTl2FQ&s'}}/>
   
   <View style={styles.startscontainer}>
  <AntDesign name="star" size={20} color="orange" />
  <AntDesign name="star" size={20} color="orange" />
  <AntDesign name="star" size={20} color="orange" />
  <AntDesign name="star" size={20} color="white" />
  <AntDesign name="star" size={20} color="white" />
   </View>

   <View>
    <Text style={styles.username}>{user.lastname}  {user.firtsname}</Text>
   </View>

<View style={styles.last}>
    <Text style={styles.total}>+40</Text>
    <AntDesign name='arrowright'  size={20} color={"white"}   />
</View>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
 root:{
    backgroundColor:'purple',
    width:170,
    padding:10,
    borderRadius:15,
    margin:10,
 },
 userimage:{
    width:50,
    height:50,
    objectFit:"cover",
    borderRadius:15,
 },
 startscontainer:{
    flexDirection:"row",
    alignItems:"center",
    gap:2,
    margin:10,
 },
 start:{
    width:20,
    height:20,
    marginRight:5,
    borderRadius:10,
    backgroundColor:"#000",
    borderWidth:1,
    borderColor:"#000",

 },
 username:{
color:"white",
fontSize:20,
 },
 last:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10,
 },
 total:{
    fontSize:16,
    color:"white",
    fontWeight:"bold"
 }

});
export default Useritem