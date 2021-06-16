import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { homeContent } from '../../core/data/home'

export function PopularKitsSection() {
  const kitSeries = homeContent.kitSeries;

  return (<section className="py-36 bg-secondary">
    <h1 className="text-white text-3xl text-center">Looking for a ready-to-go solution?</h1>
    <div className="px-12">
      <Swiper spaceBetween={20} slidesPerView={3}>
        {kitSeries.map((kitSerie, i) => (<SwiperSlide key={i}>
          <div className="rounded-lg p-3 bg-white">
            <Image className="rounded-lg overflow-hidden" src={kitSerie.image} width={kitSerie.width} height={kitSerie.height} layout="responsive" alt={kitSerie.name}></Image>
            <div className="flex justify-between text-light-400 pt-4 pb-2 font-medium">
              <span>{kitSerie.name}</span>
              <span>{kitSerie.price}</span>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
  </section>);
}
