import { View, StyleSheet, Image } from 'react-native'
import Text from './Text'

const RepositoryItem = ({ listItem }) => {
    
    const Item = () => (
        
        <View style={styles.item}>
          <View style={[styles.row]}>
            <View>
                <Image 
                style={styles.image} 
                source={{uri: listItem.ownerAvatarUrl}}>
                </Image>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{listItem.fullName}</Text>
                    <Text>{listItem.description}</Text>
                </View>
            </View>
            <View>
            </View>
          </View>
           <View style={[styles.row]}>
            <View style={styles.lang}>
                <Text backgroundColor="secondary" style={styles.langBtn}>{listItem.language}</Text>
            </View>
           </View>
            <View style={[ styles.row]}>
            <View style={styles.counts}>
                <Text style={styles.bold}>
                    {listItem.stargazersCount >= 1000 ?
                    (listItem.stargazersCount / 1000).toFixed(1) + 'k' :
                    listItem.stargazersCount 
                }
                </Text>
                <Text style={styles.gray}>Stars</Text>
            </View>
            <View style={[styles.row]}>
                <View style={styles.counts}>
                    <Text style={styles.bold}>
                    {listItem.forksCount >= 1000 ?
                    (listItem.forksCount / 1000).toFixed(1) + 'k' :
                    listItem.forksCount
                    }</Text>
                    <Text style={styles.gray}>Forks</Text>
                </View> 
            </View>
            <View style={[ styles.row]}>
                <View style={styles.counts}>
                    <Text style={styles.bold}>{listItem.reviewCount}</Text>
                    <Text style={styles.gray}>Reviews</Text>
                </View>
            </View>
            <View style={[ styles.row]}>
                <View style={styles.counts}>
                    <Text style={styles.bold}>{listItem.ratingAverage}</Text>
                    <Text style={styles.gray}>Rating</Text>
                </View>
            </View>
          </View>
        </View>
      );

    return(
        <Item />
    )

}
const styles = StyleSheet.create({
    item: {
      backgroundColor:'white',  
      paddingHorizontal: 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'baseline',
    },
    row: {
        padding: 5,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    counts: {
        display: 'flex',
        flexDirection: 'column',
    },
    lang: {
        margin: 10,
        borderRadius: 40,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
    },
    langBtn: {
        padding: 5
    },
    bold: {
        fontWeight: 'bold'
    },
    gray: {
        color: 'gray'
    },
    image: {
      width: 50,
      height: 50,
      padding: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
  });
export default RepositoryItem