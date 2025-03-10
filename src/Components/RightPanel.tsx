import { useContext } from 'react';
import { ChatDetailsHomepage } from './ChatDetailsHomepage.tsx';
import { ChatDetail } from './ChatDetail.tsx';
import { ChatContext } from './MainComponent.tsx';

export const RightPanel=()=>{
  const context = useContext(ChatContext);
  const {isChatSelected}=context;
  return <>
     {!isChatSelected?<ChatDetailsHomepage/>:<ChatDetail/>}
  </>
}