import React from 'react'
import ContactFaq from '../ContactUs/ContactFaq';
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import ReviewsMain from '../HomePage/Reviews/ReviewsMain';
import PricingHeader from './PricingHeader';
import WalterMain from './WalterMain';
import { Link } from 'react-router-dom';
import WalterDirection from './WalterDirection';
const PricingMian = () => {
  return (
    <div>
        <HomeHeader/>
        <PricingHeader/>
        <WalterMain/>
        <ReviewsMain/>
        <div>
        <ContactFaq/>
        <div className="contactPricmain waltercompanc text-center">
            <Link to ="">Help Center</Link>
        </div>
        </div>
        <WalterDirection/>
    
        <HomeFooter/>
    </div>
  );
}
export default PricingMian;