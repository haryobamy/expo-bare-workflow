import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import {icons, images} from '../../constants/index';
import SelectInput from '../components/select-input';
import {Ionicons} from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import WalletCard from '../components/wallet-card';
import NoData from '../components/no-data';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomModal from '../components/bottom-sheet';
import CheckBox from '@react-native-community/checkbox';
import CheckBoxWithLabel from '../components/check-box';

export default function Home({navigation}: any) {
  console.log(navigation);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
    console.log('snap pressed');
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    <SafeAreaView className="flex flex-1 bg-gray-100">
      {/* header */}
      <View className="flex flex-row items-center  h-[50px] justify-between px-4 ">
        <View />
        <Text className="text-2xl font-bold">Dashboard</Text>
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
      <ScrollView
        className="flex flex-1 h-full mx-3 py-5 pb-[100px] "
        indicatorStyle="white">
        {/* wallet card */}
        <WalletCard handleSend={() => handleSnapPress(2)} />
        {/* kyc registeration */}
        <View className="border border-solid  border-blue-500 p-4 w-full bg-blue-100 rounded-xl mt-5">
          <View className="flex flex-row items-center justify-center gap-1">
            <AntDesign
              name="infocirlce"
              size={18}
              color="#60a5fa"
              className="text-gray-600"
            />
            <Text className="text-base font-bold capitalize px-6">
              Complete Verification To gain access to your portal accounts for
              instant, Compliant on and off-Ramps
            </Text>
          </View>
          <TouchableOpacity className="bg-blue-800 h-[45px] w-7/10  rounded-xl flex items-center justify-center mt-6 ">
            <Text className="font-bold text-lg text-white ">Complete KYC</Text>
          </TouchableOpacity>
        </View>
        {/* coin swap */}
        <View className="border border-solid border-gray-300  mt-5 px-4 py-8 rounded-2xl  ">
          <Text className="font-semibold text-xl">Quick Actions</Text>
          {/* fiat to stable */}
          <View className="bg-blue-100/60 rounded-xl mt-6 px-5 py-9 flex flex-col gap-4 ">
            <Text className="text-center font-semibold text-lg">
              Swap flat To Stablecoin
            </Text>
            <View className="flex flex-row items-center gap-2 justify-center">
              <View className="flex flex-row gap-0 border border-solid border-gray-300 rounded-full p-1">
                <Image source={icons.star} className="mx-1 w-[20px] h-[20px]" />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
              </View>
              <Entypo
                name="arrow-right"
                size={24}
                color="#3b82f6"
                className="text-blue-500"
              />
              <View className="flex flex-row gap-0 border border-solid border-gray-300 rounded-full p-1">
                <Image source={icons.star} className="mx-1 w-[20px] h-[20px]" />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
              </View>
            </View>
            <TouchableOpacity className="bg-white h-[45px] w-7/10 rounded-[10px] flex items-center justify-center border  border-gray-300 mt-6 ">
              <Text className="font-bold text-base text-gray-800 flex flex-row items-center">
                Get Started <AntDesign name="forward" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          </View>

          {/* stable to fiat */}

          <View className=" bg-yellow-50 rounded-xl mt-6 px-5 py-9 flex flex-col gap-4 ">
            <Text className="text-center font-semibold text-lg capitalize">
              Swap Stablecoin To fiat
            </Text>
            <View className="flex flex-row items-center gap-2 justify-center">
              <View className="flex flex-row gap-0 border border-solid border-gray-300 rounded-full p-1">
                <Image source={icons.star} className="mx-1 w-[20px] h-[20px]" />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
              </View>
              <Entypo
                name="arrow-right"
                size={24}
                color="#3b82f6"
                className="text-blue-500"
              />
              <View className="flex flex-row gap-0 border border-solid border-gray-300 rounded-full p-1">
                <Image source={icons.star} className="mx-1 w-[20px] h-[20px]" />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
                <Image
                  source={icons.master_card}
                  className="mx-1 w-[20px] h-[20px]"
                />
              </View>
            </View>
            <TouchableOpacity className="bg-white h-[45px] w-7/10 rounded-[10px] flex items-center justify-center border  border-gray-300 mt-6 ">
              <Text className="font-bold text-base text-gray-800 flex flex-row items-center">
                Get Started <AntDesign name="forward" size={12} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="border border-solid border-gray-300  mt-5 px-4 pt-6 pb-2 rounded-2xl  ">
          <View className=" flex flex-row items-center justify-between">
            <Text className="text-xl font-semibold">Rate Calculator</Text>
            <View className="flex flex-row gap-1 items-center text-base font-semibold ">
              <AntDesign
                name="sharealt"
                size={14}
                color="#1e3a8a"
                className="!mr-1"
              />
              <Text className="text-blue-900 font-bold">Share Rate Quote</Text>
            </View>
          </View>

          {/* calculator from */}
          <View className="bg-gray-200/40 rounded-xl flex  flex-row items-center justify-between p-4 mt-8  ">
            <View>
              <Text className="font-semibold text-base mb-2">From</Text>
              <View className="w-[100px]">
                <TextInput className="bg-gray-100 p-1 w-full" />
              </View>
            </View>

            <View className="flex flex-col items-end">
              <Text className="font-light text-sm">Stablecoin</Text>
              <View className="mt-2 bg-gray-300 p-2 rounded-2xl w-[90px]">
                <SelectInput
                  items={[
                    {label: 'USDT', value: 'usdt'},
                    {label: 'Baseball', value: 'baseball'},
                    {label: 'Hockey', value: 'hockey'},
                  ]}
                  value={'usdt'}
                  onValueChange={value => console.log('Selected:', value)}
                  style={{
                    inputAndroid: {
                      backgroundColor: 'transparent',
                    },
                    iconContainer: {
                      top: -4,
                      right: 0,
                    },
                  }}
                  Icon={() => {
                    return (
                      <Entypo
                        name="chevron-small-down"
                        size={24}
                        color="black"
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
          {/* transfer icon */}
          <View className="flex items-center justify-center -my-[12px]">
            <View className=" bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center p-2">
              <Image source={icons.star} className="w-8 h-8" />
            </View>
          </View>
          {/* calculator to */}
          <View className="bg-gray-200/40 rounded-xl flex  flex-row items-center justify-between p-4 mt-3">
            <View>
              <Text className="font-semibold text-base mb-2">To</Text>
              <View className="w-[100px]">
                <TextInput className="bg-gray-100 p-1 w-full" />
              </View>
            </View>

            <View className="flex flex-col items-end">
              <Text className="font-light text-sm text-end ">Fiat</Text>
              <View className="mt-2 bg-gray-300 p-2 rounded-2xl w-[90px]">
                <SelectInput
                  items={[
                    {label: 'USDT', value: 'usdt'},
                    {label: 'Baseball', value: 'baseball'},
                    {label: 'Hockey', value: 'hockey'},
                  ]}
                  value={'usdt'}
                  onValueChange={value => console.log('Selected:', value)}
                  style={{
                    inputAndroid: {
                      backgroundColor: 'transparent',
                    },
                    iconContainer: {
                      top: -4,
                      right: 0,
                    },
                  }}
                  Icon={() => {
                    return (
                      <Entypo
                        name="chevron-small-down"
                        size={24}
                        color="black"
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>

          {/* rate */}
          <View className="w-full flex flex-row items-center justify-end mt-3">
            <Text className="font-bold  text-base ">Rate: 0.94</Text>
          </View>
        </View>

        <View className="border border-solid border-gray-300  mt-5 px-4 py-8 rounded-2xl mb-10">
          <Text className="font-semibold text-lg mb-6">
            Recent Transactions
          </Text>

          <NoData
            title="No Recent Transaction History"
            subText="Once you start making payment, you can keep track off your
              transactions here"
          />
        </View>
      </ScrollView>
      <BottomModal
        bottomSheetRef={bottomSheetRef}
        handleSnapPress={handleSnapPress}
        handleClosePress={handleClosePress}
        content={
          <View className="px-4">
            <View className="flex w-full flex-row items-center justify-between mb-10">
              <Text className="font-bold text-xl text-gray-700">
                Receive Stablecoin
              </Text>
              <TouchableOpacity
                onPress={handleClosePress}
                hitSlop={10}
                className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ">
                <Ionicons name="close-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View>
                <Text className="font-semibold teext-lg text-gray-700">
                  Currency
                </Text>
                <View className="flex flex-row items-center gap-4 mt-2">
                  <TouchableOpacity className=" w-[45vw] border border-solid border-gray-300 px-4 py-6  rounded-xl bg-gray-100 flex flex-row items-cennter justify-between">
                    <Text>USDC</Text>
                    <CheckBoxWithLabel />
                  </TouchableOpacity>

                  <TouchableOpacity className="w-[45vw] border border-solid border-gray-300 px-4 py-6  rounded-xl bg-gray-100 flex flex-row items-cennter justify-between">
                    <Text>USDC</Text>
                    <CheckBoxWithLabel />
                  </TouchableOpacity>
                </View>
              </View>

              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
              <Text>sample</Text>
            </ScrollView>
          </View>
        }
      />
    </SafeAreaView>
  );
}
