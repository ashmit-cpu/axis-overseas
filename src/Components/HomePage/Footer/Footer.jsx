import React from 'react';
import '../../../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="logo">
                    <img src="img/oversees-logo.png" alt="logo" />
                </div>
                <div className="row">
                    <div className="col">
                        <a href='tel:+919545095450' className='phone'>Phone: +91 95450 95450</a>
                        <a href='mailto:axismaildemo@gmail.com'>axismaildemo@gmail.com</a>

                    </div>
                    <div className="col">
                        <h4>Location</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui laborum praesentium inventore delectus voluptas</p>

                    </div>
                    <div className="col">
                        <h4>Quick Links</h4>
                       <div className="links">
                        <ul>
                            <li><Link to={'#'}>Study Abroad</Link></li>
                            <li><Link to={'#'}>Our Service</Link></li>
                            <li><Link to={'#'}>Immigration</Link></li>
                            <li><Link to={'#'}>Get In Touch</Link></li>
                            <li><Link to={'#'}>About us</Link></li>
                        </ul>
                       </div>

                    </div>
                </div>

            </div>
            <div className="copyright">
                <p>© 2024 Axis Overseas Careers | All Rights Reserved | Powered By eWoke</p>
            </div>

        </div>
    )
}

export default Footer