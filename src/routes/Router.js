import React from 'react'
import { NavigationContainer, Text } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

//ROTAS
import Usuario from '../screens/usuario/Usuario'
import Posts from '../screens/posts/Posts'
import Home from '../screens/home/Home'

const Stack = createStackNavigator()

export default function Router() {
  return (
     <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'> 

            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Usuario' component={Usuario}/>
            <Stack.Screen name='Postes' component={Posts}/>

        </Stack.Navigator>


     </NavigationContainer>
  )
}

