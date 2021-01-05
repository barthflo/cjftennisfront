import React from 'react';

const DefaultPage = ({component: Component,  ...props}) => {
    return (
        <main className={props.className}>
            <Component />
        </main>
    )
}

export default DefaultPage