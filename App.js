import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, StatusBar } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', 'Botón presionado');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7b2cbf" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Apellido, Apellido)</Text>
      </View>

      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Olvidaste la clave?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Crear Cuenta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#7b2cbf',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#9d4edd',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linkText: {
    color: 'black',
    marginTop: 5,
  },
});

export default App;
