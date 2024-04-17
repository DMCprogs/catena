import React, { useState, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";

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
  DivSelectSC,
  DivSelectedCard,
  HiCheckSC,
  YourHeirsItemContainer,
  DivYourHeirsImage,
  GridContentSC,
  GridNameEmailSC,
  ProductYourHeirName,
  DivYourHeirsEmail,
  DivYourHeirsDescription,
  GridButtonsSC,
  DivIconEyeSC,
} from "../styled-components-css/styled.YourHeirsItem";
import {
  DivPinkCartIconSC,
  DivCustomTextButtonSC,
  GridButtonItemsSC,
  DivCustomTextButtonWhiteSC,
} from "../styled-components-css/styled.StartCollection";
const YourHeirsItem = (all) => {
  const [open, setOpen] = useState(false);
  const OpenDropDown = () => {
    setOpen(!open);
  };

  const [ItemSelect, SetSelectItem] = useState(false);
  const SetSelectedItem = () => {
    SetSelectItem(!ItemSelect);
  };

  return (
    <YourHeirsItemContainer
      onClick={SetSelectedItem}
      ItemSelect={ItemSelect}
      all={all}
    >
      <DivSelectedCard ItemSelect={ItemSelect}>
        <HiCheckSC color={"white"} />
      </DivSelectedCard>
      <DivYourHeirsImage ItemSelect={ItemSelect}></DivYourHeirsImage>
      <GridContentSC>
        <GridNameEmailSC>
          <ProductYourHeirName>Vasiliy Pupkin</ProductYourHeirName>
          <DivYourHeirsEmail>example@gmail.com</DivYourHeirsEmail>
        </GridNameEmailSC>

        <DivYourHeirsDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lorem
          suscipit sed pharetra, purus. Tortor sit rhoncus nam pharetra ante sed
          at in feugiat viverra...
        </DivYourHeirsDescription>

        <GridButtonsSC>
          <ButtonCustomSC
            width={"120px"}
            height={"42px"}
            primary={false}
            borderRadius={"500px"}
          >
            <GridButtonItemsSC>
              <DivCustomTextButtonSC>Delete</DivCustomTextButtonSC>
              <DivPinkCartIconSC />
            </GridButtonItemsSC>
          </ButtonCustomSC>
          <ButtonCustomSC
            width={"200px"}
            height={"42px"}
            primary={true}
            borderRadius={"500px"}
          >
            <GridButtonItemsSC>
              <DivCustomTextButtonWhiteSC to="/giftboxes">
                Send in a giftbox
              </DivCustomTextButtonWhiteSC>
              <DivIconEyeSC />
            </GridButtonItemsSC>
          </ButtonCustomSC>
        </GridButtonsSC>
      </GridContentSC>
    </YourHeirsItemContainer>
  );
};

export default YourHeirsItem;
