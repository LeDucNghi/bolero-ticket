"use client"

import "./Loading.scss"

import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { usePathname } from 'next/navigation';

export interface IPageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({ children }: IPageTransitionProps) {
    const pathname = usePathname()

    return (
        <AnimatePresence >
            <motion.div key={pathname}>

                {children}

                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                ></motion.div>

                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                ></motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
