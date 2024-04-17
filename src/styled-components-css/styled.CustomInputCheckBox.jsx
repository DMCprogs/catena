import { nominalTypeHack } from 'prop-types';
import styled from 'styled-components';

export const InputCustomSC = styled.button`
  height: 30px;
  font-size: 25px;
  width: 30px;
  border-radius: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--purple-color);
  ${(p) =>
    p.isChecked
      ? `background: var(--purple-color);
      
			border: none;`
      : 'background: initial;'}
`;
