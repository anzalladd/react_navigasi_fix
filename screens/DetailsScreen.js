import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import Judul from '../Components/Judul';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.bg}>
        <Text style={styles.judul}>Welcome Back !!! {this.props.navigation.state.params.text}</Text>
        <Judul/>
          <Image style={styles.gambar}
           source = {require('../media/img/fotoprofil.jpg')}/>
          <Text style={styles.tulisan_1}> Nama   = Anzalla Dzikri Dhamara</Text>
          <Text style={styles.tulisan_1}> No     = 10</Text>
		<Text style={styles.tulisan_1}> Kelas = XI RPL 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

	  bg:{
	    flex: 1,
	    backgroundColor: 'yellow',

	  },
	  tulisan_1:{
	    alignItems: 'center',
	    textAlign: 'center',
	    fontSize: 25,
	  },
	  gambar:{
	    alignItems: 'center',
	    justifyContent: 'center',
	    left: 140,
	    marginTop: 80,
	    marginBottom: 90,
	},
	  judul:{
	  	fontWeight: 'bold',
	  	color: 'black',
	  	fontSize: 30,
	  }
});