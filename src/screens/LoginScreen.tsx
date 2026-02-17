import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { login } from "../store/authSlice";

const LoginScreen = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter email and password");
            return;
        }

        if (!email.includes('@')) {
            Alert.alert('Error', 'Please enter a valid email');
            return;
        }

        dispatch(login({ email, password }));
    }

     return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>
        Login
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 8 }}>Email</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
          fontSize: 16,
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={{ fontSize: 16, marginBottom: 8 }}>Password</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 8,
          marginBottom: 30,
          fontSize: 16,
        }}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;