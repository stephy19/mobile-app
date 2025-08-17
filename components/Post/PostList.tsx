import { View , Text , StyleSheet} from 'react-native'
import postlistdata from '@/assets/datas-post.json'
import PostItem from '@/components/Post/PostItem'
export default function PostList() {
  return (
    <View style={styles.root}>
<Text style={styles.title}>Dernières publications</Text>

{postlistdata.map((post)=> {
    return(
       <PostItem key={post.id} postdata={post} />
    )
})}

    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginTop:30,
        marginHorizontal:15,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
    }
});