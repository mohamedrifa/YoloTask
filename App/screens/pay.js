import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { faker } from "@faker-js/faker";


const Pay = () => {
  const [paymentMode, setPaymentMode] = useState('card');

  const [frozen, setFrozen] = useState(true);

  const toggleFreeze = () => {
    if(frozen) {
      setFrozen(!frozen);
      fadeOut();
    } else {
      setVisible(true);
      setFrozen(!frozen);
      fadeIn();
    }
  };
  const expiryDate = faker.date.future().toLocaleDateString('en-GB', { month: '2-digit', year: '2-digit' });
  const cardNumber = faker.finance.creditCardNumber('################');
  const [cvvVisible, setCvvVisible] = useState(false);
  const formattedCardNumber = `${cardNumber.slice(0, 4)}\n${cardNumber.slice(4, 8)}\n${cardNumber.slice(8, 12)}\n${cardNumber.slice(12, 16)}`;
  const banks = ["SBI","HDFC","ICICI","YES","Axis"];
  const bankImage = () => {
    switch(faker.helpers.arrayElement(banks)){
      case "SBI": return require('../assets/banks/sbi.png');
      case "HDFC": return require('../assets/banks/hdfc.png');
      case "ICICI": return require('../assets/banks/icici.png');
      case "YES": return require('../assets/banks/yes.png');
      case "Axis": return require('../assets/banks/axis.png');
    }
  };
  const issuers = ["rupay","mastercard","visa","american"];
  const issuersImage = () => {
    switch(faker.helpers.arrayElement(issuers)){
      case "rupay": return require('../assets/cardIssuers/rupay.png');
      case "mastercard": return require('../assets/cardIssuers/master.png');
      case "visa": return require('../assets/cardIssuers/visa.png');
      case "american": return require('../assets/cardIssuers/american.png');
    }
  };
  
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [visible, setVisible] = useState(true);
    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // Fade in duration
        useNativeDriver: true,
      }).start();
    };
    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // Fade out duration
        useNativeDriver: true,
      }).start(
        () => {
          setVisible(false);
        }
      );
    };
  
    useEffect(() => {
      fadeIn(); // Start with fade-in
    }, []);



  return (
    <View style={styles.container}>
      <Text style = {styles.topText}>select payment mode</Text>
      <Text style = {styles.secondText}>choose your preferred payment method to make payment.</Text>
      <View style = {styles.buttonView}>
        <TouchableOpacity onPress={() => setPaymentMode('pay')}>
          <LinearGradient
            colors={paymentMode==='card' ? ['#FFFFFF', '#FFFFFF00']:['#A90808', '#A9080800'] }
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.paymentStroke}>
            <View style={styles.paymentButton}>
              <Text style={[styles.buttonText, paymentMode==='pay'&&{color: '#A90808'}]}>pay</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity> 
        <TouchableOpacity style={{marginLeft: 7}} onPress={() => setPaymentMode('card')}>
          <LinearGradient
            colors={paymentMode==='pay' ? ['#FFFFFF', '#FFFFFF00']:['#A90808', '#A9080800'] }
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.paymentStroke}>
            <View style={styles.paymentButton}>
              <Text style={[styles.buttonText, paymentMode==='card'&&{color: '#A90808'}]}>card</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>   
      </View>
      {
        paymentMode === 'pay' ? (
          <View style={{marginTop: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Poppins', color: '#FFFFFF', fontSize: 20, textAlign: 'center'}}>pay function components can be here</Text>
          </View>
        ) : (
          <View style={{marginTop: 40, flex: 1}}>
            <Text style={styles.cardText}>YOUR DIGITAL DEBIT CARD</Text>
            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
              <View style={[styles.card]}> 
                <Image source={require('../assets/background/cardBG.png')} style={{width: 186, height: 296, position: 'absolute', top: 0, left: 0, borderRadius: 16}} />
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={require('../assets/vectors/yoloLogo.png')} style={{width: 48.44, height: 15.29}}/>
                  <Image source={bankImage()} style={{width: 48.37, height: 20.99, resizeMode: 'contain'}}/>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <Text style={styles.cardNumber}>{formattedCardNumber}</Text>
                  <View style={{marginLeft: 30}}>
                    <Text style={[styles.headerText, {marginTop: 33}]}>expiry</Text>
                    <Text style={styles.provideText}>{expiryDate}</Text>
                    <Text style={[styles.headerText, {marginTop: 33}]}>cvv</Text>
                    { cvvVisible ?(
                      <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.provideText, {width: 47}]}>{faker.finance.creditCardCVV()}</Text>
                        <TouchableOpacity  onPress={() => setCvvVisible(!cvvVisible)}>
                          <Image source={require('../assets/vectors/cvvVisible.png')} style={{width: 20, height: 20}} />
                        </TouchableOpacity>
                      </View>
                      ) : (
                      <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/vectors/hiddenCvv.png')} style={{width: 39, height: 11 }}/>
                        <TouchableOpacity style={{marginLeft: 5}} onPress={() => setCvvVisible(!cvvVisible)}>
                          <Image source={require('../assets/vectors/cvvInvisible.png')} style={{width: 20, height: 20}} />
                        </TouchableOpacity>
                      </View>
                      )
                    }
                  </View>
                </View>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                  <Image source={require('../assets/vectors/copy.png')} style={{width: 20, height: 20}} />
                  <Text style={styles.copyText}>copy details</Text>
                </TouchableOpacity>
                <View style={{width: '100%', flexDirection: 'row-reverse', marginTop: 20}}>
                  <Image source={issuersImage()} style={{width: 71, height: 35, resizeMode: 'contain'}}/>
                </View>
                {
                  visible && (
                    <Animated.View style={{width: 186, height: 296, position: 'absolute', top: 0, left: 0, borderRadius: 16, opacity: fadeAnim }}>
                      <Image source={require('../assets/background/cardFroze.png')} style={{width: '100%', height: '100%', borderRadius: 16 }} />
                    </Animated.View>
                  )
                }
                
              </View>
              <TouchableOpacity style={{marginLeft: 20, alignItems: 'center'}} onPress={toggleFreeze}>
                <LinearGradient
                  colors={!frozen ? ['#FFFFFF', '#FFFFFF00']:['#A90808', '#A9080800'] }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[styles.paymentStroke, { width: 58, height: 58}]}>
                  <View style={[styles.paymentButton, { width: 56, height: 56 }]}>
                    {
                      frozen ? (
                        <Image source={require('../assets/vectors/frozen.png')} style={{width: 20, height: 20}} />
                      ) : (
                        <Image source={require('../assets/vectors/unfrozen.png')} style={{width: 20, height: 20}} />
                      )
                    }
                  </View>
                </LinearGradient>
                <Text style={[styles.freezeButtonText, frozen&&{color: '#A90808'}]}>{frozen ? "Unfreeze" : "Freeze"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 16,
  },
  topText: {
    color: 'white',
    fontSize: 24,
    marginTop: 24,
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  secondText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
    opacity: 0.5,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  paymentStroke: {
    width: 96,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentButton: {
    width: 94,
    height: 37,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonText: {
    fontWeight: 400,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
  },
  cardText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.2
  },
  freezeButtonText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 12,
    color: '#FFFFFF',
  },
  cardNumber: {
    width: 40,
    marginTop: 33,
    marginStart: 10,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins',
    textAlign: 'center', 
    lineHeight: 27,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.5,
  },
  provideText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 14,
    color: '#FFFFFF',
  },
  copyText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 12,
    color: '#A90808',
    marginLeft: 5,
  },




  card: {
    width: 186,
    height: 296,
    padding: 14,
    backgroundColor: 'black',
    borderRadius: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Pay;
