import React, { useState } from "react";
import ItemGiftBoxCollection from "../components/ItemGiftBoxCollection";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivContainerFixedSC } from "../styled-components-css/styled.DEFAULT";
import {
  DivBoxRowsGiftBoxSC,
  DivTitleGiftBoxSC,
  DivTextButtonSC,
  DivContainerColumnsProductsSC,
} from "../styled-components-css/styled.giftbox";
import CustomInputCheckBox from "../components/CustomInputCheckBox";
import {
  DivImageIconSC,
  DivCustomTextSC,
  DivPinkCartIconSC,
  DivCustomTextButtonSC,
  DivCustomTextButtonWhiteSC,
  DivBoxInputCheckboxSC,
  GridButtonItemsSC,
  GridSettingsCollectionSC,
  DivCustomTextButton1SC,
  DivHoverButonSC,
} from "../styled-components-css/styled.StartCollection";
import { LinkHomeBoxSC } from "../styled-components-css/styled.home";
const Collection = () => {
  const [all, setAll] = useState(false);
  const ChooseAll = () => {
    setAll(!all);
  };

  return (
    <DivContainerFixedSC>
      <DivBoxRowsGiftBoxSC>
        <DivTitleGiftBoxSC>Your Collection</DivTitleGiftBoxSC>
        <GridSettingsCollectionSC>
          <LinkHomeBoxSC to="/createanitem">
            <ButtonCustomSC
              width={"220px"}
              height={"62px"}
              primary={true}
              borderRadius={"500px"}
            >
              <GridButtonItemsSC>
                <DivTextButtonSC>Create Item</DivTextButtonSC>
                <DivImageIconSC />
              </GridButtonItemsSC>
            </ButtonCustomSC>
          </LinkHomeBoxSC>
          <DivCustomTextSC>View the instructions</DivCustomTextSC>

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
       
          <LinkHomeBoxSC to="/startcollection">
            <ButtonCustomSC
              width={"200px"}
              height={"42px"}
              primary={false}
              borderRadius={"500px"}
            >
              <DivCustomTextButton1SC>
                Back to collection
              </DivCustomTextButton1SC>
            </ButtonCustomSC>
          </LinkHomeBoxSC>
          <LinkHomeBoxSC to="/giftboxes">
            <ButtonCustomSC
              width={"170px"}
              height={"42px"}
              primary={true}
              borderRadius={"500px"}
            >
              <DivCustomTextButtonWhiteSC>
                Send in a giftbox
              </DivCustomTextButtonWhiteSC>
            </ButtonCustomSC>
          </LinkHomeBoxSC>
          <div>Select all</div>
          <DivBoxInputCheckboxSC onClick={ChooseAll}>
            <CustomInputCheckBox isSelected={all} />
          </DivBoxInputCheckboxSC>
        </GridSettingsCollectionSC>
        <DivContainerColumnsProductsSC>
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
          <ItemGiftBoxCollection all={all} />
        </DivContainerColumnsProductsSC>
      </DivBoxRowsGiftBoxSC>
    </DivContainerFixedSC>
  );
};

export default Collection;
