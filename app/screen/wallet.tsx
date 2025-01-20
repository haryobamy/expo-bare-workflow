import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import WalletCard from '../components/wallet-card';
import Header from '../components/header';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CustomTab from '../components/custom-tab';
import {images} from '../../constants';
import NoData from '../components/no-data';

const sublinks = [
  {
    label: 'USDC',
    content: (
      <NoData
        title="You have no shiga wallet"
        subText="kindly generate a wallet to get started with youur transactions"
      />
    ),
    icon: <Image source={images.baked_fries} className="w-6 h-6" />,
  },
  {
    label: 'USDT',
    content: <NoData title="You have no shiga wallet" />,
    icon: <Image source={images.baked_fries} className="w-6 h-6" />,
  },
  {
    label: 'BTC',
    content: (
      <NoData
        title="You have no shiga wallet"
        subText="kindly generate a wallet to get started with youur transactions"
      />
    ),
    icon: <Image source={images.baked_fries} className="w-6 h-6" />,
  },
];

export default function Wallet() {
  return (
    <SafeAreaView className="flex flex-1 bg-gray-100">
      {/* header */}
      <Header title="Wallet" />
      <ScrollView
        className="flex flex-1 h-full mx-3 py-5 pb-[100px] "
        indicatorStyle="white">
        <WalletCard handleSend={() => console.log('send')} />

        <View className="mt-16">
          <Text className="text-xl font-bold text-gray-600">
            Your Shiga Wallet
          </Text>

          <View className="flex flex-row items-center gap-3 mt-4">
            <View className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center">
              <MaterialCommunityIcons
                name="piggy-bank"
                size={24}
                color="#3b82f6"
              />
            </View>
            <View>
              <Text className="text-gray-600 text-base font-semibold">
                Total Gas Fee Saved
              </Text>
              <Text className="text-gray-800 text-lg font-bold">$0.00000</Text>
            </View>
          </View>
        </View>

        {/* coin tabs */}
        <View className="mt-10">
          <CustomTab sublinks={sublinks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
