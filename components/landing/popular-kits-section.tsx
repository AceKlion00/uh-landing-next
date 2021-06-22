import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import { homeContent, popularKitsDescription, popularKitsTitle } from '../../core/data/home';
import { HomePageType } from '../../core/types';
import Currency from '../ui-kit/misc/currency';
import { shimmerUrl } from '../ui-kit/common/blur-image';

const swiperBreakPoints = {
  640: {
    width: 640,
    slidesPerView: 1,
  },
  768: {
    width: 768,
    slidesPerView: 2,
  },
  1024: {
    width: 1024,
    slidesPerView: 3,
  }
};

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
      <Swiper className="w-full" spaceBetween={20} breakpoints={swiperBreakPoints}>
        {kitSeries.map((kitSerie, i) => (<SwiperSlide className="flex-grow" key={i}>
          <div className="rounded-lg p-10 shadow-md bg-white">
            <Image
              className="rounded-lg overflow-hidden cursor-pointer"
              src={kitSerie.image}
              width={kitSerie.width}
              height={kitSerie.height}
              layout="responsive"
              alt={kitSerie.name}
              placeholder="blur"
              blurDataURL={shimmerUrl}
              onClick={() => location.href = `${kitSerie.link}/${kitSerie.id}`}
            />
            <div className="flex justify-between text-light-400 pt-15 pb-10 font-medium">
              <span>{kitSerie.name}</span>
              <span><Currency value={kitSerie.price}/></span>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
    <div className="flex justify-center mt-100">
      <Link href="/kits" passHref><button className="btn btn-warning btn-lg">View Signature Kits</button></Link>
    </div>
  </section>);
}
