import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../assets/images/menu.svg"


const Header = () => {

	return (


    <>
      <Conatiner>
        <MenuContainer>
          <img src={Menu}></img>
        </MenuContainer>
      </Conatiner>
      </>
	);
};



const Conatiner = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 53px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 2px #0000000F;
opacity: 1;
`;

const MenuContainer = styled.div`
top: 10px;
left: 25px;
width: 32px;
height: 32px;
opacity: 1;
position:relative;
`;


export default Header;
