import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator ()

export default function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='search'
                component={Restaurants}
                options={{title:'Buscar'}}
            />
        </Stack.Navigator>
    )
}

