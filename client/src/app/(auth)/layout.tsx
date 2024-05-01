import "./authLayout.scss";

import * as React from 'react';

import { Card, CardContent, CardHeader } from "@mui/material";

export interface IAuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="auth-container flex-center">
      <Card className="auth-card">
        {/* <CardHeader
          title={title ? title : "hello"}
          subheader={subtitle ? subtitle : ""}
        /> */}

        <CardContent >
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
