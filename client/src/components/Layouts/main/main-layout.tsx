import "./main-layout.scss"

import * as React from 'react';

import { Banner } from "@/components/banner/banner";
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import PageTransition from "@/components/loading/page-transition";

export interface IMainLayoutProps {
  children: React.ReactNode

  bannerBg: string
}

export function MainLayout({ children, bannerBg }: IMainLayoutProps) {
  return (
    <>
      <Banner bannerBg={bannerBg} />

      <div className='relative top-full'
        style={{ backgroundColor: "#001232" }}
      >
        {children}
      </div>

    </>
  );
}
