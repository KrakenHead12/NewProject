import { View, Text , Image, StyleSheet,useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Logo from 'Users/samarthsharma/Desktop/NewProject/assets/images/download.png';
const SignInScreen = () => {

  const [username,setUsername]=useState('');	
  const [password,setPassword]=useState('');	
  const {height}=useWindowDimensions();
  const onSignInPressed =() => {
	  console.warn('Sign IN');
  };
  const OnForgotPasswordPressed=() =>{
	console.warn('OnForgotPasswordPressed');
  };
  return (
    <View>
     <Image source={Logo} styles={[styles.logo, {height:height*0.3}]} resizeMode='contain'/>

     <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
     <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>


     <CustomButton text="Sign In" onPress={onSignInPressed} />
     <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
    </View>
  )
}

const styles=StyleSheet.create({
	logo:{
		width:'70%',
		maxWidth:400,
		maxHeight:200,
	},
	root:{
		alignItems:'center',
		padding:20,
	}
});
export default SignInScreen