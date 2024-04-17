import React from "react";
import ItemGiftBox from "../components/ItemGiftBox";
import {
  DivContainerFixedSC,
  DivContainerGiftBoxSC,
} from "../styled-components-css/styled.DEFAULT";
import {
  DivTitleGiftBoxSC,
  DivContainerColumnsProductsSC,
  DivBoxRowsGiftBoxSC,
} from "../styled-components-css/styled.giftbox";
import {
  DivBoxRowsGiftBoxForYouSC,
  DivBoxTextDescriptonSC,
} from "../styled-components-css/styled.giftboxforyou";

const GiftBoxForYou = () => {
  return (
    <DivContainerGiftBoxSC>
      <DivBoxRowsGiftBoxSC>
        <DivTitleGiftBoxSC>Giftbox from Nicolay Ironov</DivTitleGiftBoxSC>
        <DivBoxTextDescriptonSC>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
          ullamcorper erat ligula ac ullamcorper accumsan sed malesuada. Massa,
          tellus nullam eu ornare vulputate. Faucibus egestas ultrices
          adipiscing risus molestie tempor est, felis. Ipsum viverra vel et sed.
        </DivBoxTextDescriptonSC>
        <DivContainerColumnsProductsSC>
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

export default GiftBoxForYou;
