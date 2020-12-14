import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppHeader from './components/AppHeader';

export default class AdviceScreen extends React.Component {
 state = {
    a: 'value'
  }


willFocusAction = (eng) => {
  
  this.setState({eng});
  console.log('willFocus Screen 2', new Date().getTime());
}
   constructor(){
super();
this.state={
english:'',
math: '',
hindi:'',
social:'',
science:'',



}}

componentDidMount(){
const data = this.props.navigation.getParam('eng'); 
alert(data)


}
 
   goToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View>
      <AppHeader/>
  <Text style={{textAlign : 'center',alignItems:"center",color:"white",}}>{this.props.navigation.getParam('eng')}</Text>

   <NavigationEvents
        onWillFocus={this.willFocusAction}

        />
        <Text>Screen 2</Text>
        <Text 
        style={styles.buttonText2}>{this.state.a}</Text>
      
   <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToHome}>
            <Text style={styles.buttonText2}>Go  Back</Text>
          </TouchableOpacity>
     
      </View>





 


    )
  }
}
const styles = StyleSheet.create({
    button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:150,
    width : 200,
    height:50,
    backgroundColor:'blue'
  },
 
   buttonText2 : {
    
    textAlign : 'center',
    color : 'gold',
    fontSize:35,
  }
})