import React, { useEffect, useState } from 'react';
import HireDevs from '../HireDevs/HireDevs';
import Developer from './Developer/Developer';
// import Developer from './Developer/Developer';

const Developers = (props) => {
    const developers = props.developers;

    const [developerData, setDeveloperData] = useState([])


    const eventHandleHireDevBtn = (newDeveloperAdd) => {
        const newDeveloperAdded = [...developerData, newDeveloperAdd]
        // const isDeveloperExists = developers.find(developer => developer.email === newDeveloperAdd.email)
        setDeveloperData(newDeveloperAdded)
        // console.log(developerData);
    }


    return (
        <div>
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
                                developers.map(developer => <Developer key={developer.email} developer={developer} eventHandleHireDevBtn={eventHandleHireDevBtn} ></Developer>)
                            }
                            
                        </div>
                    </div>
                        

                     {/* Right Side - Selected Hire Developers ...  */}
                    <div className="col-3">
                        <HireDevs developers={developerData} ></HireDevs>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Developers;