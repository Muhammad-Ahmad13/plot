import React from 'react';
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import ProposalHeader from './ProposalHeader';
import ProposSearch from './ProposSearch';

const ProposalMain = () => {
  return (
    <div>
        <HomeHeader/>
        <ProposalHeader/>
        <ProposSearch/>
        <HomeFooter/>
    </div>
  )
}

export default ProposalMain;