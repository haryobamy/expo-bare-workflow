import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Else, If, Then} from 'react-if';
import {Entypo, Feather, FontAwesome} from '@expo/vector-icons';
import {useNavigationState} from '@react-navigation/native';

type Props = {
  handleSend: () => void;
};

export default function WalletCard({handleSend}: Props) {
  const [isActive, setIsActive] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const currentRouteName = useNavigationState(state => {
    const route = state.routes[state.index]; // Get the current route
    return route.name;
  });

  console.log(currentRouteName);

  return (
    <View>
      <If condition={isActive}>
        <Then>
          <View className="p-5 rounded-2xl bg-blue-600 h-[215px] ">
            <Text className="font-[700] text-2xl text-white">
              Get Your Shiga Wallet
            </Text>
            <Text className=" text-base capitalize  mt-4 font-[500] text-white">
              Activate Now To your shiga self-custodial wallet, where you can
              send, receive and manage your stablecoins for free.
            </Text>
            <TouchableOpacity
              className="!bg-white h-[50px]  rounded-xl flex items-center justify-center w-1/2 mt-6 "
              onPress={() => setIsActive(true)}>
              <Text className="font-semibold text-lg text-gray-800">
                Activate Now
              </Text>
            </TouchableOpacity>
          </View>
        </Then>
        <Else>
          <View className="px-5 py-10 rounded-2xl bg-blue-600 ">
            <View className="flex flex-row justify-between">
              <View>
                <Text className="text-white text-lg font-semibold">
                  {currentRouteName === 'Home'
                    ? 'Shiga Wallet Balance'
                    : 'Total Wallet Balance'}
                </Text>
                <View className="flex flex-row items-center gap-5 mt-4">
                  <Text className="text-white text-xl font-semibold  w-[100px] h-[20px]">
                    {showBalance ? '$20.00' : '************'}
                  </Text>
                  <TouchableOpacity
                    hitSlop={20}
                    className=""
                    onPress={() => setShowBalance(!showBalance)}>
                    {showBalance ? (
                      <Entypo name="eye-with-line" size={18} color="#fff" />
                    ) : (
                      <Entypo name="eye" size={18} color="#fff" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex flex-row gap-6">
                <TouchableOpacity className="flex items-center flex-col">
                  <View className="bg-white w-10 h-10 rounded-full flex flex-row items-center justify-center">
                    <FontAwesome name="send" size={16} color="blue" />
                  </View>

                  <Text className="mt-5 font-bold text-lg text-white">
                    Send
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex items-center flex-col"
                  onPress={() => {
                    // handleSnapPress(2);
                    handleSend();
                    console.log('first click');
                  }}>
                  <View className="bg-white w-10 h-10 rounded-full flex flex-row items-center justify-center">
                    <Feather name="arrow-down" size={16} color="blue" />
                  </View>

                  <Text className="mt-5 font-bold text-lg text-white">
                    Receive
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity className="flex items-center flex-col">
                <View className="bg-white w-10 h-10 rounded-full flex flex-row items-center justify-center">
                  <Feather name="arrow-down" size={16} color="blue" />
                </View>

                <Text className="mt-5 font-bold text-lg text-white">
                  View Details
                </Text>
              </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </Else>
      </If>
    </View>
  );
}
