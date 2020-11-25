
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
   Write: {screen : WriteStoryScreen},
   Read : {screen : ReadStoryScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          
           
           <Image
              style={{ width: 40, height: 40}}
              source={{ uri:
                'https://cdn0.iconfinder.com/data/icons/bookcon-2/32/Holding_Book_Hand_Knowledge-3-512.png'}}
            />
          
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          style={{ width: 40, height: 40}}
          source={{ uri:
            'https://cdn2.iconfinder.com/data/icons/hand-gestures-29/614/6278_-_Holding_Book-512.png'}}
        />
        )
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)
