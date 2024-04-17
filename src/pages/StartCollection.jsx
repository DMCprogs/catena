import React, { useState, useEffect, useContext } from "react";
import ItemGiftBoxCollection from "../components/ItemGiftBoxCollection";
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
import GlobalDispatchContext from "../global_dispatch_context";
//
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
import { LinkHomeBoxSC } from "../styled-components-css/styled.home";
const StartCollection = (props) => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const [all, setAll] = useState(false);
  const [listNft, setListNft] = useState([]);
  //

  const ChooseAll = () => {
    setAll(!all);
  };

  useEffect(() => {

    localStorage.getItem("listNft")
    let list = []
    if (localStorage.getItem("listNft")) {
      list = JSON.parse(localStorage.getItem("listNft"))
    }
    setListNft(list)

  }, [])

  const nodeComponent = listNft.map((item, i) => {
    return(
        <ItemGiftBoxCollection all={all} onClick={ChooseAll} data={item} />
    )
  })

  return (
    <DivContainerFixedSC>
      <DivBoxRowsGiftBoxSC>
        <DivTitleGiftBoxSC>Your Collection</DivTitleGiftBoxSC>
        <GridSettingsSC>
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
            <CustomInputCheckBox />
          </DivBoxInputCheckboxSC>
        </GridSettingsSC>
        <DivContainerColumnsProductsSC>
          {/* {products.map((product) => {
          return [...Array(5)].map((asd) => {
            return  <ItemGiftBoxCollection all={all} isSelected={isSelected} _onClick={_onClick} ProductsCount={ProductsCount}/>;
          });
        })} */}
          {
            nodeComponent
          }
        </DivContainerColumnsProductsSC>
      </DivBoxRowsGiftBoxSC>
    </DivContainerFixedSC>
  );
};

export default StartCollection;
