import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FallBack = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require("../assets/todolist.jpg")} style={{height:300, width:300}}/>
    </View>
  )
}

export default FallBack

const styles = StyleSheet.create({})