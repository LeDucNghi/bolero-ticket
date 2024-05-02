import "./checkbox.scss"

import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

export interface ICustomCheckboxProps {
    placement: "end" | "top" | "bottom" | "start"

    label: string

    style?: React.CSSProperties
}

export function CustomCheckbox({ placement, label, style }: ICustomCheckboxProps) {
    return (
        <FormControlLabel
            style={style}
            value="end"
            control={<Checkbox />}
            label={label}
            labelPlacement={placement ? placement : "end"}
        />
    );
}
