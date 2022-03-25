import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator ()

export default function TopRestaurantsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='top-restaurants'
                component={Restaurants}
                options={{title:'Principales Restaurantes'}}
            />
        </Stack.Navigator>
    )
}

