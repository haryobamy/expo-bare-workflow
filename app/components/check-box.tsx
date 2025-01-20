import {View, Text} from 'react-native';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';
import React, {useState} from 'react';

type Props = {
  label?: string;
} & CheckBoxProps;

export default function CheckBoxWithLabel({label, ...props}: Props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  return (
    <View className="flex  items-center gap-2.5 flex-row-reverse">
      <CheckBox
        {...props}
        // boxType="square"
        // value={toggleCheckBox}
        // onValueChange={newValue => setToggleCheckBox(newValue)}
        style={{
          width: 14,
          height: 14,
        }}
      />
      {label && <Text className="text-base">{label}</Text>}
    </View>
  );
}
