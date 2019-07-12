import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from "react";

const logo = require('../../SVG/logo.svg');
const bar = require('../../SVG/bar.svg');

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const SideBarWrapper = styled.div`
  z-index: 2;
  flex: 0 1 7vh;
  height: 100vh;
  background-color: #1e7c74;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PageContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarNavElement = styled(Link)`
  text-decoration: none;
  display: table-cell;
  text-align: center;
  :hover{
    background-color: #30cbc2;
  }
`;

export const LinkText = styled(Link)`
  text-decoration: none;
`;

export const Icon = styled.i`
  display: table-cell;
  vertical-align: middle;
  height: 7vh;
  width:10%;
  font-style: normal;
  font-size: 1.3em;
`;

export const SideBarElement = styled.div`
  text-decoration: none;
  display: table-cell;
  text-align: center;
  :hover{
    background-color: #30cbc2;
  }
`;

export const SideBarContentWrapper = styled.div`
   position: relative;
   left: 10vh; 
   padding: 2vh;
   width: auto;
   height: 100vh;
`;

export const TopBar = styled.div`
  display: flex;
  height: 109px;
  position: relative;
  top: -1vh
`;

export const Logo = styled.div`
  flex: 1 0 600px;
`;

export const Bar = styled.div`
  flex: 1 1 100%;
`;

