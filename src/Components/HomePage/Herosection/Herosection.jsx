import React from 'react';
import '../../../styles/Herosection.css';

function Herosection() {
    return (
        <div className='Herosection'>
            <div className="row">
                <div className="left-col">
                    <img src="img/plane n passport.png" alt="plane n passport" />
                </div>
                <div className="right-col">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae deserunt fugit! Nesciunt ipsum aliquid expedita beatae, asperiores alias laboriosam nostrum eum perspiciatis ab natus quo ullam distinctio explicabo delectus.</p>
                   
                    <form >
                        <div>
                            <input type='text' id='name' name='name' placeholder='Name' required title="Enter your full name(maximum 30 characters)" maxLength={30} />
                        </div>
                        <div>
                            <input type='email' id='email' name='email' placeholder='Email' required />
                        </div>
                        <div>
                            <input type='text' id='phone' name='phone' placeholder='Phone' required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" />
                        </div>
                        <div>
                            <textarea id='message' name='message' placeholder='Message (optional)' rows={4} maxLength={500} title="Enter your message (maximum 500 characters)" />
                        </div>

                        <button type='submit'>Submit <span><img src="img/application.png" alt="" /></span></button>


                    </form>


                    <div className="bg-img">
                        <img src="img/Layer 5.png" alt="" />
                    </div>
                    <div className="woman-standing">
                        <img src="img/woman-wearing-hat-glasses-handles-suitcases-travel.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Herosection