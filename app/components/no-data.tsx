import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../constants';

type Props = {
  title: string;
  subText?: string;
};

export default function NoData({title, subText}: Props) {
  return (
    <View className="  mt-5 px-4 py-8 rounded-2xl mb-10">
      <View className="flex items-center justify-center flex-col">
        <Image source={images.japanese_restaurant} className="w-20 h-20" />
        <Text className="font-bold text-base mt-2">{title}</Text>
        <Text className="font-[300] text-gray-700 text-sm mt-1 capitalize text-center w-[280px] px-3">
          {subText}
        </Text>
      </View>
    </View>
  );
}
