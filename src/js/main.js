import ReactDOM from 'react-dom';
import React from 'react';

const AlloMessage = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
} 

ReactDOM.render(
    <AlloMessage />,
    document.getElementById('app')
)