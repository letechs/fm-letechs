import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ceoPhoto from '../../assets/ceo-photo.jpg'
import awardPhoto1 from '../../assets/award1.jpg'
import awardPhoto2 from '../../assets/award2.jpg'

const About = () => {
    return (
        <>
            <div className='about'></div>
            <div>
                <h1>Our Achievments</h1>
            </div>
            <div className="container-fluid ceo">
                <div className="row award p-5 justify-content-center text-justify">
                    <div className="col-sm-6">
                        <div className="card award-image-card">
                            <img class="card-img award-image" src={awardPhoto1} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card award-content-card">
                            <div class="card-body award-content">
                                <blockquote class="blockquote mb-0">
                                    <p>Mr. Manikandan B.E,M.B.A, the CEO of Letechs started in the year of 2015. Completed masters in international Business Management, after the completion of graduation, have started Bulls Business Academy. A multitasking person started doing fund management, a signal provider and looking forward for young entrepreneurs to learn more about trading and was providing training sessions.</p>
                                    <footer class="blockquote-footer">Star Of Tamilnadu <cite title="Source Title">Venus Solar Energy Solutions</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row award p-5 justify-content-center text-justify">
                    <div className="col-sm-6">
                        <div className="card award-content-card">
                            <div class="card-body award-content">
                                <blockquote class="blockquote mb-0">
                                    <p>Mr. Manikandan B.E,M.B.A, the CEO of Letechs started in the year of 2015. Completed masters in international Business Management, after the completion of graduation, have started Bulls Business Academy. A multitasking person started doing fund management, a signal provider and looking forward for young entrepreneurs to learn more about trading and was providing training sessions.</p>
                                    <footer class="blockquote-footer">Star Of Tamilnadu <cite title="Source Title">Venus Solar Energy Solutions</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card award-image-card">
                            <img class="card-img award-image" src={awardPhoto2} alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
           <Footer />
        </>
    )
}

export default About;
