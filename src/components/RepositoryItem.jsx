import { View, StyleSheet, Image } from 'react-native'

import theme from '../theme';
import Text from './Text'
import formatInThousands from '../utils/formatInThousands';


const CountItem = ({ label, count }) => {
    return (
      <View style={styles.countItem}>
        <Text style={styles.countItemCount} fontWeight="bold">
          {formatInThousands(count)}
        </Text>
        <Text color="textSecondary">{label}</Text>
      </View>
    );
  };

const RepositoryItem = ({ listItem }) => {
    
    const Item = () => (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{uri: listItem.ownerAvatarUrl}} />
                </View>
                <View style={styles.contentContainer}>
                    <Text 
                    style={styles.nameText} 
                    fontWeight="bold" 
                    fontSize="subheading" 
                    numberOfLines={1}
                    >
                        {listItem.fullName}
                    </Text>
                    <Text style={styles.descriptionText} color="textSecondary">{listItem.description}</Text>
                    {listItem.language ? (
                        <View style={styles.languageContainer}>
                            <Text style={styles.languageText}>{listItem.language}</Text>
                        </View>
                ) : null}
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <CountItem count={listItem.stargazersCount} label="Stars" />
                <CountItem count={listItem.forksCount} label="Forks" />
                <CountItem count={listItem.reviewCount} label="Reviews" />
                <CountItem count={listItem.ratingAverage} label="Rating" />
            </View>
        </View>
      );

    return(
        <Item />
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
      },
      topContainer: {
        flexDirection: 'row',
        marginBottom: 15,
      },
      bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      avatarContainer: {
        flexGrow: 0,
        marginRight: 20,
      },
      contentContainer: {
        flexGrow: 1,
        flexShrink: 1,
      },
      nameText: {
        marginBottom: 5,
      },
      descriptionText: {
        flexGrow: 1,
      },
      avatar: {
        width: 45,
        height: 45,
        borderRadius: theme.roundness,
      },
      countItem: {
        flexGrow: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
      },
      countItemCount: {
        marginBottom: 5,
      },
      languageContainer: {
        marginTop: 10,
        flexDirection: 'row',
      },
      languageText: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        borderRadius: theme.roundness,
        flexGrow: 0,
        paddingVertical: 3,
        paddingHorizontal: 6,
      },
  });
export default RepositoryItem