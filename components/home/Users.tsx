import usersList  from '@/assets/datas-user.json'
import { View, FlatList , Text, StyleSheet } from 'react-native'
import Useritem from '@/components/home/Useritem'
function Users() {
  return (
    <View style={{marginLeft :15, gap:20, marginTop:30}}>
        <Text style={styles.title}>Nos meilleurs utilisateurs</Text>
        <FlatList data={usersList} 
        contentContainerStyle={styles.root}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return(
             <Useritem user={item}/>
            )
        }}

        />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'bold',
    },

})
export default Users