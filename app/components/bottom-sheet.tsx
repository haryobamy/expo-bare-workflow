import {View, Text} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet, {useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  handleSnapPress: (value: any) => void;
  handleClosePress: (value: any) => void;
  content: React.ReactNode;
};

export default function BottomModal({
  bottomSheetRef,
  handleClosePress,
  handleSnapPress,
  content,
}: Props) {
  const [enableContentPanningGesture, setEnableContentPanningGesture] =
    useState(true);
  const [enableHandlePanningGesture, setEnableHandlePanningGesture] =
    useState(true);

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const handleSheetChange = useCallback((index: number) => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChange', index);
  }, []);

  const handleSheetAnimate = useCallback(
    (fromIndex: number, toIndex: number) => {
      // eslint-disable-next-line no-console
      console.log('handleSheetAnimate', `from ${fromIndex} to ${toIndex}`);
    },
    [],
  );

  const handleEnableContentPanningGesturePress = useCallback(() => {
    setEnableContentPanningGesture(state => !state);
  }, []);
  const handleEnableHandlePanningGesturePress = useCallback(() => {
    setEnableHandlePanningGesture(state => !state);
  }, []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      animationConfigs={animationConfigs}
      animateOnMount={true}
      enableContentPanningGesture={enableContentPanningGesture}
      enableHandlePanningGesture={enableHandlePanningGesture}
      enableDynamicSizing={false}
      // onChange={handleSheetChange}
      // onAnimate={handleSheetAnimate}
    >
      {/* <ContactList key={`${type}.list`} type={type} count={count} /> */}
      {content}
    </BottomSheet>
  );
}
