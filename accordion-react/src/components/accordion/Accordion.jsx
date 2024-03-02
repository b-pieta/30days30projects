import React from 'react';
import data from './data'

import { useState } from 'react';

function Accordion() {
	const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

	return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ?
                data.map(dataItem => <div className="item">
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>
                            {dataItem.question}
                        </h3>
                        <span>+</span>
                    </div>
                    {selected === dataItem.id && (
                        <div className="accordion-content">
                            {dataItem.answer}
                        </div>
                    )}
                </div>)
                 : <div>No data</div>
            }
        </div>
    </div>;
}

export default Accordion;
