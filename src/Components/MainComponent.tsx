import React,{useState} from 'react';
import '../CSS/MainComponent.css';
import {OtherMenuOptions} from '../Components/OtherMenuOptions.tsx';
import { LeftPanel} from './LeftPanel.tsx';
import { RightPanel } from './RightPanel.tsx';
import { DUMMY_DATA } from '../DUMMY_DATA.tsx';

export const MainComponent = ()=>{
  const [users, setUsers] = useState(DUMMY_DATA.users);
return <div className='main-component-container'>
  <OtherMenuOptions/>
  <LeftPanel users={users}/>
  <RightPanel/>
  {/* <ChatDetails/> */}
</div>
}