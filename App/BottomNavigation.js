import React, { useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, BackHandler, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './screens/home';
import Pay from './screens/pay';
import Genie from './screens/genie';


const BottomNavigation = () => {
  const [activePage, setActivePage] = useState('Pay');
  
  useEffect(() => {
    const backAction = () => {
      if (activePage !== 'Home') {
        setActivePage('Home');
        return true;
      } 
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'Pay':
        return <Pay />;
      case 'Genie':
        return <Genie />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.content}>{renderPage()}</View>
        {
          activePage === 'Home' ? (
            <ImageBackground source={require('./assets/background/navBackground.png')} style={styles.navContainer}>
              <TouchableOpacity onPress={() => setActivePage('Genie')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/genie.png')}
                      style={styles.icon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>ginie</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Home')} >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.selectedNavButton}>
                  <View style={styles.SelectedNavStroke}>
                    <Image
                      source={ require('./assets/vectors/home.png')}
                      style={styles.selectedIcon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.selectedNavText}>home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Pay')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/pay.png')}
                      style={[styles.icon, {width: 20, height: 20}]}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>yolo pay</Text>
              </TouchableOpacity>
            </ImageBackground>
          ): activePage === 'Pay' ? (
            <ImageBackground source={require('./assets/background/navBackground.png')} style={styles.navContainer}>
            <TouchableOpacity onPress={() => setActivePage('Home')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/home.png')}
                      style={styles.icon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Pay')} >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.selectedNavButton}>
                  <View style={styles.SelectedNavStroke}>
                    <Image
                      source={ require('./assets/vectors/pay.png')}
                      style={[styles.selectedIcon, {width: 20, height: 20}]}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.selectedNavText}>yolo pay</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Genie')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/genie.png')}
                      style={styles.icon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>ginie</Text>
              </TouchableOpacity>
            </ImageBackground>
          ): (
            <ImageBackground source={require('./assets/background/navBackground.png')} style={styles.navContainer}>
              <TouchableOpacity onPress={() => setActivePage('Pay')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/pay.png')}
                      style={[styles.icon, {width: 20, height: 20}]}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>yolo pay</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Genie')} >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.selectedNavButton}>
                  <View style={styles.SelectedNavStroke}>
                    <Image
                      source={ require('./assets/vectors/genie.png')}
                      style={styles.selectedIcon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.selectedNavText}>ginie</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActivePage('Home')} >
                <LinearGradient
                  colors={['#808080', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.navButton}>
                  <View style={styles.navStroke}>
                    <Image
                      source={ require('./assets/vectors/home.png')}
                      style={styles.icon}
                    />
                  </View>
                </LinearGradient>
                <Text style={styles.navText}>home</Text>
              </TouchableOpacity>
            </ImageBackground>
          )

        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  content: {
    flex: 1,
  },
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 108,
    flexDirection: 'row',
    resizeMode: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 66,
    backgroundColor: '#0D0D0DCC',
    alignItems: 'center',
  },
  navButton: {
    width: 41,
    height: 41,
    borderRadius: 20,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
  },
  navStroke: {
    width: 37,
    height: 38,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  selectedNavButton: {
    width: 51,
    height: 51,
    borderRadius: 30,
    justifyContent: 'center',
  },
  SelectedNavStroke: {
    width: 47,
    height: 48,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0.20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  selectedIcon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  navText: {
    color: '#FFFFFF',
    width: 51,
    fontSize: 12,
    fontFamily: 'Poppins',
    opacity: 0.1,
    fontWeight: 500,
    textAlign: 'center',
  },
  selectedNavText: {
    color: '#FFFFFF',
    width: 51,
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 500,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default BottomNavigation;
