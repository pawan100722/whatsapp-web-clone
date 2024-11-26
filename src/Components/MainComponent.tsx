import React from 'react';
import '../CSS/MainComponent.css';
import {OtherMenuOptions} from '../Components/OtherMenuOptions.tsx';
import {ChatList} from '../Components/ChatList.tsx';
import {ChatDetails} from '../Components/ChatDetails.tsx';

export const MainComponent = ()=>{
return <div className='main-component-container'>
  <OtherMenuOptions/>
  <ChatList/>
  <ChatDetails/>
</div>
}