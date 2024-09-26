import { StyleSheet, Text, View, ImageSourcePropType, Image } from 'react-native'
import React, { PropsWithChildren } from 'react';


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (<>
    <View>
      <Image style={[{ width: 200, height: 200 }]} source={imageUrl} />
    </View>
  </>);
}

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})