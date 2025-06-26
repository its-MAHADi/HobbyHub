import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const HobbySlider = ({hobbys}) => {
  return (
     <div className="max-w-8xl w-full mx-auto ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          }
        }}
      >
        {
          hobbys.map((hobby) => (
            <SwiperSlide key={hobby._id}>
              <div className="relative rounded overflow-hidden group shadow-lg">
                <img src={hobby.image} alt="" className="w-full h-screen object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 space-y-2">
                <h1 className='text-xl font-semibold'>
                  <Typewriter
                   words={['Join Hobby Groups', 'Discover New Passions', 'Share Your Skills']}
                   loop={true}
                   cursor
                   cursorStyle='_'
                   typeSpeed={70}
                   deleteSpeed={50}
                   delaySpeed={1000}
                 />
                </h1>
                  <h2 className="text-3xl font-bold">{hobby.hobbyCategory}</h2>
                  <p className="text-xm">{hobby.description.slice(0, 100)}...</p>
                  <Link to="/create-group" className="mt-2 px-4 py-1 bg-amber-500 hover:bg-indigo-600 hover:text-white text-black cursor-pointer font-semibold rounded">
                    Create Hobbys
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default HobbySlider
