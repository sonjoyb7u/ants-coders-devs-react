import React, {useState} from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/fontawesome-svg-core'

const Developer = (props) => {
    const faArrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
    const developer = props.developer
    const disabledHide = props.disableHideStatus
    console.log(disabledHide);

    const [isDisabled, setDisabled] = useState();
  
    const handleHireDeveloperBtn = (params) => {
        setDisabled(params);
    }
   

    return (
        <div className="col-4">
            
                <div className="card team-member">
                    <img src={developer.picture.thumbnail_1} className="img-fluid card-img img-effect" alt="..." />
                    <h5 className="card-title text-light mx-auto">{developer.name.title} {developer.name.first} {developer.name.last}</h5>
                    <span className="divider"></span>
                    <div className="card-body text-center text-white member-details">
                        <div className="devInfo">
                            <p><strong>Designation:</strong> {developer.designation}</p>
                            <p><strong>Contact:</strong> {developer.phone}</p>
                            <p><strong>Country:</strong> {developer.location.country}</p>
                            <p><strong>Salary Demand:</strong> ${developer.salary}</p>
                            <p>
                                <strong>Ranking: </strong>
                                <Rating 
                                    initialRating={developer.rank}
                                    emptySymbol="far fa-star half-star"
                                    fullSymbol="fas fa-star full-star"
                                    className="text-center"
                                    readonly 
                                >
                                    
                                </Rating>
                            </p>
                        </div>

                    </div>
                    <div className="card-footer card-hire-info">
                        <button onClick={()=>{
                                props.eventHandleHireDevBtn(developer)
                                handleHireDeveloperBtn(true)    
                            }} className="btn btn-success btn-sm text-uppercase btn-grad-sm mx-auto" disabled={isDisabled} >hire me &nbsp;&nbsp;<span>{faArrowRightIcon}</span></button>
                        <div className="member-social-icon mt-5">
                            <span><i className="fab fa-facebook"></i></span>
                            <span><i className="fab fa-linkedin"></i></span>
                            <span><i className="fab fa-github"></i></span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Developer;