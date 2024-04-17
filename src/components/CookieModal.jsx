import React, { useContext } from "react";
import GlobalDispatchContext from "../global_dispatch_context";
import { ButtonCustomSC } from "../styled-components-css/styled.custom-button";
import {
  CookieModal,
  DivBoxCookieInnerSC,
  DivBoxCookieSC,
  DivBoxTextCookieSC,
  DivCookieButtonsColumnsSC,
  DivCookiePrivacySC,
  DivImgCookieSC,
} from "../styled-components-css/styled.modal";
import {
  ButtonLinkSC,
  DivButtonColumnSC,
  LinkProfileSC,
} from "../styled-components-css/styled.navbar";
const Cookie = () => {
  const { state, dispatch } = useContext(GlobalDispatchContext);
  const { isCookie } = state;

  return (
    <>
      <CookieModal isOpen={isCookie} contentLabel="ModalCookie">
        <DivBoxCookieSC>
          <DivBoxCookieInnerSC>
            <DivImgCookieSC />
            <DivBoxTextCookieSC>
              We use cookies to provide a better user experience.
            </DivBoxTextCookieSC>
            <DivCookieButtonsColumnsSC>
              <DivCookiePrivacySC
                onClick={() =>
                  dispatch({
                    type: "SET_IS_COOKIE",
                    status: false,
                  })
                }
              >
                Privacy Policy
              </DivCookiePrivacySC>
              <LinkProfileSC
                to="#"
                onClick={() =>
                  dispatch({
                    type: "SET_IS_COOKIE",
                    status: false,
                  })
                }
              >
                <ButtonCustomSC
                  primary={true}
                  width={"120px"}
                  height={"42px"}
                  padding={"0px 18px"}
                >
                  <DivButtonColumnSC>
                    <ButtonLinkSC>Accept</ButtonLinkSC>
                  </DivButtonColumnSC>
                </ButtonCustomSC>
              </LinkProfileSC>
            </DivCookieButtonsColumnsSC>
          </DivBoxCookieInnerSC>
        </DivBoxCookieSC>
      </CookieModal>
    </>
  );
};

export default Cookie;
