import React, { useState } from 'react';
import HireDevs from '../HireDevs/HireDevs';
import Developer from './Developer/Developer';

const Developers = (props) => {
    const developers = props.developers;

    const [developerData, setDeveloperData] = useState([])

    const [memberHide, setMemberHide] = useState()

    const eventHandleHireDevBtn = (newDeveloperAdd) => {
        const newDeveloperAdded = [...developerData, newDeveloperAdd]
        setDeveloperData(newDeveloperAdded)
    }

    const eventHandlerMemberRemove = (member_id) => {
        const isExists = developers.find(developer=>developer.id.name === member_id)
        if(isExists) {
            let hideMember = 'd-none'
            setMemberHide(hideMember)
        }
        else {
            console.log("No, console.log: Developers.js");
        }
    }


    return (
        <>
            {/* Hire Developers SECTION ...  */}
            <section id="teams" className="container mt-5 teams">
                <div className="d-flex justify-content-between align-items-center mb-4 teams-bread">
                    <h2 className="text-uppercase text-light font-bold text-10xl m-0">find & meet ant's coders developers: </h2>
                    <p className="text-light text-decoration-none m-0">Total: <span className="badge bg-warning text-black p-1">{developers.length > 0 ? developers.length : 0}</span></p>
                </div>
                <div className="row">
                    
                    {/* Left Side Hire Developers SECTION ...  */}
                    <div className="col-9">
                        <div className="row">
                            
                            {
                                developers.map(developer => <Developer key={developer.id.name} developer={developer} eventHandleHireDevBtn={eventHandleHireDevBtn} ></Developer>)
                            }
                            
                        </div>
                    </div>
                        

                     {/* Right Side - Selected Hire Developers ...  */}
                    <div className="col-3">
                        <HireDevs developers={developerData} eventHandlerMemberRemove={eventHandlerMemberRemove} memberHide={memberHide}></HireDevs>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Developers;