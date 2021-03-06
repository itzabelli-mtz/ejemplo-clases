import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator ()

export default function AccountsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='accounts'
                component={Restaurants}
                options={{title:'Cuenta'}}
            />
        </Stack.Navigator>
    )
}

