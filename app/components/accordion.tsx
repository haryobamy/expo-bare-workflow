import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import {If, Then} from 'react-if';

type Props = {
  item: {
    id: number;
    title: string;
    desc?: string;
  };
};

export default function Accordion({item}: Props) {
  const [activeIndex, setActiveIndex] = useState<string | number | null>(null);
  return (
    <View className="bg-gray-200 py-8 px-3 rounded-xl">
      <TouchableOpacity
        onPress={() => {
          if (activeIndex === null) {
            setActiveIndex(item?.id);
            return;
          }
          if (activeIndex === item?.id) {
            setActiveIndex(null);
            return;
          }
        }}
        className="flex flex-row  items-center justify-between">
        <Text className="font-bold text-lg text-gray-700">{item?.title}</Text>
        <AntDesign name="pluscircleo" size={24} color="#9ca3af" />
      </TouchableOpacity>

      <If condition={activeIndex === item?.id}>
        <Then>
          <Text className="mt-8">{item?.desc}</Text>
        </Then>
      </If>
    </View>
  );
}
