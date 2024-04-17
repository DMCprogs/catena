import React, { useState } from "react";
import {
  DivProductImage,
  ProductCardContainer,
  ProductCardName,
  ProductCardStoreName,
  ProductCardStoreName1,
  DivColumnsNameAndDDSC,
  DivBoxDropDownSC,
  DivContainerDDSC,
  DivBorderSC,
  DivTextDDSC,
} from "../styled-components-css/styled.giftbox";
import CustomDropDown from "./CustomDropDown";

const ItemGiftBox = () => {
  const dropdownValues = ["Share with heirs too"];

  return (
    <ProductCardContainer>
      <DivProductImage></DivProductImage>
      <DivColumnsNameAndDDSC>
        <ProductCardName>Name</ProductCardName>

        <CustomDropDown dropdownArray={dropdownValues} />
      </DivColumnsNameAndDDSC>
      <ProductCardStoreName>Type</ProductCardStoreName>
      <ProductCardStoreName1>Description...</ProductCardStoreName1>
    </ProductCardContainer>
  );
};

export default ItemGiftBox;
