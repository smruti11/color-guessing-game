import React from 'react';

const ColorDisplay = ({ color }) => {
    const style = {
        backgroundColor: color,
        width: '300px',
        height: '300px',
        margin: '20px auto',
        border: '1px solid #000'
    };

    return <div style={style}></div>;
};

export default ColorDisplay;