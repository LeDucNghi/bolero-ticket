import "./Header.scss"

import * as React from 'react';

import { Button } from "@mui/material";
import Image from 'next/image';
import { images } from '@/constants';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    return (
        <div className='w-full header-container h-[101px] flex-center'>
            <div className="header-wrapper flex-space-center">
                <div className="header-logo">
                    <Image src={images.logo} alt='logo' className="logo" />
                </div>

                <ul className='menu flex-center py-3 px-1'>
                    <li className='menu-item'>movie</li>
                    <li className='menu-item'>events</li>
                    <li className='menu-item'>sports</li>
                    <li className='menu-item'>blog</li>
                    <li className='menu-item'>contact</li>
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
