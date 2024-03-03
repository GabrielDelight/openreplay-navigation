import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chat = () => {
  return (
   <View style={styles.body}>
   <Text style={styles.text}>Chat Screen</Text>
 </View>
  )
}

export default Chat

const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: 'black',
     padding: 20,
     justifyContent: "center",
     alignItems: "center"
   },
   text: {
     fontSize: 40,
     color: 'white',
     fontWeight: '900',
   },
 });
 