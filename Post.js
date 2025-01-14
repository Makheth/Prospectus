import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Program(props) {
  const [rates, setRates] = useState(0);

  function increaseRates() {
    if (rates < 6) {
      setRates(rates + 1);
    }
  }

  const { title, description } = props; 

  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      <View style={styles.container2}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, }}>{title}</Text>
      <Text style={{color: 'red'}}>{description}</Text>
      </View>
      {rates < 6 && (
        <TouchableOpacity style={styles.button} onPress={increaseRates}>
          <MaterialIcons name="star-rate" size={24} color="black" />
          <Text>{rates}</Text>
        </TouchableOpacity>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'right', 
    justifyContent: 'space-between',
    marginRight:24,
    paddingRight:55,
    marginBottom:24,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  },
  container2:
  {
    alignItems: 'right', 
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginRight:24,
    paddingRight:55,
    marginBottom:24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
