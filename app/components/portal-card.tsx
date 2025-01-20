import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IconCheck, icons, images} from '../../constants';
import StableIcon from '../../assets/images/stable-coins.svg';
import {cn} from '../../lib/utils';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  portal: {
    header: string;
    swapText: string;
    desc: string;
    headerClass: string;
    cardClass: string;
  };
};

export default function PortalCard({portal}: Props) {
  return (
    <View className="border border-solid border-gray-300   px-4 py-7 rounded-2xl mb-10">
      <View
        className={cn(
          ' flex flex-col items-center rounded-2xl p-12 ',
          portal.cardClass,
        )}>
        <Text
          className={cn('uppercase font-bold text-base ', portal.headerClass)}>
          {portal.header}
        </Text>
        <View className="mt-6">
          <StableIcon />
        </View>
        <Text className="text-2xl font-bold"> {portal.swapText}</Text>
        <Text className="mt-4 text-center px-11 text-gray-700 text-sm font-medium">
          {portal.desc}
        </Text>
      </View>
      <TouchableOpacity className="rounded-xl w-full bg-blue-700 h-14 flex flex-row gap-2 mt-6 items-center justify-center">
        <Text className="text-white font-bold text-xl">Get started</Text>
        <AntDesign name="forward" size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
}
