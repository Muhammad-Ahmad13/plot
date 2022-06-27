import React from 'react'
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import TermsContent from './TermsContent';
const Terms = () => {
  return (
    <div className="termsmain">
      <HomeHeader/>
      <TermsContent/>
      <HomeFooter/>
    </div>
  );
}
export default Terms;