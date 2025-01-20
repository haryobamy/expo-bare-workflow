import React from 'react';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';

type Props = {
  className?: string;
} & PickerSelectProps;

export default function SelectInput({className, ...props}: Props) {
  return <RNPickerSelect {...props} items={props.items} />;
}
