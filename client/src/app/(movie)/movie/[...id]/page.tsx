import * as React from 'react';

export interface IMovieProps {
    id: string
}

export default function Movie({ id }: IMovieProps) {
    console.log("🚀 ~ Movie ~ id:", id)

    return (
        <div>
            movie item page
        </div>
    );
}
