import styled from "styled-components/macro";

export const ButtonCustomSC = styled.button`
  //user-select: none;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Poppins";
 
  ${(p) => (p.padding !== undefined ? `padding:${p.padding};` : null)}
  ${(p) => (p.width !== undefined ? `width:${p.width};` : null)}
  ${(p) => (p.height !== undefined ? `height:${p.height};` : "height: 56px;")}
  ${(p) => (p.fontSize !== undefined ? `font-size:${p.fontSize};` : "font-size: 18px;")}

  ${(p) =>
    p.borderRadius !== undefined ? `border-radius:${p.borderRadius};` : "border-radius: 20px;"}
  ${(p) =>
    p.primary
      ? `background: var(--red-color);
         color: var(--white-color);
         :hover {
            background: var(--red-color-hover);
            color:var(--font-hover-color);
         }
         :active{
          background: var(--red-color-active);
            color:var(--font-active-color);
         }`
      : `
      border: 2px solid var(--red-color) !important;
      background: var(--white-color);
      color: var(--red-color);

      :hover {
            background: var(--red-color);
            color: var(--white-color);
         }
         
         
         `}

  box-sizing: border-box;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
 

  cursor: pointer;
  ${(p) =>
    p.statusOpasity !== undefined
      ? `opacity: ${p.statusOpasity ? 0.5 : 1};
      cursor:default;`
      : null}
      

  transition: 0.1s;
  border: none;
`;
