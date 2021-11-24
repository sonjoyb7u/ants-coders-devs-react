import React, {useState} from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Developer = (props) => {
    const faArrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
    const {picture, name, salary, phone, designation, location, rank} = props.developer // apply array destructuring ...
    const {eventHandleHireDevBtn, developer} = props

    const [isDisabled, setDisabled] = useState();
  
    const handleHireDeveloperBtn = (params) => {
        setDisabled(params);
    }
   

    return (
        <div className="col-4">
            
                <div className="card team-member">
                    <img src={picture.thumbnail_1} className="img-fluid card-img img-effect" alt="..." />
                    <h5 className="card-title text-light mx-auto">{name.title} {name.first} {name.last}</h5>
                    <span className="divider"></span>
                    <div className="card-body text-center text-white member-details">
                        <div className="devInfo">
                            <p><strong>Designation:</strong> {designation}</p>
                            <p><strong>Contact:</strong> {phone}</p>
                            <p><strong>Country:</strong> {location.country}</p>
                            <p><strong>Salary Demand:</strong> ${salary}</p>
                            <p>
                                <strong>Ranking: </strong>
                                <Rating 
                                    initialRating={rank}
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
                                eventHandleHireDevBtn(developer)
                                handleHireDeveloperBtn(true)    
                            }} className="btn btn-success btn-sm text-uppercase btn-grad-sm mx-auto" disabled={ isDisabled } >hire me &nbsp;&nbsp;<span>{faArrowRightIcon}</span></button>
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