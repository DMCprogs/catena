import React, { useState } from "react";
import {
  DivBoxDropDownSC,
  DivContainerDDSC,
  DivTextDDSC,
} from "../styled-components-css/styled.giftbox";

const CustomDropDown = ({ dropdownArray }) => {
  const [open, setOpen] = useState(false);
  const OpenDropDown = () => {
    setOpen(!open);
  };
  return (
    <>
      <DivBoxDropDownSC onClick={OpenDropDown}>
        {open && (
          <DivContainerDDSC>
            {dropdownArray.map((value, i) => (
              <DivTextDDSC key={i}>{value}</DivTextDDSC>
            ))}
          </DivContainerDDSC>
        )}
      </DivBoxDropDownSC>
    </>
  );
};

export default CustomDropDown;
