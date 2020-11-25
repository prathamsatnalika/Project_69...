import React, { Component } from 'react';
import {View,Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

export default class BookTransactionScreen extends React.Component {

   constructor() {
       super();

       this.state={
         storyTitle: '',
         storyAuthor: '',
         story:'',
      }}

      
      reset=() => {
        this.setState({storyTitle: '',storyAuthor: '',story: ''}) 
      }

   render() {
       return(
        <View>

            <pp/>

        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'yellow'}}>
           <Text style={{fontSize: 35,fontWeight: '900'}}>
               STORY HUB
           </Text>
        </View>

        <Text style={{
            marginTop: 30,
            marginLeft: 30,
            fontWeight: 700,
            fontSize: 18
        }}>
             Story Name
        </Text>

        <View style={{flex: 1,alignItems: 'center'}}>

        <TextInput
          style={{
            flex:1,
            marginTop: 10,
            width: '80%',
            height: 40,
            borderWidth: 4,
            fontSize: 23,
            fontWeight: '200',
            outline: 'none'
        }}
            onChangeText={storyTitle => {
            this.setState({ storyTitle: storyTitle });
        }}
          value={this.state.storyTitle}
        />

        </View>

           <Text style={{
            marginTop: 30,
            marginLeft: 30,
            fontWeight: 700,
            fontSize: 18
        }}>
             Author
        </Text>

             <View style={{flex: 1,alignItems: 'center'}}>

        <TextInput
          style={{
            flex:1,
            marginTop: 10,
            width: '80%',
            height: 40,
            borderWidth: 4,
            fontSize: 23,
            fontWeight: '200',
            outline: 'none'
        }}
            onChangeText={storyAuthor => {
            this.setState({ storyAuthor: storyAuthor });
        }}
          value={this.state.storyAuthor}
        />

        </View>

        <Text style={{
             marginTop: 30,
            marginLeft: 30,
            fontWeight: 700,
            fontSize: 18
        }}> 
          Story
        </Text>


        <View style={{flex: 1,alignItems: 'center'}}>

 <TextInput
  style={{
    flex:1,
    marginTop: 10,
    width: '80%',
    height: 80,
    borderWidth: 4,
    fontSize: 23,
    fontWeight: '200',
    outline: 'none'
   }}
    onChangeText={story => {
    this.setState({ story: story });
   }}
  value={this.state.story}
   />

< TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.reset}>
            <Text style={{fontWeight: '800',fontSize:20}}>Submit</Text>
          </TouchableOpacity>
</View>


           
    
      </View>
       )
   }
} 

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'yellow',
    
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 80,
        margin: 10,
        width: 160,
        height: 50,
      },
})