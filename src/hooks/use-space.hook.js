import React from 'react';

export default function useKeydown(code, func) {
    React.useEffect(() => {
    const handleKeydown = ev => {
        if (ev.code === code) {
            func(ev)
        }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
        window.removeEventListener('keydown', handleKeydown);
        };  
    });
}


