"use client"

import "./Header.scss"

import * as React from 'react';

import { Button } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { images } from '@/constants';
import { usePathname } from "next/navigation";

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    const pathname = usePathname()

    if (pathname.startsWith("/sign")) return

    else return (
        <div className='w-full header-container flex-center'>
            <div className="header-wrapper flex-space-center">
                <div className="header-logo">
                    <Image src={images.logo} alt='logo' className="logo" />
                </div>

                <ul className='menu flex-center py-3 px-1'>
                    <li className='menu-item'>
                        <Link href="/movie">movie</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/event">events</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/sport">sports</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li className='menu-item'>
                        <Link href="/contact">contact</Link>
                    </li>
                    <li className="menu-item">
                        <Button variant="contained">
                            join us
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
