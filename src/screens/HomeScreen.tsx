import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";

const HomeScreen = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome!
      </Text>

      {user && (
        <View style={{ marginBottom: 40, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>
            Name: {user.name}
          </Text>
          <Text style={{ fontSize: 18, marginBottom: 8 }}>
            Email: {user.email}
          </Text>
          <Text style={{ fontSize: 16, color: '#666' }}>
            Status: {isAuthenticated ? 'Authenticated ✓' : 'Not Authenticated'}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={{
          backgroundColor: '#FF3B30',
          paddingHorizontal: 40,
          paddingVertical: 16,
          borderRadius: 8,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Logout
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 40, textAlign: 'center', color: '#666', paddingHorizontal: 20 }}>
        This is your authenticated home screen. Press Logout to return to login.
      </Text>
    </View>
  )
}

export default HomeScreen;