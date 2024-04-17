import React from 'react'
import { useTimer } from "react-timer-hook";
import { ButtonCustomSC } from '../styled-components-css/styled.custom-button';
import { DivTitleGiftBoxSC } from '../styled-components-css/styled.giftbox';
import { DivBoxTextUnderbuttonSC, DivBoxTimer2SC, DivBoxTimerSC, DivColumnContentButton3SC, DivColumnTitleAndTimerSC, DivIconTimerSC, DivNoneBitton2SC, DivNoneBittonSC, DivTextButtonGiftBoxesSC, DivTextUnderbuttonSC } from '../styled-components-css/styled.giftboxes';
const Timer = ({ expiryTimestamp }) => {
    const { seconds, minutes, hours, days, restart} = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      autoStart:true,
    });
  return (
    <div>
          <DivColumnTitleAndTimerSC>
            <DivTitleGiftBoxSC>Your giftboxes</DivTitleGiftBoxSC>
            <DivNoneBittonSC>
              <ButtonCustomSC
                width={"173px"}
                height={"42px"}
                primary={true}
                borderRadius={"500px"}
              >
                <DivColumnContentButton3SC>
                  <DivTextButtonGiftBoxesSC
                    to="#"
                    onClick={() => {
                      const time = new Date();
                      time.setSeconds(time.getSeconds() + 7775999);
                      restart(time);
                    }}
                  >
                    Refresh timer
                  </DivTextButtonGiftBoxesSC>
                  <DivIconTimerSC />
                </DivColumnContentButton3SC>
              </ButtonCustomSC>
            </DivNoneBittonSC>
            <DivBoxTimerSC>
              {days}d {hours}h {minutes}m {seconds}s
            </DivBoxTimerSC>
          </DivColumnTitleAndTimerSC>
          <div>
            <DivBoxTextUnderbuttonSC>
              <DivBoxTimer2SC>
                {days}d {hours}h {minutes}m {seconds}s
              </DivBoxTimer2SC>

              <DivNoneBitton2SC>
                <ButtonCustomSC
                  width={"173px"}
                  height={"42px"}
                  primary={true}
                  borderRadius={"500px"}
                >
                  <DivColumnContentButton3SC>
                    <DivTextButtonGiftBoxesSC to="#" onClick={() => {
                      const time = new Date();
                      time.setSeconds(time.getSeconds() + 7775999);
                      restart(time);
                    }}>
                      Refresh timer
                    </DivTextButtonGiftBoxesSC>
                    <DivIconTimerSC />
                  </DivColumnContentButton3SC>
                </ButtonCustomSC>
              </DivNoneBitton2SC>
              <DivTextUnderbuttonSC>Set for 90 days</DivTextUnderbuttonSC>
            </DivBoxTextUnderbuttonSC>
          </div>
        </div>
  )
}

export default Timer