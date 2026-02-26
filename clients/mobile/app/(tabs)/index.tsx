import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1 p-4">
        <View className="flex flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-white text-3xl font-black">Dashboard</Text>
            <Text className="text-neutral-400 text-sm mt-1">Ready to dominate today?</Text>
          </View>
          <View className="w-12 h-12 bg-neutral-800 rounded-full items-center justify-center">
            <Text className="text-white font-bold">JD</Text>
          </View>
        </View>

        {/* Phase Summary Placeholder */}
        <View className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl mb-6">
          <Text className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-2">Current Phase</Text>
          <Text className="text-white text-xl font-bold">Focus & Execution</Text>
          <Text className="text-neutral-400 text-sm mt-2">Next phase (Wind Down) begins in 4h 30m.</Text>
        </View>

        {/* Meals Summary */}
        <View className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl mb-6 flex flex-row justify-between items-center">
          <View>
            <Text className="text-white font-bold text-lg">Nutrition</Text>
            <Text className="text-neutral-400 mt-1">2/4 Meals Logged</Text>
          </View>
          <Text className="text-brand-400 font-black text-2xl">1,820 kcal</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
