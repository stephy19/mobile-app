import  {View , Text , StyleSheet, Pressable , Image} from 'react-native'
import PostActionIcon from '@/components/Post/PostActions'
const PostItem = ({postdata}:any) => {
    const onClick = () => {
        // alert('Post clicked');
    }
  return (
    <Pressable style={styles.root} onPress={onClick} >
      <View>
        <View style={styles.header}>
        <Image style={styles.userImage} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mcdA_uoJahxn3PQ-IC9WROV-GF2wuTl2FQ&s'}}/>
           
        
           <View>
            <Text style={styles.userName}>{postdata.userName}</Text>
           <Text style={styles.postDate}>il ya 5 ans </Text>
           </View>



        </View>

      {postdata.postPicture && (<Image style={styles.postImage} source={{
        uri: postdata.postPicture,
      }} />) }

      <View style={styles.postContainer}>
    <Text style={styles.postText}>{postdata.post}</Text>

<View style={styles.postActionsContainer}>
    <PostActionIcon iconColor={"red"} iconName={"heart"} label="40 réactions" />
    <PostActionIcon iconColor={"gray"}  iconName={"wechat"} label="25 commentaires" />
</View>

      </View>


      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    gap: 15,
    padding: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  userName: {
    fontWeight: "bold",
    fontSize: 20,
  },

  postDate: {
    fontSize: 12,
  },

  postImage: {
    aspectRatio: 4 / 3,
  },

  postContainer: {
    padding: 15,
  },
  postText: {
    lineHeight: 25,
  },

  postActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#f2f2f2",
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 15,
  },
});
export default PostItem
