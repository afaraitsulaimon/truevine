import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Nav,
  LogoHolder,
  MenuHolder,
  ForIcons,
} from "../assets/styles/NavBarStyles/NavBarStyle";

import TrueVineLogo from "../assets/images/truevine-logo.png";

const NavBar = () => {

    const [iconDisplay, setIconDisplay] = useState(false);

    const handleResponsiveIcon = () => {
        setIconDisplay(!iconDisplay);
    }
  return (
    <Nav>
      <LogoHolder>
        <img src={TrueVineLogo} alt="truevine" />
      </LogoHolder>


      <MenuHolder>
        <ul className={iconDisplay ? 'menuListShow menuList' : 'menuListShowHide menuList'}>
          <li>
            <Link>
              <button>About Us </button>
            </Link>
          </li>
          <li>
            <Link>
              <button>Our Service </button>
            </Link>
          </li>

          <li>
            {" "}
            <Link>
              <button>Contact Us </button>
            </Link>{" "}
          </li>
        </ul>
      </MenuHolder> 

      <ForIcons>
        {iconDisplay ? <AiOutlineClose size="1.5em" onClick={handleResponsiveIcon} /> : <AiOutlineMenu size="1.5em" onClick={handleResponsiveIcon} /> }
      
      </ForIcons>
    </Nav>
  );
};

export default NavBar;
