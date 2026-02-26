import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Navigate straight to tabs for now
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView className="flex-1 bg-black justify-center p-6">
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="w-full max-w-sm mx-auto">
                <View className="items-center mb-12">
                    <Text className="text-brand-500 font-black text-4xl">NightFuel</Text>
                    <Text className="text-neutral-400 mt-2">Sign in to sync your progress</Text>
                </View>

                <View className="space-y-4 mb-6">
                    <TextInput
                        className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-xl"
                        placeholderTextColor="#737373"
                        placeholder="Email Address"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-xl"
                        placeholderTextColor="#737373"
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity
                    className="w-full bg-brand-500 p-4 rounded-xl items-center"
                    onPress={handleLogin}
                >
                    <Text className="text-white font-bold text-lg">Sign In</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
