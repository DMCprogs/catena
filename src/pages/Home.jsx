import React, { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import {
  DivContainerHomeSC,
  DivContainerSC,
} from "../styled-components-css/styled.DEFAULT";

// import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
import HomeCarouselPage from "../components/HomeCarouselPage";
import SocialLinks from "../components/SocialLinks";

import {
  DivFullPageSC,
  DivFullpageSectionSC,
  DivFullPageSectionsSC,
  DivHomeContentBoxSC,
  DivIntroBoxSC,
  DivIntroTextBoxSC,
  DivLinkSoundBoxSC,
  DivScrollPageSC,
  DivSoundBoxSC,
  DivTempSC,
  QuoteHomeBoxSC,
  TextHomeBoxSC,
  TitleHomeBoxSC,
  DivBowSC,
  DivPhotoFirstFrameContainerSC,
  DivPhotoFirstFrameSC,
  VideoPosterSC,
  DivScrollDownColumnsSC,
  TextHomeScrollDownSC,
  DivAnimationScrollSC,
  AudioHomepageSC,
  LinkHomeBoxSC,
  DivPhotoFirstFrameContainer2SC,
} from "../styled-components-css/styled.home";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import GlobalDispatchContext from "../global_dispatch_context";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import PathSectionThree from "../components/PathSectionThree";

import Bow from "../img/Bow.svg";
import GiftBox from "../img/GiftBox.png";
import Poster from "../video/poster.png";
import Video from "../video/video.mp4";
import GifFromTheHearh from "../video/GifFromTheHearh.gif";

import Slides from "./Slides";
import { DivBackColor } from "../styled-components-css/styled.HomeCarouselPage";
import Audio from "../audio/Homepage.mp3";
import { DivTextButtonSC } from "../styled-components-css/styled.giftbox";
import ReactHowler from "react-howler";
const Home = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isHome, isOpen } = state;
  useEffect(() => {
    dispatch({
      type: "SET_IS_HOME",
      status: false,
    });
    return () => {
      dispatch({
        type: "SET_IS_HOME",
        status: true,
      });
    };
  }, [isHome]);
  //тут делаем true для модального окна
  // const fullSectionStyle = {
  //     height: 'calc(100vh - 100px)'
  // };

  const fullPageStyle = {
    display: "grid",
    top: "0px",
    position: "fixed",
    width: "100%",
    maxWidth: "100vw",
  };
  const firstPageStyle = {
    paddingTop: "100px",
  };

  const fullSectionStyle = {
    //paddingTop:"100px",
    height: "100vh",
    overflow: "hidden",
  };
  const FooterStyle = {
    //paddingTop: "100px",
    height: "25vh",
    overflow: "hidden",
  };

  const [music, setMusic] = useState(true);
  const MusicBeh = () => {
    setMusic(!music);
  };
  return (
    <>
      {" "}
      <ReactHowler
        src={Audio}
        playing={music}
        preload={true}
        loop={true}
        volume={0.2}
      />
      <DivContainerHomeSC>
        <DivFullPageSC style={fullPageStyle}>
          <DivFullPageSectionsSC>
            <DivFullpageSectionSC style={firstPageStyle}>
              <DivScrollPageSC>
                <DivHomeContentBoxSC>
                  <DivIntroTextBoxSC>
                    <TitleHomeBoxSC>
                      Your legacy on the blockchain
                    </TitleHomeBoxSC>
                    <QuoteHomeBoxSC>
                      <TextHomeBoxSC>
                        “No matter what you&#8217;ve done for yourself or for
                        humanity, if you can&#8217;t look back on having given
                        love and attention to your own family, what have you
                        really accomplished?”
                      </TextHomeBoxSC>
                      <TextHomeBoxSC weight={800}>Elbert Hubbard</TextHomeBoxSC>
                    </QuoteHomeBoxSC>
                    <DivLinkSoundBoxSC>
                      <LinkHomeBoxSC to="#">
                        <ButtonCustomSC
                          width={"220px"}
                          height={"52px"}
                          primary={true}
                          borderRadius={"500px"}
                          size={"24px"}
                        >
                          <DivTextButtonSC> Explore now</DivTextButtonSC>
                        </ButtonCustomSC>
                      </LinkHomeBoxSC>

                      <DivSoundBoxSC onClick={MusicBeh}>
                        {music ? (
                          <div className="MusicContainer">
                            <div className="Bars" />
                            <div className="Bars" />
                            <div className="Bars" />
                            <div className="Bars" />
                          </div>
                        ) : (
                          <div className="MusicContainerStop">
                            <div className="BarsStop" />
                            <div className="BarsStop" />
                            <div className="BarsStop" />
                            <div className="BarsStop" />
                          </div>
                        )}
                        <TextHomeBoxSC
                          weight={500}
                          size={"18px"}
                          color={"#3c0f74"}
                        >
                          {music ? "sound on" : "sound off"}
                        </TextHomeBoxSC>
                      </DivSoundBoxSC>
                    </DivLinkSoundBoxSC>
                  </DivIntroTextBoxSC>
                  <DivPhotoFirstFrameContainerSC>
                    <DivPhotoFirstFrameSC Photo={GifFromTheHearh}>
                      <DivBowSC Photo={Bow} />
                    </DivPhotoFirstFrameSC>
                  </DivPhotoFirstFrameContainerSC>
                  <DivScrollDownColumnsSC>
                    <div class="scrolldown">
                      <div class="chevrons">
                        <div class="chevrondown"></div>
                        <div class="chevrondown"></div>
                      </div>
                    </div>
                    <TextHomeScrollDownSC weight={500} size={"18px"}>
                      Scroll down
                    </TextHomeScrollDownSC>
                  </DivScrollDownColumnsSC>
                  <DivPhotoFirstFrameContainer2SC>
                    <DivPhotoFirstFrameSC Photo={GifFromTheHearh}>
                      <DivBowSC Photo={Bow} />
                    </DivPhotoFirstFrameSC>
                  </DivPhotoFirstFrameContainer2SC>
                </DivHomeContentBoxSC>
              </DivScrollPageSC>
            </DivFullpageSectionSC>
            <DivFullpageSectionSC style={fullSectionStyle}>
              <VideoPosterSC
                src={Video}
                poster={Poster}
                autoPlay
                muted
                loop
              ></VideoPosterSC>

              {/* <DivScrollDownColumnsSC positionAbsolute={true}>
                <div class="scrolldown">
                  <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                  </div>
                </div>
                <TextHomeScrollDownSC weight={500} size={"18px"}>
                  Scroll down
                </TextHomeScrollDownSC>
            </DivScrollDownColumnsSC> */}
            </DivFullpageSectionSC>
            <DivFullpageSectionSC style={fullSectionStyle}>
              <PathSectionThree />
            </DivFullpageSectionSC>
            <DivFullpageSectionSC style={fullSectionStyle}>
              <Slides />
            </DivFullpageSectionSC>

            <DivFullpageSectionSC style={fullSectionStyle}>
              <DivBackColor>
                <HomeCarouselPage />
              </DivBackColor>
            </DivFullpageSectionSC>
            <DivFullpageSectionSC style={fullSectionStyle}>
              <DivBackColor>
                <SocialLinks />
              </DivBackColor>
            </DivFullpageSectionSC>

            <DivFullpageSectionSC style={FooterStyle}>
              <Footer isFullPageShow={true} />
            </DivFullpageSectionSC>
          </DivFullPageSectionsSC>
        </DivFullPageSC>
      </DivContainerHomeSC>
    </>
  );
};

export default Home;
