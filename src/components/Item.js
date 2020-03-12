import React from 'react';

const Item = ({item, numOwned, handleClick, index}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (index === 0) {
            ref.current.focus();
        }
    }, []);
    const {id, value, name, cost} = item;
    return (
        <button ref={ref} onClick={handleClick} key={id}>
            <p>{name}</p>
            <p>value: {value}</p>
            <p>cost: {cost}</p>
            <p>Owned: {numOwned}</p>
        </button>
    )
}


export default Item
