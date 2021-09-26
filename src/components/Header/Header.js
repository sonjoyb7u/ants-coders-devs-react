import React from 'react';
import NavbarLogo from './../../images/developer_logo_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const searchPlusIcon = <FontAwesomeIcon icon={faSearchPlus} />
    return (
        <div>
            {/* HEADER SECTION ...  */}
            <header>
                {/* NAVBAR SECTION */}
                <div className="container site-navbar sticky-nav">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand me-3" href="/">
                                    <img width="55" className="d-inline-block rounded-3" src={NavbarLogo} alt="Site Logo" />
                                    <span className="text-white text-uppercase font-bold">Ant's Coders</span>
                                </a>
                                <button className="navbar-toggler nav-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon nav-toggle-icon"><i className="fas fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/job-categories">Job Category</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/dev-categories">Developer Category</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/find-jobs">Find Job</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/projects">Projects</a>
                                        </li>
                                    </ul>
                                    <form className="search-box d-flex justify-content-center align-items-center">
                                        <input className="form-control search-here w-100" type="search" placeholder="Search developer here..." />
                                        <button className="search-icon">
                                            {searchPlusIcon}
                                        </button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            
        </div>
    );
};

export default Header;