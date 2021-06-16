import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import { homeContent, popularKitsDescription, popularKitsTitle } from '../../core/data/home'
import { HomePageType } from '../../core/types';

export function PopularKitsSection({ homepageType = HomePageType.Home }) {
  const kitSeries = homeContent.kitSeries;

  return (<section className={"py-80 " + (homepageType === HomePageType.Home ? "bg-secondary" : "bg-light-50")}>
    <div className="container text-center mx-auto mb-60">
      <h3 className={"text-white text-32 mb-35 " + (homepageType === HomePageType.Home ? "text-white" : "")}>
        {popularKitsTitle[homepageType]}
      </h3>
      <p className={"px-0 xl:px-150 text-18 " + (homepageType === HomePageType.Home ? "text-white" : "")}>
        {popularKitsDescription[homepageType]}
      </p>
    </div>
    <div className="px-10 sm:px-50">
      <Swiper spaceBetween={20} slidesPerView={3}>
        {kitSeries.map((kitSerie, i) => (<SwiperSlide key={i}>
          <div className="rounded-lg p-10 shadow-md bg-white">
            <Image className="rounded-lg overflow-hidden cursor-pointer" src={kitSerie.image} width={kitSerie.width} height={kitSerie.height} layout="responsive" alt={kitSerie.name}></Image>
            <div className="flex justify-between text-light-400 pt-15 pb-10 font-medium">
              <span>{kitSerie.name}</span>
              <span>{kitSerie.price}</span>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
    <div className="flex justify-center mt-100">
      <Link href="/kits"><button className="btn-warning btn-md">View Signature Kits</button></Link>
    </div>
  </section>);
}
