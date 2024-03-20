import * as React from 'react';

import Image from 'next/image';
import { images } from '@/constants';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    return (
        <div className='w-full p-5 header-container h-[101px] flex-center'>
            <div className="header-wrapper w-10/12 h-1/2 bg-rose-800">
                <Image src={images.logo} alt='logo' />
            </div>
        </div>
    );
}
