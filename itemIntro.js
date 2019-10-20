
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { Badge, CheckBox } from 'react-native-elements';


type Props = {};
export default class ItemIntro extends Component<Props> {
   constructor(props){
   super(props);
   this.state={

   }
   }
//   takePicture() {
//        const options = {};
//        //options.location = ...
//        this.camera.capture({metadata: options})
//          .then((data) => console.log(data))
//          .catch(err => console.error(err));
//     }
  render() {

    const { navigate } = this.props.navigation;
    const { checked } = this.state;
    return (
    <ScrollView>
        <RNCamera
                  style={styles.preview}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.on}
                  androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                  }}
//                  androidRecordAudioPermissionOptions={{
//                    title: 'Permission to use audio recording',
//                    message: 'We need your permission to use your audio',
//                    buttonPositive: 'Ok',
//                    buttonNegative: 'Cancel',
//                  }}
                >
                </RNCamera>
        <TextInput value = "Enter Description: " />
        <TextInput value = "Enter Name: " />
        <TextInput value = "Enter Date: " />

    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({

});