import React, { useEffect, useState } from "react";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import { DivContainerHomeSC } from "../styled-components-css/styled.DEFAULT";
import { TextHomeBoxSC } from "../styled-components-css/styled.home";
import {
  DivContainerSlidesSC,
  DivTitleTextSC,
  DivBoxTitleAndPagesSC,
  DivBoxColumnsPagesSC,
  DivPage1SC,
  DivBoxPageAndDotsSC,
  DivDotSC,
  DivBoxPageAndDots1SC,
  DivBoxContentColumnsSC,
  DivBoxLeftPenalSC,
  DivFotoSC,
  DivBoxRightPenalSC,
  DivBoxTextNFTSC,
  DivBoxTextcCeateNFTSC,
  DivBoxTextLinkSC,
  DivFoto1SC,
  DivBoxRightPenal1SC,
  DivBoxTextNFT1SC,
  DivFoto2SC,
  DivBoxText1NFTSC,
  DivBoxTextcCeate1NFTSC,
  DivBoxTextcCeate0NFTSC,
  DivFoto3SC,
  DivBoxLeftPenal3SC,
  DivBoxTextNFT3SC,
  DivBoxTextcCeate3NFTSC,
  DivBoxTextNFT4SC,
  SpanFractionSC,
  DivProgressBarRowSC,
  DivFractionBoxSC,
  ButtonStepSC,
  DivStepButtonSC,
  DivContentListSC,
} from "../styled-components-css/styled.slides";
import styled from "styled-components";

const Slides = () => {
  const listContent = [
    {
      page: (
        <>
          <DivBoxContentColumnsSC>
            <DivBoxLeftPenalSC>
              <DivFotoSC src="/default-images/Wallet.png" />
            </DivBoxLeftPenalSC>
            <DivBoxRightPenalSC>
              <DivBoxTextNFTSC>Create an NFT wallet</DivBoxTextNFTSC>
              <DivBoxTextcCeateNFTSC>
                To create an NFT wallet, follow the link below and follow the
                instructions.
              </DivBoxTextcCeateNFTSC>
              <DivBoxTextLinkSC to="#">Link</DivBoxTextLinkSC>
            </DivBoxRightPenalSC>
          </DivBoxContentColumnsSC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxContentColumnsSC>
            <DivBoxLeftPenalSC>
              <DivFoto1SC src="/default-images/Step.png" />
            </DivBoxLeftPenalSC>
            <DivBoxRightPenal1SC>
              <DivBoxTextNFT1SC>
                Connect your NFT wallet to this service
              </DivBoxTextNFT1SC>
              <DivBoxTextcCeate0NFTSC>
                The following steps will allow you to connect an NFT wallet to
                this service
              </DivBoxTextcCeate0NFTSC>
            </DivBoxRightPenal1SC>
          </DivBoxContentColumnsSC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxContentColumnsSC>
            <DivBoxLeftPenalSC>
              <DivFoto2SC src="/default-images/Present.png" />
            </DivBoxLeftPenalSC>
            <DivBoxRightPenalSC>
              <DivBoxText1NFTSC>Create a giftbox</DivBoxText1NFTSC>
              <DivBoxTextcCeate1NFTSC>
                To create the first and subsequent giftbox, click on the button.
              </DivBoxTextcCeate1NFTSC>
              <ButtonCustomSC
                width={"220px"}
                height={"62px"}
                primary={true}
                borderRadius={"500px"}
              >
                <TextHomeBoxSC size={"24px"}>Go to the page</TextHomeBoxSC>
              </ButtonCustomSC>
            </DivBoxRightPenalSC>
          </DivBoxContentColumnsSC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxContentColumnsSC>
            <DivBoxLeftPenal3SC>
              <DivFoto3SC src="/default-images/LogIn.png" />
            </DivBoxLeftPenal3SC>
            <DivBoxRightPenal1SC>
              <DivBoxTextNFT3SC>Login once every 90 days</DivBoxTextNFT3SC>
              <DivBoxTextcCeate3NFTSC>
                To reset the timer, click on the button and you will be taken to
                the desired page of the service.
              </DivBoxTextcCeate3NFTSC>
              <ButtonCustomSC
                width={"220px"}
                height={"62px"}
                primary={true}
                borderRadius={"500px"}
              >
                <TextHomeBoxSC size={"24px"}>Go to the page</TextHomeBoxSC>
              </ButtonCustomSC>
            </DivBoxRightPenal1SC>
          </DivBoxContentColumnsSC>
        </>
      ),
    },
    {
      page: (
        <>
          <DivBoxContentColumnsSC>
            <DivBoxLeftPenalSC>
              <DivFotoSC src="/default-images/Message.png" />
            </DivBoxLeftPenalSC>
            <DivBoxRightPenalSC>
              <DivBoxTextNFT4SC>
                Leave your legacy forever on the blockchain!
              </DivBoxTextNFT4SC>
            </DivBoxRightPenalSC>
          </DivBoxContentColumnsSC>
        </>
      ),
    },
  ];
  const [indexSelectedButton, getIndexButton] = useState(0);
  const [color, setColor] = useState("#f0fff1;");
  const [fontColor, setFontColor] = useState(" #324934;");
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    if (indexSelectedButton === 0) {
      setIsActive("#324934");
    } else if (indexSelectedButton === 1) {
      setIsActive("#3C0F74");
    } else if (indexSelectedButton === 2) {
      setIsActive("#7C2E44");
    } else if (indexSelectedButton === 3) {
      setIsActive("#673C0A");
    } else if (indexSelectedButton === 4) {
      setIsActive("#1E5050");
    }
  }, [indexSelectedButton]);

  const onClickTab = (index) => (e) => {
    getIndexButton(index);
    switch (index) {
      case 0:
        return setColor("#f0fff1;") + setFontColor(" #324934;");
      case 1:
        return setColor("#FBF8FF;") + setFontColor(" #3C0F74");
      case 2:
        return setColor("#FFEEF3;") + setFontColor(" #7C2E44");
      case 3:
        return setColor("#FFF7ED;") + setFontColor(" #673C0A");
      case 4:
        return setColor("#EDFFFF;") + setFontColor(" #1E5050");
      default:
        return setColor("#f0fff1;") + setFontColor(" #324934;");
    }
  };

  return (
    <DivContainerSlidesSC Color={color}>
      <DivBoxTitleAndPagesSC>
        <DivTitleTextSC Color={fontColor}>
          How to leave your legacy?
        </DivTitleTextSC>
        <DivProgressBarRowSC>
          <DivFractionBoxSC>
            <SpanFractionSC
              display={indexSelectedButton === 0}
              Color={fontColor}
            >
              1/5
            </SpanFractionSC>
            <SpanFractionSC
              display={indexSelectedButton === 1}
              Color={fontColor}
            >
              2/5
            </SpanFractionSC>
            <SpanFractionSC
              display={indexSelectedButton === 2}
              Color={fontColor}
            >
              3/5
            </SpanFractionSC>
            <SpanFractionSC
              display={indexSelectedButton === 3}
              Color={fontColor}
            >
              4/5
            </SpanFractionSC>
            <SpanFractionSC
              display={indexSelectedButton === 4}
              Color={fontColor}
            >
              5/5
            </SpanFractionSC>
          </DivFractionBoxSC>
          <DivBoxColumnsPagesSC>
            <DivBoxPageAndDotsSC onClick={onClickTab(0)}>
              <DivDotSC
                isActive={indexSelectedButton >= 0 ? isActive : "#B4B4B4"}
              />
              <DivPage1SC
                isActive={indexSelectedButton >= 0 ? isActive : "#B4B4B4"}
              />

              <DivDotSC
                isActive={indexSelectedButton >= 0 ? isActive : "#B4B4B4"}
              />
            </DivBoxPageAndDotsSC>
            <DivBoxPageAndDots1SC onClick={onClickTab(1)}>
              <DivPage1SC
                isActive={indexSelectedButton >= 1 ? isActive : "#B4B4B4"}
              />
              <DivDotSC
                isActive={indexSelectedButton >= 1 ? isActive : "#B4B4B4"}
              />
            </DivBoxPageAndDots1SC>
            <DivBoxPageAndDots1SC onClick={onClickTab(2)}>
              <DivPage1SC
                isActive={indexSelectedButton >= 2 ? isActive : "#B4B4B4"}
              />
              <DivDotSC
                isActive={indexSelectedButton >= 2 ? isActive : "#B4B4B4"}
              />
            </DivBoxPageAndDots1SC>
            <DivBoxPageAndDots1SC onClick={onClickTab(3)}>
              <DivPage1SC
                isActive={indexSelectedButton >= 3 ? isActive : "#B4B4B4"}
              />
              <DivDotSC
                isActive={indexSelectedButton >= 3 ? isActive : "#B4B4B4"}
              />
            </DivBoxPageAndDots1SC>
            <DivBoxPageAndDots1SC onClick={onClickTab(4)}>
              <DivPage1SC
                isActive={indexSelectedButton >= 4 ? isActive : "#B4B4B4"}
              />
              <DivDotSC
                isActive={indexSelectedButton >= 4 ? isActive : "#B4B4B4"}
              />
            </DivBoxPageAndDots1SC>
          </DivBoxColumnsPagesSC>
        </DivProgressBarRowSC>

        <DivContentListSC>
          {listContent[indexSelectedButton].page}
        </DivContentListSC>

        <DivStepButtonSC>
          {indexSelectedButton > 0 ? (
            <ButtonStepSC
              bg={fontColor}
              onClick={onClickTab(indexSelectedButton - 1)}
            >
              Previous
            </ButtonStepSC>
          ) : (
            <div></div>
          )}

          {indexSelectedButton <= 3 ? (
            <ButtonStepSC
              bg={fontColor}
              onClick={onClickTab(indexSelectedButton + 1)}
            >
              Next
            </ButtonStepSC>
          ) : (
            <div></div>
          )}
        </DivStepButtonSC>
      </DivBoxTitleAndPagesSC>
    </DivContainerSlidesSC>
  );
};

export default Slides;
