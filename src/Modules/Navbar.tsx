import {NavbarListElements, NavbarTitle} from "./Styles/ModuleStyles";

interface NavbarListProps {
    listItem: String;
    href?: string;
  }
  type NavbarTitleProps  = {
   title: string;
 }
 
  
  function NavbarList({listItem, href}: NavbarListProps) {
     return <NavbarListElements href = {href}>{listItem}</NavbarListElements>;
  }
  function NavbarTitleComponent({title}: NavbarTitleProps) {
   return <NavbarTitle>{title}</NavbarTitle>;
}
 

  export{
   NavbarList,
   NavbarTitleComponent
  }