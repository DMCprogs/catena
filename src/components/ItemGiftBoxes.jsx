import React, { useState } from "react";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivColumnsButtonsSC } from "../styled-components-css/styled.giftbox";
import {
  DivColumnContentButton3SC,
  PresentCardContainer,
  DivTextButtonGiftBoxesSC,
  DivPresentImage,
  PresentCardName,
  PresentCardStoreName,
  DivTextButtonGiftBoxesRedSC,
  DivBowPresentSC,
  DivIconEyeSC,
  DivIconRedEyeSC,
  LinkGiftBoxesSC,
  DivLinkGiftBoxesSC,
} from "../styled-components-css/styled.giftboxes";
import Bow from "../img/Bow.svg";
import {
  DivSelectedCard,
  HiCheckSC,
  DivSelectedCard2,
} from "../styled-components-css/styled.giftboxcollection";

const ItemGiftBoxes = (all) => {
  const [ItemSelect, SetSelectItem] = useState(false);
  const SetSelectedItem = () => {
    SetSelectItem(!ItemSelect);
  };
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <PresentCardContainer
        onClick={SetSelectedItem}
        all={all}
        ItemSelect={ItemSelect}
        onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} 
      >
         {isShown?(
        <DivSelectedCard2 ItemSelect={ItemSelect} >
        <HiCheckSC color={"white"} />
      </DivSelectedCard2>
      ):null}
      {ItemSelect?(
        <DivSelectedCard ItemSelect={ItemSelect} >
        <HiCheckSC color={"white"} />
      </DivSelectedCard>
      ):null}
       
        <DivBowPresentSC Photo={Bow} ItemSelect={ItemSelect} />
        <DivPresentImage ItemSelect={ItemSelect} />
        <PresentCardName>Name of the heir</PresentCardName>
        <PresentCardStoreName>example@gmail.com</PresentCardStoreName>
        <DivLinkGiftBoxesSC>
          <LinkGiftBoxesSC to="/giftbox">
            <ButtonCustomSC
              width={"100%"}
              height={"42px"}
              primary={true}
              borderRadius={"500px"}
              ItemSelect={ItemSelect}
            >
              <DivColumnContentButton3SC>
                <DivTextButtonGiftBoxesSC>
                  View giftbox
                </DivTextButtonGiftBoxesSC>
                <DivIconEyeSC />
              </DivColumnContentButton3SC>
            </ButtonCustomSC>
          </LinkGiftBoxesSC>

          <LinkGiftBoxesSC to="/collection">
            <ButtonCustomSC
              width={"100%"}
              height={"42px"}
              borderRadius={"500px"}
              ItemSelect={ItemSelect}
            >
              <DivColumnContentButton3SC>
                <DivTextButtonGiftBoxesRedSC>
                  Add item’s
                </DivTextButtonGiftBoxesRedSC>
                <DivIconRedEyeSC />
              </DivColumnContentButton3SC>
            </ButtonCustomSC>
          </LinkGiftBoxesSC>
        </DivLinkGiftBoxesSC>
      </PresentCardContainer>
    </>
  );
};

export default ItemGiftBoxes;
