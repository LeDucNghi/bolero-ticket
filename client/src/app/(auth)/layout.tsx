import "./authLayout.scss";

import * as React from 'react';

import { Card, CardContent, CardHeader } from "@mui/material";

export interface IAuthLayoutProps {
  children: React.ReactNode

  title: string
  subtitle: string
}

export default function AuthLayout({ children, title, subtitle }: IAuthLayoutProps) {
  return (
    <div className="auth-container flex-center">
      <Card className="auth-card">
        <CardHeader
          title={title ? title : "hello"}
          subheader={subtitle ? subtitle : ""}
        />

        <CardContent >
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
