import React, { useState, useEffect, useContext } from "react";
import { DivContainerFixedSC, DivContainerSC } from "../styled-components-css/styled.DEFAULT";
import {
    GrifContentSC,
    H1TitleSC,
    DivTextContentSC,
    H1TextSizeSC,
    GridTextSC

} from "../styled-components-css/styled.404";
const Page_404 = (props) => {

  return (
    <DivContainerFixedSC>
    <DivContainerSC>
    <GrifContentSC>
        <GridTextSC>

        <div/>
        <DivTextContentSC>

        <H1TitleSC fontSizeMiddle="70px" fontSizeSmall768="40px">
        404 <H1TitleSC fontSize="60px" fontSizeMiddle="46px" fontSizeSmall768="26px" > Not Found</H1TitleSC>
        </H1TitleSC>
        <H1TitleSC fontSize="35px" fontWeight="500" fontSizeMiddle="26px" fontSizeSmall768="16px" fontSizeSmall480="12px">
        The requested URL was not found on this server.
        </H1TitleSC>
        <H1TitleSC fontSize="35px" fontWeight="500" fontSizeMiddle="26px" fontSizeSmall768="16px" fontSizeSmall480="12px">
        That's all we know
        </H1TitleSC>
        </DivTextContentSC>
        <div/>
        </GridTextSC>

    </GrifContentSC>
    </DivContainerSC>
    </DivContainerFixedSC>
  );
};

export default Page_404;
