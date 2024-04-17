import React from "react";
import ItemGiftBox from "../components/ItemGiftBox";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivContainerGiftBoxSC } from "../styled-components-css/styled.DEFAULT";
import {
  DivBoxRowsGiftBoxSC,
  DivTitleGiftBoxSC,
  DivColumnsButtonsSC,
  DivTextButtonSC,
  DivTextButtonWhiteSC,
  DivContainerColumnsProductsSC,
  DivColumnContentButtonSC,
  DivIconPlusSC,
  DivColumnContentButton1SC,
  DivIconPenSC,
} from "../styled-components-css/styled.giftbox";

import { BsPlusLg } from "react-icons/bs";
import { LinkHomeBoxSC } from "../styled-components-css/styled.home";
const GiftBox = () => {
  return (
    <DivContainerGiftBoxSC>
      <DivBoxRowsGiftBoxSC>
        <DivTitleGiftBoxSC>Giftbox for Vasily Popkin</DivTitleGiftBoxSC>
        <DivColumnsButtonsSC>
          <LinkHomeBoxSC to="/collection">
            <ButtonCustomSC
              width={"auto"}
              height={"62px"}
              padding={"18px 36px"}
              primary={true}
              borderRadius={"500px"}
            >
              <DivColumnContentButtonSC>
                <DivTextButtonSC>Add item</DivTextButtonSC>
                {/* <DivIconPlusSC /> */}
                <BsPlusLg size={"25px"} color={"#fff"} />
              </DivColumnContentButtonSC>
            </ButtonCustomSC>
          </LinkHomeBoxSC>
          <LinkHomeBoxSC to="/heirprofile">
            <ButtonCustomSC
              width={"auto"}
              padding={"18px 36px"}
              height={"62px"}
              borderRadius={"500px"}
            >
              <DivColumnContentButton1SC>
                <DivTextButtonWhiteSC>
                  Edit the heir's profile
                </DivTextButtonWhiteSC>

                <DivIconPenSC />
              </DivColumnContentButton1SC>
            </ButtonCustomSC>
          </LinkHomeBoxSC>
        </DivColumnsButtonsSC>
        <DivContainerColumnsProductsSC>
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
          <ItemGiftBox />
        </DivContainerColumnsProductsSC>
      </DivBoxRowsGiftBoxSC>
    </DivContainerGiftBoxSC>
  );
};

export default GiftBox;
