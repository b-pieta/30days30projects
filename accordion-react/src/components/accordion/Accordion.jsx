import React, { useState, useEffect } from 'react';
import data from './data';
import './AccordionStyles.css';

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [randomData, setRandomData] = useState([]);

    useEffect(() => {
        const shuffledData = [...data].sort(() => 0.5 - Math.random()); 
        setRandomData(shuffledData.slice(0, 9)); 
    }, []); 

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    return (
        <div className='wrapper'>
            <div className='accordion'>
                {randomData && randomData.length > 0 ? (
                    randomData.map((dataItem) => (
                        <div
                            className={`item ${selected === dataItem.id ? 'flipped' : ''}`}
                            key={dataItem.id}
                            onClick={() => handleSingleSelection(dataItem.id)}
                        >
                            <div className='title'>
                                <h3>{dataItem.question}</h3>
                            </div>
                            <div className='accordion-content'>{dataItem.answer}</div>
                        </div>
                    ))
                ) : (
                    <div>No data</div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
