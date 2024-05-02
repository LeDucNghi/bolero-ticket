import "./auth-layout.scss";

import * as React from 'react';

import { Divider, Icon, IconButton, Paper } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import { authSocial } from "@/constants";

export interface IAuthLayoutProps {
  children: React.ReactNode

  title: string
  subtitle: string

  form: "signin" | "signup"
}

export default function AuthLayout({ children, title, subtitle, form }: IAuthLayoutProps) {
  return (
    <div className="auth-container flex-center">
      <Paper elevation={10} className="auth-card">
        <div className="auth-card-header">
          <span> {title} </span>
          <h2> {subtitle} </h2>
        </div>

        <div className="auth-card-form">
          {children}
        </div>

        <div className="auth-card-option flex-center w-full">
          {form === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          &nbsp;
          <Link href={form === "signin" ? "/signup" : "/signin"} >
            {form === "signin" ? "Sign up now" : "Sign in"}
          </Link>
        </div>

        <Divider className="auth-card-divider"> OR </Divider>

        <ul className="auth-card-social w-full flex-center">
          {authSocial.map((icon, key) => {
            return (
              <li key={key}>
                <IconButton
                  aria-label="delete"
                  className="social-icon"
                >
                  <Image src={icon.icon} alt="icon" />
                </IconButton>
              </li>
            )
          })}
        </ul>
      </Paper>
    </div>
  );
}
