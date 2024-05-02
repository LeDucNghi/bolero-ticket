"use client"

import "./header.scss"

import * as React from 'react';

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
import { images } from '@/constants';
import { useWindowSize } from "@/hooks/useWindow";

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    const pathname = usePathname()
    const router = useRouter()
    // const { windowInnerWidth } = useWindowSize()


    if (pathname?.startsWith("/sign")) return

    else return (
        <div className='w-full header-container flex-center'>
            <div className="header-wrapper flex-space-center">
                <div className="header-logo">
                    <Image src={images.logo} alt='logo' className="logo" />
                </div>

                {/* {windowInnerWidth <= 990 ?
                    <label className="burger">
                        <input type="checkbox" id="burger" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    : */}
                <ul className='menu flex-center py-3 px-1'>
                    <li className='menu-item'>
                        <Link
                            className={pathname === "/movie" ? "active" : ""}
                            href="/movie"
                        >
                            movie
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link
                            className={pathname === "/event" ? "active" : ""}
                            href="/event"
                        >
                            events
                        </Link>
                    </li>

                    <li className='menu-item'>
                        <Link
                            className={pathname === "/sport" ? "active" : ""}
                            href="/sport">
                            sports
                        </Link>
                    </li>

                    <li className='menu-item'>
                        <Link
                            className={pathname === "/blog" ? "active" : ""}
                            href="/blog">
                            blog
                        </Link>
                    </li>

                    <li className='menu-item'>
                        <Link
                            className={pathname === "/contact" ? "active" : ""}
                            href="/contact">
                            contact
                        </Link>
                    </li>

                    <li className="menu-item">
                        <Button variant="contained" onClick={() => router.push("/signin")}>
                            join us
                        </Button>
                    </li>
                </ul>
                {/* } */}
            </div>
        </div>
    );
}
