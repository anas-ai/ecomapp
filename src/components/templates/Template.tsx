import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../styles/colors'
import { spacing } from '../../styles/spacing'

type AuthProps = {
    children:React.ReactNode
}

const Template = ({children}:AuthProps) => {
  return (
    <SafeAreaView style={AuthStyle.container}>
      {children}
    </SafeAreaView>
  )
}

export default Template

const AuthStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        padding:spacing.lg
    }
})