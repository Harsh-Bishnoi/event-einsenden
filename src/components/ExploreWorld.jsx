import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swiperImgOne from '../assets/images/png/swiper-img-1.png';
import swiperImgTwo from '../assets/images/png/swiper-img-2.png';
import swiperImgThree from '../assets/images/png/swiper-img-3.png';

const ExploreWorld = () => {
    return (
        <>
            <div className="bg-img py-10 sm:py-20 md:py-25 lg:py-36">
                <div className="xl:pl-[148px] max-w-[1440px] xl:flex mx-auto gap-[47px] max-xl:px-3">
                    <div className="max-xl:pb-8 xl:w-5/12">
                        <h2 className='ff-oswald text-4xl sm:text-5xl leading-[140%] pb-[17px] text-white xl:max-w-[401px]'>Your world is the game board, and your mind is at stake.</h2>
                        <p className='ff-open text-white leading-[135%] xl:max-w-[410px]'>At the heart of Ingress is a desire to bring people together through exploration and teamwork.</p>
                    </div>
                    <div className="w-full flex max-xl:mx-auto xl:w-7/12">
                        <Swiper className=''
                            spaceBetween={25}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                1024: { slidesPerView: 3 },
                            }}>
                            <SwiperSlide className='swiper-slide'>
                                <img src={swiperImgOne} alt="" />
                                <p className='text-white pt-[27px] ff-oswald leading-[100%] text-xl paragraph'>Explore the World Around You</p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={swiperImgTwo} alt="" />
                                <p className='text-white pt-[27px] ff-oswald leading-[100%] text-xl paragraph'>Explore the World Around You</p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={swiperImgThree} alt="" />
                                <p className='text-white pt-[27px] ff-oswald leading-[100%] text-xl paragraph'>Explore the World Around You</p>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <img src={swiperImgTwo} alt="" />
                                <p className='text-white pt-[27px] ff-oswald leading-[100%] text-xl paragraph'>Explore the World Around You</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreWorld