import React from 'react';
import '../../../styles/StudyAbroad.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

function StudyAbroad() {
    return (
        <div className='StudyAbroad'>
            <div className="container">
                <h2 data-aos="fade" data-aos-duration="1000">Study <span>Abroad</span></h2>
                <p data-aos="fade" data-aos-duration="1000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, enim. Sed a, necessitatibus quibusdam dolorum iusto eos nostrum culpa qui repudiandae eaque, labore adipisci laboriosam praesentium incidunt veniam esse ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem harum blanditiis perspiciatis voluptate ex rerum saepe et, libero aspernatur consequuntur a nostrum excepturi tempore dignissimos ab ipsum alias aperiam est.</p>

                <div className="card-carousels"data-aos="fade" data-aos-duration="1000">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        onSwiper={() => { }}
                        pagination={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                        className="mySwiper"

                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="img/uk.png" alt="uk" />
                                </div>
                                <div className="right-col">
                                    <h3>United Kingdom</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="img/canada.png" alt="canada" />
                                </div>
                                <div className="right-col">
                                    <h3>Canada</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat impedit, odio assumenda dolore doloremque.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="img/australia.png" alt="australia" />
                                </div>
                                <div className="right-col">
                                    <h3>Australia</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat impedit, odio assumenda dolore doloremque.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="spain" />
                                </div>
                                <div className="right-col">
                                    <h3>Spain</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat impedit, odio assumenda dolore doloremque.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="https://images.unsplash.com/photo-1600627094717-809e6a3f29f0?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="argentina" />
                                </div>
                                <div className="right-col">
                                    <h3>Argentina</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat impedit, odio assumenda dolore doloremque.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="left-col">
                                    <img src="https://images.unsplash.com/photo-1621693247912-767f47a3c382?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="brazil" />
                                </div>
                                <div className="right-col">
                                    <h3>Brazil</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit voluptatum iure repellendus officia quas adipisci ratione consequuntur quam ad aspernatur recusandae doloribus dicta quaerat impedit, odio assumenda dolore doloremque.</p>
                                    <div className="apply-btn">
                                        <span><img src="img/left-arrow.png" alt="left-arrow" /></span>
                                        <a href="#">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default StudyAbroad;
