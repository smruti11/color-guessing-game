import React, { useState, useEffect } from 'react';
import ColorDisplay from './components/ColorDisplay';
import ColorOptions from './components/ColorOptions';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const generateOptions = (correctColor) => {
    const options = new Set();
    options.add(correctColor);
    while (options.size < 4) {
        options.add(getRandomColor());
    }
    return Array.from(options);
};

const App = () => {
    const [color, setColor] = useState('');
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const newColor = getRandomColor();
        setColor(newColor);
        setOptions(generateOptions(newColor));
    }, []);

    const handleSelect = (selectedColor) => {
        if (selectedColor === color) {
            setMessage('Correct!');
        } else {
            setMessage('Wrong! Try again.');
        }
        const newColor = getRandomColor();
        setColor(newColor);
        setOptions(generateOptions(newColor));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Guess the Color</h1>
            <ColorDisplay color={color} />
            <ColorOptions options={options} onSelect={handleSelect} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;