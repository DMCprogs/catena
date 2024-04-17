import styled from "styled-components/macro";

export const BlurSC = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;
  right: 0;
`;

export const MenuContentSC = styled.div`
  width: 230px;
 padding-top: 10px;
  height: ${({ height }) => height && `${height}`};
  background-color: #9ac4f8c1;
  border: 2px solid var(--purple-color);
  border-radius: 20px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  align-content: center;
  position: absolute;
  right: 0;
`;
