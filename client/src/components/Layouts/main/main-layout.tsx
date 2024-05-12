import "./main-layout.scss"

import * as React from 'react';

import { Banner } from "@/components/banner/banner";
import { BodyWrapper } from "@/widgets/body-wrapper";
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

export interface IMainLayoutProps {
  children: React.ReactNode

  bannerBg: string
}

export function MainLayout({ children, bannerBg }: IMainLayoutProps) {
  return (
    <>
      <Header />

      <Banner bannerBg={bannerBg} />

      <BodyWrapper style={{ height: "100vh" }} >
        {children}
      </BodyWrapper>
      <Footer />
    </>
  );
}
