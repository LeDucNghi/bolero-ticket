import * as React from 'react';

export interface IMovieProps {
    params: {
        id: string
    }
}

export default function MovieItemPage({ params: { id } }: IMovieProps) {

    return (
        <div>
            movie item page
        </div>
    );
}
