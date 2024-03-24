import * as React from 'react';

export interface IBodyWrapperProps {
    children: React.ReactNode
}

export function BodyWrapper({ children }: IBodyWrapperProps) {
    return (
        <div className='relative top-[calc(100vh - 100vh)] z-20' style={{ backgroundColor: "#001232" }}>
            {children}
        </div>
    );
}
