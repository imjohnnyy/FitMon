import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View className="items-center justify-center flex-1 px-6 bg-white">
      <View className="w-full max-w-md space-y-3">
        {/* Email Input */}
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          className="h-12 px-4 bg-white border border-gray-500 rounded-lg"
        />

        {/* Password Input with Eye Toggle */}
        <View className="flex-row items-center h-12 px-4 mt-4 bg-white border border-gray-500 rounded-lg">
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePassword}
            className="flex-1"
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <MaterialCommunityIcons
              name={hidePassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="items-center py-3 mt-8 bg-black rounded-lg">
          <Text className="text-lg font-bold text-white">Sign in</Text>
        </TouchableOpacity>

        {/* Divider line*/}
        <View className="flex flex-row items-center my-6">
          <View className="flex-1 border-t border-gray-500"></View>
          <Text className="mx-4 text-gray-500">OR</Text>
          <View className="flex-1 border-t border-gray-500"></View>
        </View>

        {/* Sign in with Google Button */}
        <TouchableOpacity className="flex flex-row items-center justify-center py-3 mt-4 bg-white border border-gray-500 rounded-lg">
          <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
          <Text className="ml-3 text-lg font-bold text-gray-700">
            Sign in with Google
          </Text>
        </TouchableOpacity>

        {/* Sign up navigation */}
        <View className="flex flex-row items-center justify-center mt-4">
          <Text className="text-gray-700">Don&apos;t have an account? </Text>
          <Text
            className="font-bold text-blue-700"
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign up here
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
