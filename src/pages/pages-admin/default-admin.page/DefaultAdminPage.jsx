import React from 'react';

const DefaultPage = ({component: Component,  ...props}) => {
    return (
        <main className={props.className}>
            <Component props={props}/>
        </main>
    )
}

export default DefaultPage