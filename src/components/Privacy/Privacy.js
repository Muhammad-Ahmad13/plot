import React from 'react'
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import PrivacyContent from './PrivacyContent';
const Privacy = () => {
  return (
    <div className="privacymain">
      <HomeHeader/>
      <PrivacyContent/>
      <HomeFooter/>
    </div>
  );
}
export default Privacy;