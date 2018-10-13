import React from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput, Picker } from 'react-native';


export default class HomeScreen extends React.Component {
 state = {user: '', text: ""};
   updateUser = (user) => {
      this.setState({ user: user })
   }
  render() {
    return (
    <View style={styles.container}>
	  	<Image
	      		source={require('../media/img/logo.png')}
	      		style={styles.logo}
		/>
	     <TextInput
	        style={styles.input}
	        onChangeText={(text) => this.setState({text})}
	        placeholder="Nama Siswa"
		/>
	    <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
	    style={styles.pick}>
               <Picker.Item label = "XI RPL 1" value = "XI RPL 1" />
               <Picker.Item label = "XI RPL 2" value = "XI RPL 2" />
               <Picker.Item label = "XI RPL 3" value = "XI RPL 3" />
               <Picker.Item label = "XI RPL 4" value = "XI RPL 4" />
               <Picker.Item label = "XI TKJ 1" value = "XI TKJ 1" />
               <Picker.Item label = "XI TKJ 2" value = "XI TKJ 2" />
               <Picker.Item label = "XI TKJ 3" value = "XI TKJ 3" />
               <Picker.Item label = "XI TJA 1" value = "XI TJA 1" />
               <Picker.Item label = "XI TJA 2" value = "XI TJA 2" />
               <Picker.Item label = "XI TJA 3" value = "XI TJA 3" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>	

        <Button
	          title="Login"
	          onPress={() => this.props.navigation.navigate('Details',{text:this.state.text},{value:this.state.user})}
        />

    </View>
    );
  }
}

const styles = StyleSheet.create({
	
	container:{
		flex: 1,
		alignItems: 'center',
	},

	logo:{
		width: 200,
		height: 210,
		justifyContent: 'flex-start',
		marginTop: 20
	},

	input:{
		height: 40,
		width: 200, 
		borderColor: 'gray', 
		borderWidth: 1,
		margin: 20,
	},
	text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   pick:{
   	width: 180,
   }
});