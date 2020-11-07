import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native'

import colors from './src/utils/colors'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import ResultaCalculation from './src/components/ResultCalculation'

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months])

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interes del prestamo');
    } else if (!months) {
      setErrorMessage('Seleccione los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
      })
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizar de Prestamos</Text>
        <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}></Form>
      </SafeAreaView>
      <ResultaCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}></ResultaCalculation>
      <Footer calculate={calculate}></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 15
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
  }
})