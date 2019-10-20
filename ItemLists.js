
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

import { Badge, CheckBox } from 'react-native-elements';

const foodType = ["Fruits", "Drinks", "Vegetables", "Snacks"];
type Props = {};
export default class ItemLists extends Component<Props> {
   constructor(props){
   super(props);
   this.state={
    checked: false
   }
   }

  render() {

    const { navigate } = this.props.navigation;
    const { checked } = this.state;
    return (
    <View>
        {foodType.map(ele=>{
                 return <CheckBox title = {ele}
                 onPress = {()=>{
                    this.setState({checked: true});
                    this.props.navigation.navigate('ItemDetail');
                 }
                 }/>
             })}

        <Badge />

    </View>

    );
  }
}

const styles = StyleSheet.create({

});