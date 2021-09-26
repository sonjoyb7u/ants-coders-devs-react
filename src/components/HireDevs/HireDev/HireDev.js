import React, { useState } from 'react';

const HireDev = (props) => {
    const hireDeveloper = props.developer
    // console.log(hireDeveloper);
    const [show, setShow] = useState(false)

    const EventHandlerShow = () => {
        setShow(true)
    }
    const EventHandlerHide = () => {
        setShow(false)
    }
    return (
        <div className="d-flex justify-content-between align-items-center selected-developer m-1">
            <img width="70" src={hireDeveloper.picture.thumbnail_1} alt="Added Team Member" />
            <div className="developer-info d-flex justify-content-start">
                <div>
                    <h6>{hireDeveloper.name.title} {hireDeveloper.name.first} {hireDeveloper.name.last}</h6>
                    <p className="mb-0">${hireDeveloper.salary}</p>
                    {/* <p className="mb-0">{hireDeveloper.email}</p> */}
                    <p className="mb-0">{hireDeveloper.phone}</p>
                </div>
                <button onClick={EventHandlerHide} type="button" className="btn-close btn-close-white btn-sm" ></button>
            </div>
            
        </div>

    );
};

export default HireDev;