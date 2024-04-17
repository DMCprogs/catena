import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DivContainerSC,
  DivContainerFixedSC,
} from "../styled-components-css/styled.DEFAULT";
import { Form, Formik } from "formik";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import Family from "../img/Family.png";
import {
  GridContentSC,
  GridLeftContainerSC,
  TextTitleSC,
  GridBoxSC,
  TextDescriptionSC,
  GridContentFormSC,
  InputTextSC,
  GridFormRows,
  InputTextAreaSC,
  TextRightSC,
  GridFormColumns,
  GridRightColumnSC,
  DivImageSC,
  GridTextRight,
  WarningIconSC,
  HideInputSC,
  DropDownSC,
  DropDownTextSC,
  DivHZSC,
} from "../styled-components-css/styled.AddAnHeir";
import {
  TextButtonAddProfileSC,
  DivColumnButtonsHeirProfileSC,
} from "../styled-components-css/styled.heir-profile";
import { LinkAddanHeirSC } from "../styled-components-css/styled.giftbox";

const HeirProfile = () => {
  const [SelectWarning, SetSelectWarning] = useState(false);
  const SetSelectedWarning = () => {
    SetSelectWarning(!SelectWarning);
  };
  const storePhotoRef = useRef(null);
  const handleUploadFile = (type) => {
    if (type === "PhotoRef") {
      storePhotoRef.current.click();
    }
  };
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <DivContainerSC>
        <DivContainerFixedSC>
          <GridBoxSC>
            <GridContentSC>
              <DivHZSC></DivHZSC>
              <GridLeftContainerSC>
                <TextTitleSC>Heir Profile</TextTitleSC>
                <GridContentFormSC>
                  <TextDescriptionSC>
                    Fill out the form to add a new heir
                  </TextDescriptionSC>

                  <Formik>
                    {(formik) => (
                      <Form>
                        <GridFormColumns>
                          <GridFormRows>
                            <HideInputSC
                              ref={storePhotoRef}
                              type="file"
                              name="storePhoto"
                            />
                            <InputTextSC
                              label="Name"
                              type="textarea"
                              name="Name"
                              fullsize={true}
                              placeholder={"Name"}
                            />

                            <InputTextSC
                              label="email"
                              type="email"
                              name="email"
                              fullsize={true}
                              placeholder={"Email"}
                            />

                            <InputTextAreaSC
                              label="Message"
                              type="text"
                              name="Message"
                              fullsize={true}
                              placeholder={"Message..."}
                              isTextArea={true}
                            />
                            <DivColumnButtonsHeirProfileSC>
                              <LinkAddanHeirSC to="#">
                                <ButtonCustomSC
                                  primary={true}
                                  width={"216px"}
                                  height={"62px"}
                                  borderRadius={"500px"}
                                >
                                  <TextButtonAddProfileSC>
                                    Add Profile
                                  </TextButtonAddProfileSC>
                                </ButtonCustomSC>
                              </LinkAddanHeirSC>
                              <LinkAddanHeirSC to="/yourheirs">
                                <ButtonCustomSC
                                  primary={true}
                                  width={"216px"}
                                  height={"62px"}
                                  borderRadius={"500px"}
                                >
                                  <TextButtonAddProfileSC>
                                    Save
                                  </TextButtonAddProfileSC>
                                </ButtonCustomSC>
                              </LinkAddanHeirSC>
                            </DivColumnButtonsHeirProfileSC>
                          </GridFormRows>
                          <GridRightColumnSC>
                            <GridTextRight>
                              {/* <DropDownSC>
                            Recommend 400 x 400. Max size: 50MB. Click the image to upload
                            </DropDownSC> */}

                              <TextRightSC>Image of heir</TextRightSC>

                              <WarningIconSC
                                 onMouseEnter={() => setIsShown(true)}
                                 onMouseLeave={() => setIsShown(false)}
                              >
                                {isShown ? (
                                  <DropDownSC >
                                  <DropDownTextSC>
                                    Recommend 400 x 400. Max size: 50MB. Click
                                    the image to upload
                                  </DropDownTextSC>
                                </DropDownSC>) : null}
                                
                              </WarningIconSC>
                            </GridTextRight>

                            <DivImageSC
                              photoUrl={Family}
                              onClick={() => handleUploadFile("PhotoRef")}
                            ></DivImageSC>
                          </GridRightColumnSC>
                        </GridFormColumns>
                      </Form>
                    )}
                  </Formik>
                </GridContentFormSC>
              </GridLeftContainerSC>
            </GridContentSC>
          </GridBoxSC>
        </DivContainerFixedSC>
      </DivContainerSC>
    </>
  );
};

export default HeirProfile;
