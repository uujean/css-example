import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                hi
            </Card>

            <Card>
                name
                <p>New</p>
            </Card>
        </div>
    );
}

function Card({children}) {
    return (
        <div
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth:'200px',
                padding: '1rem',
                margin: '1rem',
                textAlign: 'center',
            }}    
        >
            {children}
        </div>
    )
}

