import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
type Props = {
    userName: string,
    userPassword: string
}

export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          userName:'',
          userPassword:''
        };
      }
    registerUser() {
        const { userName, userPassword } = this.state;

        fetch('http://10.0.2.2/').then(response => response.json())
                                        .then(json => console.log(json))
                                        .catch(error =>
                                        	this.setState({
                                        	  isLoading: false,
                                        	  message: 'Something bad happened ' + error
                                        }));
        this.props.navigation.navigate('PostPage');

    }
    render() {


        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' onChangeText={(val)=>{
                this.setState({userName: val})}}/>
                <TextInput placeholder='Password' onChangeText={(val)=>{
                this.setState({userPassword: val})}}/>
                <View style={{margin:7}} />
                <Button
                          onPress={this.registerUser.bind(this)}
                          title="Submit"
                      />
                  </ScrollView>
            )
    }
}