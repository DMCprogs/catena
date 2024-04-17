import React, { useState } from "react";
import YourHeirsItem from "../components/YourHeirsItem";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivContainerFixedSC } from "../styled-components-css/styled.DEFAULT";
import {
  DivBoxRowsGiftBoxSC,
  DivTitleGiftBoxSC,
  DivColumnsButtonsSC,
  DivTextButtonSC,
  DivTextButtonWhiteSC,
  DivContainerColumnsProductsSC,
} from "../styled-components-css/styled.giftbox";
import CustomInputCheckBox from "../components/CustomInputCheckBox";
import {
  DivImageIconSC,
  GridSettingsSC,
  DivCustomTextSC,
  ButtonCustomWhiteSC,
  DivCustomTextWhiteSC,
  DivPinkCartIconSC,
  DivCustomTextButtonSC,
  DivCustomTextButtonWhiteSC,
  CheckboxCustomSC,
  GrilLeftColumnSC,
  GrilRightColumnSC,
  DivBoxInputCheckboxSC,
  GridButtonItemsSC,
} from "../styled-components-css/styled.StartCollection";

import {
  GridYourHeirsSettingsSC,
  GridYourHeirsItemsSC,
  DivTextButtonAddAnHeirSC,
} from "../styled-components-css/styled.YourHeirs";
import { LinkHomeBoxSC } from "../styled-components-css/styled.home";
const YourHeirs = (props) => {
  function testOnClick() {}
  const [all, setAll] = useState(false);
  const ChooseAll = () => {
    setAll(!all);
  };

  return (
    <DivContainerFixedSC>
      <DivBoxRowsGiftBoxSC>
        <DivTitleGiftBoxSC>Your heir’s</DivTitleGiftBoxSC>
        <GridYourHeirsSettingsSC>
          <LinkHomeBoxSC to="/addanheir">
            <ButtonCustomSC
              width={"220px"}
              height={"62px"}
              primary={true}
              borderRadius={"500px"}
            >
              <DivTextButtonAddAnHeirSC>Add new heir</DivTextButtonAddAnHeirSC>
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

          <div>Select all</div>
          <DivBoxInputCheckboxSC onClick={ChooseAll}>
            <CustomInputCheckBox />
          </DivBoxInputCheckboxSC>
        </GridYourHeirsSettingsSC>
        <GridYourHeirsItemsSC>
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
          <YourHeirsItem all={all} />
        </GridYourHeirsItemsSC>
      </DivBoxRowsGiftBoxSC>
    </DivContainerFixedSC>
  );
};

export default YourHeirs;
