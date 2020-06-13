import React, {Component} from 'react';
import {Alert, Text} from 'react-native';
import {CardSection, Button, Card, Spinner,Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '',password:'',error:'',loading:false};
  

  onButtonPress(){
  
    const { email , password } = this.state;

    this.setState({error:'',loading:true});

    
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccessfull.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccessfull.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
  }

  onLoginFail(){
    this.setState({
        loading:false,
        error:'Authentication Failed'
    })
  }

  onLoginSuccessfull(){
      this.setState({
          email:'',
          password:'',
          loading:false,
          error:''
      })
      Alert.alert('Signin Successful')

  }

  renderButton(){
      if(this.state.loading===true){
          return <Spinner size="small"/>
      }
      return(
        <Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>

      )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
         
          />
        </CardSection>
       
        <CardSection>
        <Input
        secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </CardSection>
        <Text style={{color:"red",fontSize:20,alignSelf:'center'}}>
            {this.state.error}
        </Text>

        <CardSection>
         {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
