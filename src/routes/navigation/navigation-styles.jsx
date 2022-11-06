import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin:5px;
`
export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 15px;
margin-bottom: 10px;
margin-right: 10px;
`
export const NavLinks = styled.div`
width: 50 %;
height: 100 %;
display: flex;
align-items: center;
justify-content: flex - end;
margin-right: 20px;
padding-top: 15px;
`
export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`
export const ImgContainer = styled.img`
height: 70px;
padding-left: 10px;
margin-top: -9px;
`