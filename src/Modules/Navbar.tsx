import {NavbarListElements} from "./Styles/ModuleStyles";

interface NavbarListProps {
    listItem: String;
    href?: string;
  }
 
  
  function NavbarList({listItem, href}: NavbarListProps) {
     return <NavbarListElements href = {href}>{listItem}</NavbarListElements>;
       
     
  }
 

  export{
   NavbarList
  }