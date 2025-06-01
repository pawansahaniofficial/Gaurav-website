import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import profilePic5 from '../../img/profile5.jpg';
import profilePic6 from '../../img/profile6.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

function Testimonials() {
  SwiperCore.use([Autoplay]);

  const clients = [
    {
      img: profilePic1,
      review:
        'He Is Pawan! Web Developer He Helped Me To Creating And Developing This Website! Him Website.',
      name: 'Er. Pawan',
    },
    {
      img: profilePic2,
      review:
         'He Is Rajan Raura He is Studing Computer Engineering With Me He Is a Technical STudent',
      name: 'Er. Rajan Raura',
    },
    {
      img: profilePic3,
      review:
        'He Is Bishal Chaudhary He Is Studing Computer Enginner With Me He Is a Technical Student .',
      name: 'Er. Bishal Chaudhary',
    },
    {
      img: profilePic4,
      review:
              'He Is Dhanraj Guro He Is Studing Computer Engineer With Me He Is a Technical Student .',
      name: 'Er. Dhanraj Guro',
    },
    {
      img: profilePic5,
      review:
              'He Is Suraj Paswan He Is Studing Computer Engineer With Me He Is a Technical Student .',
      name: 'Er.Suraj Paswan',
    },
    {
      img: profilePic6,
      review:
              'He Is Shreeram Yadav He Is Studing Computer Engineer With Me He Is a Technical Student .',
      name: 'Er.Shreeram Yadav',
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <span>{client.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
