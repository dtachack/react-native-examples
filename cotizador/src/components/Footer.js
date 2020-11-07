import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/colors';

export default function Footer(props) {
  const { calculate } = props;
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    borderRadius: 20,
    width: '75%'
  }
})