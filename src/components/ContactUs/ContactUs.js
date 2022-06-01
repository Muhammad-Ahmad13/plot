import React from 'react';
import ContactFaq from './ContactFaq';
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import Contact from './Contact';
import "./ContactUs.css";
import ContactUsForm from './ContactUsForm';
const ContactUs = () => {
  return (
    <>
        <HomeHeader/>
        <Contact/>
        <ContactFaq/>
        <HomeFooter/>
    </>
  )
}
export default ContactUs;
