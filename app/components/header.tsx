import {View, Text, ImageBackground, Alert} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

type Props = {
  title?: string;
};

export default function Header({title}: Props) {
  return (
    <View className="flex flex-row items-center  h-[50px] justify-between px-4 ">
      <View />
      <Text className="text-2xl font-bold">{title}</Text>
      <ImageBackground className="rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center">
        <Menu onSelect={value => Alert.alert(`Selected number: ${value}`)}>
          <MenuTrigger>
            <Text className="text-white text-xl font-bold ">H</Text>
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              backgroundColor: '#f3f4f6',
              marginTop: 28,
              height: 250,
              borderRadius: 10,
              paddingTop: 6,
              paddingBottom: 6,
            }}>
            <MenuOption>
              <View className="flex flex-row items-center gap-2 border-b border-gray-400 pb-2 px-3">
                <ImageBackground className="rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center">
                  <Text className="text-white text-xl font-bold">H</Text>
                </ImageBackground>
                <View>
                  <Text className=" w-22  !truncate font-bold text-base">
                    haryobamy
                  </Text>
                  <Text className="mt-0.5 text-sm">Individual Account</Text>
                </View>
              </View>
            </MenuOption>
            <MenuOption value={2}>
              <View className="border-b  border-gray-400 py-2 px-3">
                <Text className="text-gray-500 text-base font-medium">
                  Settings
                </Text>
              </View>
            </MenuOption>
            <MenuOption value={3}>
              <View className="border-b  border-gray-400 py-2 px-3">
                <Text className="text-gray-500 text-base font-medium">
                  Notifications
                </Text>
              </View>
            </MenuOption>
            <MenuOption value={4} disabled={true}>
              <View className="border-b  border-gray-400 py-2 px-3">
                <Text className="text-gray-500 text-base font-medium">
                  Switch Account
                </Text>
              </View>
            </MenuOption>

            <MenuOption value={4} disabled={true}>
              <View className="px-3">
                <Text className="text-red-500 text-base font-medium">
                  Logout
                </Text>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </ImageBackground>
    </View>
  );
}
