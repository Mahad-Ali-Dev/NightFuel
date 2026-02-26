import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function MealsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-black">
            <ScrollView className="flex-1 p-4">
                <View className="flex flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-white text-3xl font-black">Meal Logger</Text>
                    </View>
                    <TouchableOpacity className="bg-brand-500/20 px-3 py-2 rounded-lg flex flex-row items-center">
                        <IconSymbol name="plus" size={16} color="#f59e0b" />
                        <Text className="text-brand-400 ml-2 font-bold text-xs uppercase tracking-widest">Scan</Text>
                    </TouchableOpacity>
                </View>

                {/* Meal List Placeholder */}
                <View className="space-y-4">
                    <View className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-row items-center mb-4">
                        <View className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 mr-4">
                            <Text className="text-xl">🍳</Text>
                        </View>
                        <View className="flex-1">
                            <Text className="text-white font-bold">Pre-Workout Breakfast</Text>
                            <Text className="text-neutral-400 text-xs">Oatmeal, 4 Eggs, Black Coffee</Text>
                        </View>
                        <Text className="text-white font-black text-sm">620</Text>
                    </View>

                    <View className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-row items-center">
                        <View className="w-12 h-12 border border-dashed border-neutral-600 rounded-lg flex items-center justify-center mr-4 bg-transparent">
                            <IconSymbol name="plus" size={24} color="#525252" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-neutral-400 font-bold">Post-Workout Meal</Text>
                            <Text className="text-neutral-600 text-xs">Scheduled for 1:30 PM</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
