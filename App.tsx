import React, {useEffect, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Tabs from './app/navigation/tab';
import './global.css';
import OrderDelivery from './app/screen/wallet';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {MenuProvider} from 'react-native-popup-menu';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const persistor = persistStore(store);

const Stack = createStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <MenuProvider>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}
                  initialRouteName={'Home'}>
                  <Stack.Screen name="Home" component={Tabs} />
                  {/* <Stack.Screen name="Restaurant" component={Restaurant} /> */}
                  {/* <Stack.Screen name="OrderDelivery" component={OrderDelivery} /> */}
                </Stack.Navigator>
              </NavigationContainer>
            </MenuProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
