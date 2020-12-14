import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,ToastAndroid, 
} from 'react-native';

import AppHeader from './components/AppHeader';
import Inputs from './inputs.js';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (abcdxyz, eng, ma, sci, so, hin) => {
    this.props.navigation.navigate(
      'AdviceScreen',
      { color: abcdxyz },
      { eng: eng },
      { ma: ma },
      { sci: sci },
      { so: so },
      { hin: hin }
    );
  };

  sum = () => {
    var engmarks = parseInt(this.state.english);
    var mathmarks = parseInt(this.state.math);
    var socialmarks = parseInt(this.state.social);
    var sciencemarks = parseInt(this.state.science);
    var hindimarks = parseInt(this.state.hindi);
    var total =
      (engmarks + mathmarks + socialmarks + sciencemarks + hindimarks) *3;
    alert('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject');
    ToastAndroid.show('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject', ToastAndroid.SHORT);
  };
  englishm = (text) => {
    this.setState({ english: text });
  };
  mathm = (text) => {
    this.setState({ math: text });
  };
  socialm = (text) => {
    this.setState({ social: text });
  };
  hindim = (text) => {
    this.setState({ hindi: text });
  };
  sciencem = (text) => {
    this.setState({ science: text });
  };
  constructor() {
    super();
    this.state = {
      english: '',
      math: '',
      hindi: '',
      social: '',
      science: '',
      error:'',
    };
  }
validator(){
if(this.state.english==""||this.state.math==""||this.state.hindi==""||this.state.social==""||this.state.science==""){
this.setState({error:'no empty values please'})

}

}
  render() {
    return (
      <View>
        <ScrollView>
          <AppHeader />

          <Text style={styles.buttonText}>English</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onBlur={()=>this.validator()}
            placeholder="Max Marks - Your Marks"
            placeholderTextColor="blue"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={this.englishm}
            value={this.state.english}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Math</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="magenta"
            autoCapitalize="none"
            onChangeText={this.mathm}
            value={this.state.math}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Science</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor=" rgb(255,100,0)"
            autoCapitalize="none"
            onChangeText={this.sciencem}
            value={this.state.science}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Social</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="blue"
            autoCapitalize="none"
            onChangeText={this.socialm}
            value={this.state.social}
          />
          <Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Hindi</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="orange"
            autoCapitalize="none"
            onChangeText={this.hindim}
            value={this.state.hindi}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Button title="How Much Time Should You Study" onPress={this.sum} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    color: 'white',
  },
});
