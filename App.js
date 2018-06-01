/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Flatlist,
} from 'react-native';

import t from 'tcomb-form-native';
import moment from 'moment';

const Gender = t.enums({
  M: 'Male',
  F: 'Female',
  O: 'Other',
});

const Model = t.struct({
  firstname: t.String,
  lastname: t.String,
  email: t.String,
  phone: t.maybe(t.Number),
  birthdate: t.Date,
  gender: Gender,
  terms: t.Boolean,
});

const options = {
  fields: {
    terms: {
      label: 'Agree to Terms',
      help: 'Terms: I hereby warrant that I am of full legal age and have the right to contract in my own name. I have read the above authorization, release and agreement, prior to its execution, and I am fully familiar with the contents thereof. This release shall be binding upon me and my heirs, legal representatives and assigns.'
    },
    birthdate: {
      label: 'Birthdate',
      mode: 'date',
      error: 'Must be at least 18 yrs young.',
      config: {
        format: (date) => moment(date).format('MMM DD, YYYY'),
        dialogMode: 'spinner'
      },
    },
    email: {
      error: 'Email address is required.',
      placeholder: 'Model email address'
    },
    firstname: {
      error: 'For your records and ours, your first name is required.',
      placeholder: 'Model Name'
    },
    lastname: {
      error: 'For your records and ours, your last name is required.',
      placeholder: 'Model Name'
    },
    phone:{
      placeholder: '404-555-5555'
    },
    gender: {
      error: 'Hey your gender is required too, just so we can make sure the docs match.',
      nullOption: {value: '', text: 'Choose your gender'}
    },
  },
};


const Form = t.form.Form;

export default class App extends Component {

  mySubmitButton = () => {
    // do the things
    const value = this._form.getValue();

    alert(value.firstname);
  }

  render() {

    let myFormatFunction = (format,date) =>{
    return moment(date).format(format);
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>
            Model Release
          </Text>
          <Form
            ref={c => this._form = c}
            type={Model}
            options={options}
          />
          <TouchableOpacity style={styles.button} onPress={this.mySubmitButton} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ethnicPicker}><Text>100</Text></View>
        <View style={styles.ethnicPicker}><Text>200</Text></View>
        <View style={styles.ethnicPicker}><Text>100</Text></View>
        <View style={styles.ethnicPicker}><Text>200</Text></View>
        <View style={styles.ethnicPicker}><Text>100</Text></View>
        <View style={styles.ethnicPicker}><Text>200</Text></View>
        <View style={styles.ethnicPicker}><Text>100</Text></View>
        <View style={styles.ethnicPicker}><Text>200</Text></View>
      </ScrollView>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  ethnicPicker: {
    flexDirection: 'column'
  },
});
