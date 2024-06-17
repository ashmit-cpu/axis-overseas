import React, { useRef, useState } from 'react';
import '../../../styles/Herosection.css';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Herosection() {

    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ruq1xy8', 'template_45h7ide', form.current, 'ZWUikwVHCBUPyL968')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                toast.success('Message Sent! Your message has been sent successfully.');
                // Reset the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                toast.error('An error occurred. Please try again!');
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className='Herosection'>
            <div className="row">
                <div className="left-col">
                    <img src="img/plane n passport.png" alt="plane n passport" />
                </div>
                <div className="right-col" >
                    <h2  data-aos="fade" data-aos-duration="1000">Get In Touch</h2>
                    <p data-aos="fade" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae deserunt fugit! Nesciunt ipsum aliquid expedita beatae, asperiores alias laboriosam nostrum eum perspiciatis ab natus quo ullam distinctio explicabo delectus.</p>

                    <form ref={form} onSubmit={sendEmail} data-aos="fade" data-aos-duration="1000">
                        <div>
                            <input type='text' value={formData.name} onChange={handleInputChange} id='name' name='name' placeholder='Name' required title="Enter your full name(maximum 30 characters)" maxLength={30} />
                        </div>
                        <div>
                            <input type='email' value={formData.email} onChange={handleInputChange} id='email' name='email' placeholder='Email' required />
                        </div>
                        <div>
                            <input type='text' id='phone' value={formData.phone} onChange={handleInputChange} name='phone' placeholder='Phone' required pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" />
                        </div>
                        <div>
                            <textarea id='message' value={formData.message} onChange={handleInputChange} name='message' placeholder='Message (optional)' rows={4} maxLength={500} title="Enter your message (maximum 500 characters)" />
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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div class="custom-shape-divider-bottom-1718612968">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}

export default Herosection