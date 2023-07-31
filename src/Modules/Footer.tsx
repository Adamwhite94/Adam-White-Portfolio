import { FooterTitle } from "./Styles/ModuleStyles";


type AboutProps = {
    title: string
} 


 

function FooterComponent({title}: AboutProps) {
  return <FooterTitle>{title}</FooterTitle>;
  
  
}



export default FooterComponent