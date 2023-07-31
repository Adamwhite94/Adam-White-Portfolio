import { ReactNode } from "react";
import {Icon, Information, InformationTitle, InformationContainer} from './Styles/ModuleStyles'
type AboutProps = {
  icon: ReactNode;
} 


type InfoProps = {
  title: string;
  info: string;

}


function IconList({icon}:AboutProps) {
    return <Icon>{icon}</Icon>;
    
 }

 

function InformationComponent({title, info}: InfoProps) {
  return (
    <InformationContainer>
       <InformationTitle>{title}</InformationTitle>
       <Information>{info}</Information>
    </InformationContainer>
 
  )
  
}



 export{
  IconList,
  InformationComponent
 }