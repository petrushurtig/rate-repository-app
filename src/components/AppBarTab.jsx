import { Text, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    padding: 20
  },
  tabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
  // ...
});

const tabs = [
     {
      name: 'Repositories',
      url: '/'
     },
     {
      name: 'Sign In',
      url: '/signin'
     },
]


const AppBarTab = () => {

  return (
    <>
        {tabs.map((item) => {
          return(
              <Link style={styles.tab} key={item.name} to={item.url}>
                <Text style={styles.tabText}>{item.name}</Text>
              </Link>
            )
        })}
    </>
    
  )
};

export default AppBarTab;