import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {cn} from '../../lib/utils';

type Props = {
  sublinks: {
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }[];
};

export default function CustomTab({sublinks}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View>
      <ScrollView
        horizontal
        className="flex-1 flex flex-row gap-2 border-b border-solid border-gray-300 ">
        <View className="flex flex-row gap-3  ">
          {sublinks?.map((link, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setActiveTab(idx)}
              className={cn('flex flex-row gap-2 items-center py-4', {
                'border-b-2 border-blue-600 border-solid': activeTab === idx,
              })}>
              <View>{link.icon}</View>

              <Text
                // style={[
                //   styles.tabLabel,
                //   activeTab === index && styles.activeTabLabel,
                // ]}
                className={cn('text-xl font-semibold')}>
                {link.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Content View */}
      <ScrollView className=" mt-3">{sublinks[activeTab].content}</ScrollView>
    </View>
  );
}
