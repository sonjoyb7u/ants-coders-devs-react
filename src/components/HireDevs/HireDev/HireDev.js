import React, {useState} from 'react';

const HireDev = (props) => {
    const {id, picture, name, salary, phone} = props.developer // apply array destructuring ...

    // const [isHide, setHide] = useState()

    // const eventHandlerHide = (status) => {
    //     if(status) {
    //         let hideComponent = 'd-none'
    //         setHide(hideComponent)
    //     }
    // }

    return (
        <>
            {
                <div className={props.memberHide ? props.memberHide : "d-flex justify-content-between align-items-center selected-developer m-1 "}>
                    <img width="70" src={picture.thumbnail_1} alt="Added Team Member" />
                    <div className="developer-info d-flex justify-content-start">
                        <div>
                            <h6>{name.title} {name.first} {name.last}</h6>
                            <p className="mb-0">${salary}</p>
                            {/* <p className="mb-0">{hireDeveloper.email}</p> */}
                            <p className="mb-0">{phone}</p>
                        </div>
                        <button onClick={() => {
                                // eventHandlerHide(true)
                                props.eventHandlerMemberRemove(id.name)
                            }} type="button" className="btn-close btn-close-black btn-sm bg-danger text-white" ></button>
                    </div>
                </div>
                
            }
        </>
        
    );
};

export default HireDev;