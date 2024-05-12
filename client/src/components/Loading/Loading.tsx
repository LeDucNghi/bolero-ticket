import "./loading.scss"

import * as React from 'react';

export interface ILoadingProps {
}

export function Loading(props: ILoadingProps) {
    return (
        <div className="loader">
            <div data-glitch="Loading..." className="glitch">Loading...</div>
        </div>

        // <div>
        //     ...loading
        // </div>
    );
}
