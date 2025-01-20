import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/header';
import PortalCard from '../components/portal-card';

const portalData = [
  {
    header: 'Portal in to stablecoin',
    swapText: 'Swap FIAT to STABLECOIN',
    desc: 'Buy stablecoin across multiple chains without logging into an exchange and trading P2P',
    headerClass: 'text-blue-600',
    cardClass: 'bg-blue-300/20',
  },
  {
    header: 'Portal out to stablecoin',
    swapText: 'Swap STABLECOIN to FIAT',
    desc: 'Use your stablecoin wallet to receive g7 currencies in your bank accoun without going through complex processes',
    headerClass: 'text-amber-700',
    cardClass: 'bg-amber-950/20', // TODO:to work on color
  },
];

export default function PortalAccount() {
  return (
    <SafeAreaView className="flex flex-1 bg-gray-100 ">
      {/* header */}
      <Header title="Portal Accounts" />

      <ScrollView
        className="flex flex-1 h-full mx-3 py-5 pb-[100px] "
        indicatorStyle="white">
        {portalData?.map((portal, idx) => (
          <PortalCard key={idx} portal={portal} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
