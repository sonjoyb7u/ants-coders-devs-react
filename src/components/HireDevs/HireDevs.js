import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import HireDev from './HireDev/HireDev';

const HireDevs = (props) => {
    const faShoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const hiredDevelopers = props.developers
    // console.log(hiredDevelopers);


    let developerCount = 0
    let totalAmount = 0
    for (const hireDeveloper of  hiredDevelopers) {
        developerCount = hiredDevelopers.length
        totalAmount += hireDeveloper.salary
    }


    return (

        <div className="row">
            {/* Select Developer team ...  */}
            <section className="hire-members">
                <div className="w-100 mx-auto text-white">
                    <div className="font-lighter mt-2 mb-3">
                        <h5 className="font-extrabold d-inline-block mr-1">Total Member's:</h5><span className="bg-warning p-1 border border-2 font-bold rounded-3">{developerCount}</span>
                        
                    </div>
                    <div className="font-lighter mt-2 mb-4" >
                        <h5 className="font-extrabold">Total Amount: <span className="p-1 rounded-2">$ {totalAmount.toFixed(2)}</span></h5>     
                    </div>
                    
                </div>
            </section>
            {/* Select Developer Section ...  */}
            <section className="hire-developers mt-5 p-2 rounded-2 text-light">
                <h5 className="hire-developers-title text-capitalize">your selected developers: </h5>
                <hr />
                {
                    hiredDevelopers.map(developer => <HireDev key={developer.email} developer={developer} eventHandleNotDisableBtn={props.eventHandleNotDisableBtn}></HireDev>)  
                }
               
                <div className="buy-developers-btn p-2">
                    <button className="btn text-uppercase btn-grad-sm mx-auto">
                        <span>{faShoppingCartIcon}&nbsp;&nbsp; Create Team</span>
                    </button>
                </div>

            </section>
        </div>

    );
};

export default HireDevs;