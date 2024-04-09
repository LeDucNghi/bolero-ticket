import * as React from 'react';

export interface IBodyWrapperProps {
    children: React.ReactNode
    style?: React.CSSProperties
}

export function BodyWrapper({ children, style }: IBodyWrapperProps) {
    return (
        <div className='relative top-[calc(100vh - 100vh)] z-20' style={{ ...style, backgroundColor: "#001232" }}>
            {children}
        </div>
    );
}
