import React, { useState } from "react";
import CustomInputCheckBox from "../components/CustomInputCheckBox";
import ItemGiftBoxes from "../components/ItemGiftBoxes";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivContainerFixedSC } from "../styled-components-css/styled.DEFAULT";
import {
  DivTextButtonSC,
  LinkAddanHeirSC,
} from "../styled-components-css/styled.giftbox";
import {
  DivIconPresentSC,
  DivBoxRowsGiftBoxesSC,
  DivContainerColumnsPresentsSC,
  DivColumnContentButtonPresentSC,
  DivColumnsButtonsGiftboxesSC,
  DivAdaptiveForButtons,
  DivAutoWidthSC,
  DivSelectSC,
} from "../styled-components-css/styled.giftboxes";
import {
  DivBoxInputCheckboxSC,
  DivCustomTextButtonSC,
  DivPinkCartIconSC,
  GridButtonItemsSC,
} from "../styled-components-css/styled.StartCollection";
import Timer from "../components/Timer";

const GiftBoxes = () => {
  const [all, setAll] = useState(false);
  const ChooseAll = () => {
    setAll(!all);
  };
  const time = new Date();
  time.setSeconds(time.getSeconds() + 7775999);
  return (
    <DivContainerFixedSC>
      <DivBoxRowsGiftBoxesSC>
        <Timer expiryTimestamp={time} />
        <DivColumnsButtonsGiftboxesSC>
          <LinkAddanHeirSC to="/addanheir">
            <DivAutoWidthSC>
              <ButtonCustomSC
                width={"100%"}
                height={"62px"}
                primary={true}
                borderRadius={"500px"}
              >
                <DivColumnContentButtonPresentSC>
                  <DivTextButtonSC>Create giftbox</DivTextButtonSC>
                  <DivIconPresentSC />
                </DivColumnContentButtonPresentSC>
              </ButtonCustomSC>
            </DivAutoWidthSC>
          </LinkAddanHeirSC>
          <DivAdaptiveForButtons>
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
            <DivSelectSC>Select all</DivSelectSC>
            <DivBoxInputCheckboxSC onClick={ChooseAll}>
              <CustomInputCheckBox />
            </DivBoxInputCheckboxSC>
          </DivAdaptiveForButtons>
        </DivColumnsButtonsGiftboxesSC>
        <DivContainerColumnsPresentsSC>
          <ItemGiftBoxes all={all} />
          <ItemGiftBoxes all={all} />
          <ItemGiftBoxes all={all} />
          <ItemGiftBoxes all={all} />
          <ItemGiftBoxes all={all} />
          <ItemGiftBoxes all={all} />
        </DivContainerColumnsPresentsSC>
      </DivBoxRowsGiftBoxesSC>
    </DivContainerFixedSC>
  );
};

export default GiftBoxes;
