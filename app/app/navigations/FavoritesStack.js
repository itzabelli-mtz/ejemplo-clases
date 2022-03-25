import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator ()

export default function FavoritesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='favorites'
                component={Restaurants}
                options={{title:'Favoritos'}}
            />
        </Stack.Navigator>
    )
}

