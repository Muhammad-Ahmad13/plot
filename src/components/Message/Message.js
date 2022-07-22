import React from 'react';
import HomeFooter from '../HomePage/HomeFooter/HomeFooter';
import HomeHeader from '../HomePage/HomeHead/HomeHeader';
import MessageCard from './MessageCard';
const Message = ()=> {
  return (
    <>
    <HomeHeader />
    <MessageCard 
     mess = "Kindly Check your mail"/>
    <HomeFooter />
    </>
  )
}
export default Message