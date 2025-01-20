import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {COLORS, icons} from '../../constants';
import Home from '../screen/home';
// import {Tabs} from 'expo-router';
import {Image} from 'react-native';
import OrderDelivery from '../screen/wallet';
import Checkout from '../screen/portal-accounts';
import Profile from '../screen/transactions';
import PortalAccount from '../screen/portal-accounts';
import Wallet from '../screen/wallet';
import Faq from '../screen/faq';
import Transactions from '../screen/transactions';

const Tabs = createBottomTabNavigator();

const bottomNav = [
  {
    name: 'home',
  },
];

export default function Tab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary, // for the link name
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        component={Wallet}
        options={{
          title: 'Wallet',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.hotdog}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portal accountt"
        component={PortalAccount}
        options={{
          title: 'Portal Accounts',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.salad}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        component={Transactions}
        options={{
          title: 'Transactions',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.salad}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Help & FAQ"
        component={Faq}
        options={{
          title: 'Help & FAQ',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.salad}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
