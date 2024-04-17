import React, { useState, useEffect, useContext } from 'react';
import { DivHideCheckSC, InputCustomSC } from '../styled-components-css/styled.CustomInputCheckBox';
import { HiCheck } from 'react-icons/hi';
import GlobalDispatchContext from "../global_dispatch_context";

function CustomInputCheckBox(props) {
  const { isSelected, onClick = null } = props;
  const [isChecked, setIsChecked] = useState(false);
  const { state, dispatch } = useContext(GlobalDispatchContext);

  const { isCheck } = state;
  useEffect(() => {
    setIsChecked(isSelected);
    
  }, [isSelected]);
  //console.log("isChecked",isChecked);

  const _onClick = () => {
    if (onClick) {
      onClick(isChecked);
    }
    setIsChecked(!isChecked);
  };

  return (
    <InputCustomSC onClick={_onClick} isChecked={isChecked}>
      {isChecked && <HiCheck color={'white'} />}
    </InputCustomSC>
  );
}

export default CustomInputCheckBox;
