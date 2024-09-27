import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable, useColorScheme, ToastAndroid } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { trigger } from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'
import Snackbar from 'react-native-snackbar';

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (<>
    <View>
      <Image style={[{ width: 200, height: 200 }]} source={imageUrl} />
    </View>
  </>);
}


const App = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    trigger("impactLight", options);
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break

    }
  }
  const theme = useColorScheme() == "dark";
  useEffect(() => {
    
    Snackbar.show({
      text:'Click on Roll button',
      backgroundColor:'rgba(125,99,156,0.8)',
      textColor:theme?'white':'blac'
    })
  }, [])


  const background = theme ? styles.blackBackground : styles.whiteBackground;
  const fontcolor = theme ? styles.whiteText : styles.blakText;
  const border = theme ? styles.whiteBorder : styles.blackBorder
  return (
    <View style={[styles.main_container, background]}>
      <Dice imageUrl={diceImage} />
      <Pressable style={[styles.diceBtn, border]} onPress={rollDice}>
        <Text style={[fontcolor, { fontSize: 16 }]}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  blackBackground: {
    backgroundColor: 'black'
  },
  whiteBackground: {
    backgroundColor: "white"
  },
  whiteText: {
    color: 'white'
  },
  blakText: {
    color: "black"
  },
  diceBtn: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    // backgroundColor: "rgba(255,0,200,0.5)"
  },
  blackBorder: {
    borderColor: 'black',
    borderWidth: 2,
  },
  whiteBorder: {
    borderColor: 'white',
    borderWidth: 1,
  }
})