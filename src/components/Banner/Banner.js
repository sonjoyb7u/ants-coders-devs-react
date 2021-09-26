import React from 'react';
import BannerImage from './../../images/developer_teams_2.gif'

const Banner = () => {
    return (
        <div>
            {/* BANNER SECTION ...  */}
            <section className="container mt-3">
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center flex-wrap developer-banner shadow-effect mb-5">
                        <div className="col-12 col-lg-8 col-md-8 col-sm-12 h-auto">
                            <div className="text-white p-4 bannner-content">
                                <h1 className="text-capitalize mb-4">hire digital web developers <br/>By <span className="text-warning text-8xl">ant's coders</span></h1>
                                <h3 className="text-capitalize mb-3">We take digital experience to the next level.</h3>
                                <p className="text-capitalize mb-4">Find & hire top software, web developers & designers inexpensively. World's largest marketplace of 50m. Receive
                                quotes in seconds. Get the web modern capabilities on your own sites & web-based apps with useful guidance and analysis from Ant's Coders
                                Development sites.</p>
                                <button type="button" className="btn btn-success btn-grad-md">Let's Get Started</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                            <div className="text-center">
                                <img className="banner-img" src={BannerImage} alt="developer teams" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;