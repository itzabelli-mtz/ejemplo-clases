import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest(){
    const navigation = useNavigation()
    return(
        <ScrollView style={StyleSheet.container}>
            <Image
                style={styles.stretch}
                source={require('../../../../assets/imagen/imagen1.jpg')}
            />
            <Text style={styles.title}>Ingresa a tu perfil</Text>
            <Text style={styles.description}>
                Busca y visualiza las mejores opciones en restaurantes de tu ciudad, no olvides rankear tus favoritos
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    title='Ver tu perfil'
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={()=>navigation.navigate('login')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    stretch:{
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        marginBottom: 15
    },
    title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 15,
        textAlign:'center'
    },
    description:{
        marginBottom: 15,
        textAlign: 'center'
    },
    viewBtn:{
        flex: 1,
        alignItems: 'center'
    },
    btnStyle:{
        backgroundColor: '#00a680'
    },
    btnContainer:{
        width: '70%'
    }
})