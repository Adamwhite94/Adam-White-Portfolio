import {NavbarList, NavbarTitleComponent} from "../../Modules/Navbar";
import { NavbarContainer, NavbarGroup} from "./NavbarComponentStyles";


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitleComponent title="Adam White" />
      <NavbarGroup>
        <NavbarList href = "#Home" listItem="Home" />
        <NavbarList href = "#Projects" listItem="My Projects" />
        <NavbarList href = "#About" listItem="About" />
        <NavbarList href = "#Skills" listItem="Skills" />
      </NavbarGroup>
    </NavbarContainer>
  );
};

export default Navbar;
