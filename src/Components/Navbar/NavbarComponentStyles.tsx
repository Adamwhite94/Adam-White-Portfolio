import styled from 'styled-components'
import { device } from '../../Breakpoints/Breakpoints';

const NavbarContainer = styled.aside`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  display:flex;
align-items: center;
justify-content: space-between;
}
`;

const NavbarGroup = styled.ul`
display:flex;
flex-direction: row;
align-items: center;
padding-right: 2rem;
gap : 0.5rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    display: none;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
   display: none;
}


`;






export {NavbarContainer, NavbarGroup}