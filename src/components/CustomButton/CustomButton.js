import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type='primary'}) => {

  return (
    <Pressable  onPress={onPress} style={[styles.container ,styles['container_${type}']]}>
      <Text style={[styles.text ,styles['text_${type}']]}>{text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
	container: {
		backgroundColor:'#3B71F3',
		width:'100%',
		padding:15,
		marginVertical:5,
		alignItems:'center',
		borderRadius:5,

	},
	container_primary:{
		backgroundColor:'#3B71F3',
	},
	container_tertairy:{


	},
	text: {
		fontWeight:'bold',
		color:'white',
	},
	text_tertiary:{

		color:'gray',
	},

});
export default CustomButton