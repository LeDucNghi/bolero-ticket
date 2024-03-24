import "./Banner.scss"

import * as React from 'react';

import CustomSelect from "../CustomSelect/Select";
import Image from 'next/image';
import { SearchTab } from "../SearchTab/SearchTab";
import { TextField } from "@mui/material";
import { images } from '@/constants';

export interface IBannerProps {

}

export function Banner(props: IBannerProps) {
    return (
        <div className='banner-container' >
            <div className="banner-backdrop"></div>

            <div className="banner-image">
                <Image src={images.banner02} alt='banner image' priority />
            </div>

            <div className="banner-content">
                <h1>get <span>movie</span> tickets</h1>

                <p>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
            </div>

            <SearchTab >

                <div className="tab-header">
                    <h6>welcome to bolero</h6>
                    <h3>what are you looking for</h3>
                </div>

                <div className="tab-area w-full flex-space-center">
                    <TextField id="standard-basic" label="Search for Movies" variant="standard" />

                    <div className="filter-area flex-center">
                        <Image src={images.city} alt="image" />
                        <span>City</span>
                        <CustomSelect />
                    </div>
                    <div className="filter-area flex-center">
                        <Image src={images.date} alt="image" />
                        <span>Date</span>
                        <CustomSelect />
                    </div>
                    <div className="filter-area flex-center">
                        <Image src={images.cinema} alt="image" />
                        <span>Cinema</span>
                        <CustomSelect />
                    </div>
                </div>
            </SearchTab>
        </div>
    );
}
