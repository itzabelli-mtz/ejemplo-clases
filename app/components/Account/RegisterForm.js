import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validation'

export default function RegisterForm(){
    const [showPassword, setshowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false)
    const [ formData, setFormadata ]= useState(defaultFormValues())

    const onSubmit = () => {
       if(formData.email.length===0||formData.password.length===0||formData.repeatPassword.length===0){
           console.log('Todos los campos son requeridos')
       } else if (!validateEmail(formData.email)){
           console.log('El email no es correcto')
       } else if (formData.password !== formData.repeatPassword){
           console.log('Las contraseñas deben ser idénticas')
       } else if (formData.password.length < 6){
           console.log('El password debe tener mínimo 6 caracteres')
       } else {
           console.log('Todo OK')
       }
    }

    const onChange = (e, type) => {
        setFormadata({ ...formData, [type]: e.nativeEvent.text })
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'email')}
                rightIcon={<Icon type='material-community' name='at' inconStyle={styles.iconRigth}/>}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true }
                onChange={(e)=>onChange(e, 'password')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRigth}
                        onPress={()=>setshowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={(e)=>onChange(e, 'repeatPassword')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={ showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRigth}
                        onPress={()=>setshowRepeatPassword(!showRepeatPassword)}
                    />
                }
            />
            <Button
                title='Únete'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        margenTop: 20
    },
    inputForm:{
        width: '100%',
        marginTop: 10
    },
    btnContainerRegister:{
        marginTop: 10,
        width: '95%'
    },
    btnRegister:{
        backgroundColor:'#00a680'
    },
    iconRigth:{
        color: '#646464'
    }
})