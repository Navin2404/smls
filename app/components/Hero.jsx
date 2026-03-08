"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

export default function Hero() {

  return (

    <section id="home" className="w-full h-screen">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >

        <SwiperSlide>
          <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src="/sharping-final.mp4" type="video/mp4"/>
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/blue-cnc.jpg" className="w-full h-screen object-cover"/>
        </SwiperSlide>

        <SwiperSlide>
          <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src="/cutting-finish.mp4" type="video/mp4"/>
          </video>
        </SwiperSlide>

        

        <SwiperSlide>
          <img src="/semi-work.jpg" className="w-full h-screen object-cover"/>
        </SwiperSlide>

      </Swiper>

      {/* overlay text */}

      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-black/40 text-white text-center z-10">

        <div>

          <h1 className="text-5xl font-bold">
            SMLS Laser Cutting
          </h1>

          <p className="mt-4 text-xl">
            Precision Laser Cutting Solutions
          </p>

        </div>

      </div>

    </section>

  )
}