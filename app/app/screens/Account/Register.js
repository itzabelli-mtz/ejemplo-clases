import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from '../../../components/Account/RegisterForm'

export default function Register(){
    return(
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../../assets/imagen/icon-restaurant-bolat-min.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style = {styles.viewForms}>
                <RegisterForm/>
            </View>
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft:40,
        textAlign:'center'
    },
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20 
    }
})