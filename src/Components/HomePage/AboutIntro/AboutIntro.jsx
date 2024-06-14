import React from 'react';
import '../../../styles/AboutIntro.css'

function AboutIntro() {
    return (
        <div className='AboutIntro'>
            <div className="container">
                <div className="row">
                    <div className="left-col">
                        <img src="img/AboutIntro-img.png" alt="about intro" />
                    </div>
                    <div className="right-col">
                        <h2><span>12 Years of Experience</span> in Education and Immigration  Consultantation services</h2>
                        <p>Axis Overseas Careers® is the Final Destination for Immigration Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas recusandae ad, est minus officiis non facere ullam ipsam animi quaerat ut neque molestias quibusdam reiciendis unde nobis fuga accusantium.</p>
                        <div className="icon-card-section">
                            <div className="card">
                                <img src="img/study.png" alt="study" />
                                <h3>Study</h3>
                            </div>
                            <div className="card">
                                <img src="img/passport.png" alt="passport" />
                                <h3>Passport</h3>
                            </div>
                            <div className="card">
                                <img src="img/training.png" alt="training" />
                                <h3>Training</h3>
                            </div>
                            <div className="card">
                                <img src="img/Immigration.png" alt="immigration" />
                                <h3>Immigration</h3>
                            </div>
                        </div>
                        <div className="bullet-points">
                            <ul>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">Express Entry program</a></li>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">Australia Immigration</a></li>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">Provisional Nominee Program</a></li>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">Study Abroad Benefits</a></li>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">Quebec Immigration</a></li>
                                <li><span><img src="img/blur copy.png" alt="blur copy" /></span><a href="#">IELTS/PTE/OET 2.0 Coaching</a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutIntro