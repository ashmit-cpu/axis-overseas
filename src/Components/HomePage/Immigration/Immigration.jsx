import React, { useState } from 'react';
import '../../../styles/Immigration.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Immigration() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeButton, setActiveButton] = useState(0);

    const goToSlide = (index) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
        setActiveButton(index);

    };

    return (
        <div className='Immigration'>
            <div className="container">
                <h2 data-aos="fade" data-aos-duration="1000"><span>Immi</span>gration</h2>
                <p data-aos="fade" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod modi blanditiis praesentium odit libero nulla voluptatem aliquam excepturi velit, beatae rem nihil officiis nemo inventore. Cupiditate qui ratione tenetur!</p>



                <div className="carousel" data-aos="fade" data-aos-duration="1000">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        spaceBetween={0}
                        centeredSlides={true}
                        effect={'fade'}

                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false,
                        // }}
                        modules={[EffectFade]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="img-container">
                                    <img src="img/Screenshot_2024-06-16_161909-removebg-preview.png" alt="Canada" />
                                </div>
                                <div className={activeButton === 0 ? 'content show' : 'content'}>
                                    <p>Canada is one of the most sought-after destinations for immigrants due to its high standard of living, excellent healthcare and education systems, diverse and inclusive society, and vast economic opportunities. The country consistently ranks high on global quality-of-life indexes, making it an ideal place for individuals and families seeking a new home
                                        Canada offers a high quality of life with access to free public healthcare and education. The country is known for its natural beauty, with numerous national parks, mountains, and lakes to explore. Major cities like Toronto, Vancouver, and Montreal are vibrant cultural hubs with diverse populations, offering a mix of international cuisines, festivals, and arts scenes.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="img-container">
                                    <img src="img/photo-1624138784614-87fd1b6528f8.jpg" alt="Australia" />
                                </div>

                                <div className={activeButton === 1 ? 'content show' : 'content'}>
                                    <p>Australia is renowned for its high quality of life, beautiful landscapes, and vibrant cities. Known for its excellent healthcare and education systems, robust economy, and diverse culture, Australia offers a wealth of opportunities for individuals and families looking to start a new chapter of their lives in a welcoming and dynamic country.Australia is famous for its diverse and inclusive society. Major cities like Sydney, Melbourne, Brisbane, and Perth offer a mix of cultural experiences, excellent public services, and a high standard of living. The country’s natural beauty, from stunning beaches to expansive outback, adds to the allure.Australia has a strong and diverse economy with key industries including healthcare, construction, technology, and mining. The job market is thriving, and the government provides various support services for new migrants, including language training and employment assistance.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="button-container">
                            <button onClick={() => goToSlide(0)} className={activeButton === 0 ? 'active-btn' : ''}>Canada</button>
                            <button onClick={() => goToSlide(1)} className={activeButton === 1 ? 'active-btn' : ''}>Australia</button>
                        </div>
                    </Swiper>
                    <Link to={'#'} className='apply-btn'>Apply Now</Link>

                </div>

            </div>
        </div>
    );
}

export default Immigration;
