import { View, Text, StyleSheet } from 'react-native';


const Home = () => {
  return (
    <View style={styles.container}>
        <Text style = {styles.text}>Home Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
  }  
});

export default Home;
