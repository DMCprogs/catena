import React from 'react';
import {
    DivBoxThreeSectionSC,
    DivContentThreeBoxSC,
    DivItemThreeSection1SC,
    DivItemThreeSection2SC,
    DivItemThreeSection3SC,
    DivItemThreeSectionContent1SC,
    DivItemThreeSectionContent2SC,
    DivItemThreeSectionSC,
    H4TitleSC, SpanTitleAlignRightSC,
    SpanTitleSC
} from "../styled-components-css/styles.pathThree";

import ImageSvg from '../img/Group_255.svg'

const PathSectionThree = (props) => {


    return (
        <DivBoxThreeSectionSC
        >
            <DivContentThreeBoxSC
                src={ImageSvg}
            >
                <DivItemThreeSection1SC>
                    <DivItemThreeSectionContent1SC>
                        <H4TitleSC>
                            Gifts for your loved ones
                        </H4TitleSC>
                        <SpanTitleSC>
                            Here you can leave your message to people close to you. It can be: A letter a photo or a video in the form of an NFT saved forever on the blockchain
                        </SpanTitleSC>
                    </DivItemThreeSectionContent1SC>

                </DivItemThreeSection1SC>
                <DivItemThreeSection1SC>
                    <DivItemThreeSectionContent2SC>
                        <H4TitleSC>
                            Invest in the future
                        </H4TitleSC>
                        <SpanTitleAlignRightSC>
                            Your digital gifts are guaranteed to go to those with whom you would like to share your legacy. Your unspoken thoughts, regrets, parting words and advice will be delivered to the recipients at the right time.
                        </SpanTitleAlignRightSC>
                    </DivItemThreeSectionContent2SC>
                </DivItemThreeSection1SC>
                <DivItemThreeSection1SC>
                    <DivItemThreeSectionContent1SC>
                        <H4TitleSC>
                            Secure data storage
                        </H4TitleSC>
                        <SpanTitleSC>
                            Security and confidentiality are guaranteed by blockchain technologies on which our service operates.
                        </SpanTitleSC>
                    </DivItemThreeSectionContent1SC>
                </DivItemThreeSection1SC>
            </DivContentThreeBoxSC>



        </DivBoxThreeSectionSC>
    );
};

export default PathSectionThree;