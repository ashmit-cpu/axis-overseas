import React from 'react';
import '../../../styles/OurServices.css';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


function OurServices() {
  return (
    <div className='OurServices'>
      <div className="row">
        <div className="left-col">
          <div className="content">
            <h2>Our Services</h2>
            <p>Axis Overseas Careers® is the Final Destination for
              Immigration, Study Abroad and Visa Consultants in Kerala,
              India, UAE and UK We are the Pioneer in Overseas Education,
              Overseas Immigration, Permanent Residency, Citizenship.</p>
          </div>
        </div>
        <div className="right-col">

          <div className="carousel">
            <div className="card-container">
              <Swiper

                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                navigation={true}
                pagination={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <h2>Pre Assessment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores magnam omnis doloribus accusantium praesentium dicta aperiam dolore cupiditate tempore temporibus libero, voluptatem vitae, soluta odio facilis, dolor iure. Quasi!</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <h2>Pre Assessment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores magnam omnis doloribus accusantium praesentium dicta aperiam dolore cupiditate tempore temporibus libero, voluptatem vitae, soluta odio facilis, dolor iure. Quasi!</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <h2>Pre Assessment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores magnam omnis doloribus accusantium praesentium dicta aperiam dolore cupiditate tempore temporibus libero, voluptatem vitae, soluta odio facilis, dolor iure. Quasi!</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <h2>Pre Assessment</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores magnam omnis doloribus accusantium praesentium dicta aperiam dolore cupiditate tempore temporibus libero, voluptatem vitae, soluta odio facilis, dolor iure. Quasi!</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="evaluation-bg">
            <img src="img/evaluation.png" alt="evaluation" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurServices