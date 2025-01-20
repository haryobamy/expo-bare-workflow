import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
import CheckBoxWithLabel from '../components/check-box';
import Accordion from '../components/accordion';

const faqs = [
  {
    id: 1,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 2,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 4,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 5,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 6,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 7,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 8,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 9,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 10,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 11,
    title: 'What is Shiga ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
  {
    id: 12,
    title: 'How do I receive local currency (Portal Out) ?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolores omnis dicta ex laudantium dolore illo non perspiciatis soluta, nam sit dolorem expedita officiis placeat tempora dolorum voluptate, amet assumenda! Libero possimus quas corrupti tenetur blanditiis similique cumque ut facilis?',
  },
];

export default function Faq() {
  const renderItem = ({item}: any) => {
    return <Accordion item={item} />;
  };

  return (
    <SafeAreaView className="flex flex-1 bg-gray-100 ">
      {/* header */}
      <Header title="Frequently Asked Questions" />
      <View className="mx-3 mt-5 ">
        <TextInput
          placeholder="Search FAQ with any keyword ...."
          className="border border-solid border-gray-400 rounded-xl h-16 px-3 placeholder:text-[22px] placeholder:font-medium placeholder:text-gray-400"
        />
        <View className="flex flex-col mt-3 items-center ">
          <Text className="text-gray-900 text-base font-bold mb-2">
            Filter By:
          </Text>
          <View className="flex flex-row flex-wrap gap-x-2.5 gap-y-3 mx-16">
            <CheckBoxWithLabel boxType="square" label="All" />
            <CheckBoxWithLabel boxType="square" label="About Shiga" />
            <CheckBoxWithLabel boxType="square" label="Key benfits" />
            <CheckBoxWithLabel boxType="square" label="How to use shiga" />
            <CheckBoxWithLabel boxType="square" label="Contact & Support" />
          </View>
        </View>
      </View>

      <ScrollView
        className="flex flex-1 h-full mx-3 py-5 pb-[100px] "
        indicatorStyle="white">
        <FlatList
          data={faqs}
          contentContainerClassName="flex gap-4 flex-1 h-full pb-[50px]  "
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
