import React, { useContext, useState, useEffect } from "react";

import {
  DivContainerFooterSC,
  DivFooterLinksSC,
  DivFooterMottoSC,
  DivFooterRightsSC,
  DivFooterSocialsSC,
  DivFooterWrapSC,
  DivLinkImgs,
  DivLinksLeftPanelSC,
  DivLinksPanelSC,
  DivLinksPanelsSC,
  DivLinksRightPanelSC,
  DivSocialImgs,
  H1FooterBottomTextRights,
  H1FooterText,
  H1MottoFirstWText,
  H1MottoText,
  DivMadeByBoxSC,
  DivMadeByLogoSC,
  GridTextMadeBySC,
  PTextMadeBySC,
  PTextCompanySC
} from "../styled-components-css/styled.footer";

import GlobalDispatchContext from "../global_dispatch_context";

import Facebook from "../img/facebook.svg";
import Insta from "../img/instagram.svg";
import Linkedin from "../img/linkedin.svg";
import Moralis from "../img/Moralis.svg";
import Pint from "../img/pinterest.svg";
import Tiktok from "../img/tiktok.svg";
import Twit from "../img/twitter.svg";
import Youtube from "../img/youtube.svg";
import Mail from "../img/Mail.svg";
import Phone from "../img/Phone.svg";

const Footer = (props) => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isHome } = state;
  const { isFullPageShow } = props;

  return (
    <>
      {isHome || isFullPageShow ? (
        <DivFooterWrapSC>
          <DivContainerFooterSC>
          <DivMadeByBoxSC>
          {/* <a href="https://www.cyberzenlabs.com/">
            <DivMadeByLogoSC />
          </a> */}
          {/* <GridTextMadeBySC>
            <PTextMadeBySC>made by</PTextMadeBySC>
            <PTextCompanySC>Cyberzen Labs</PTextCompanySC>
          </GridTextMadeBySC> */}
        </DivMadeByBoxSC>
            <DivFooterLinksSC>
              <DivLinksPanelsSC>
                <DivLinkImgs Photo={Phone} />
                <DivLinksPanelSC>
                  <H1FooterText>CALL US</H1FooterText>
                  <H1FooterText>800.879.3337</H1FooterText>
                  <H1FooterText> Monday - Friday 8am to 4pm PST</H1FooterText>
                </DivLinksPanelSC>
              </DivLinksPanelsSC>
              <DivLinksPanelsSC>
                <DivLinkImgs Photo={Mail} />
                <DivLinksPanelSC>
                  <H1FooterText>EMAIL US</H1FooterText>
                  <H1FooterText>support@mountainroseherbs.com</H1FooterText>
                </DivLinksPanelSC>
              </DivLinksPanelsSC>
            </DivFooterLinksSC>

            <H1MottoText>
              <H1MottoFirstWText>CATENA</H1MottoFirstWText> is a connection from
              the past to the present to the future.
            </H1MottoText>
          </DivContainerFooterSC>
          <DivFooterRightsSC>
            <H1FooterBottomTextRights>
              Copyright 2022 Catena. All Rights Reserved.
            </H1FooterBottomTextRights>
          </DivFooterRightsSC>
        </DivFooterWrapSC>
      ) : null}
    </>
  );
};

export default Footer;
