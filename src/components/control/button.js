import React from 'react';
import {Button as MuiButton} from '@material-ui/core';

export default function Button(props) {
    const {variant, size, color, text,type, onClick} = props;
    return (
      <MuiButton
        variant={variant}
        size={size}
        color={color}
        onClick={onClick}
        type={type}
      >{text}</MuiButton>
    )
}
