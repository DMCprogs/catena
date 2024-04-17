import React from "react";
import "../../styled-components-css/styled.menu";
import { BlurSC, MenuContentSC } from "../../styled-components-css/styled.menu";

const Menu = ({ items, active, setActive }, height) => {
  const onClickActive = (status) => (e) => {
    //console.log(">>>>>>>>>>>", status);
    setActive(status);
  };

  return (
    <div
      className={active ? "navmenu active" : "navmenu"}
      onClick={onClickActive(false)}
    >
      <BlurSC>
        <MenuContentSC height={height} onClick={(e) => e.stopPropagation()}>
          <ul>
            {items.map((item) => (
              <li>
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </MenuContentSC>
      </BlurSC>
    </div>
  );
};

export default Menu;
