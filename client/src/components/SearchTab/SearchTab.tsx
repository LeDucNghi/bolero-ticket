import "./SearchTab.scss"

import * as React from 'react';

import Paper from '@mui/material/Paper';

export interface ISearchTabProps {
  children: React.ReactNode

  style?: React.CSSProperties
}

export function SearchTab({ children, style }: ISearchTabProps) {
  return (
    <Paper style={{ ...style }} className='card-container' elevation={5} >
      {children}
    </Paper>
  );
}
