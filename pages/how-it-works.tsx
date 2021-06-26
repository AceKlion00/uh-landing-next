import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Layout } from '../components/layout/layout';
import { howItWorksContents, HowItWorksType } from '../core/data/how-it-works';
import useConsultationService from '../core/app-services/consultation-service';
import { shimmerUrl } from '../components/ui-kit/common/blur-image';

export default function HowItWorks() {
  const consultationService = useConsultationService();
  const howItWorkTypes = [HowItWorksType.Designing, HowItWorksType.Installing];
  const [workType, setWorkType] = useState(HowItWorksType.Designing);
  return (
    <>
      <Head>
        <title>How It Works - United Hardscapes</title>
        <meta name="description" content="Learn how you can plan your hardscape project and get an outdoor space of your dreams in just a few steps steps." />
      </Head>
      <Layout>
        <section className="bg-secondary">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="pt-70 lg:pt-120 pb-50 lg:pb-110 text-center lg:text-left text-white">
                <h2 className="text-45 font-normal mb-15">How It Works</h2>
                <p className="text-14 mb-20 pr-0 lg:pr-100">Creating the yard of your dreams can be challenging.</p>
                <p className="text-14 mb-20 pr-0 lg:pr-100">United Hardscapes makes it simple by splitting this process
                  into 2 main phases: kit design and kit installation.</p>
                <p className="text-14 mb-20 pr-0 lg:pr-100">Learn how both of these processes work below.</p>
              </div>
              <div className="relative">
                <div className="invisible lg:visible lg:-bottom-55 xl:-bottom-70 absolute w-full max-w-530 2xl:max-w-600 px-0 xl:px-30">
                  <Image className="rounded-xl overflow-hidden shadow-lg" src="/assets/images/landing-pages/how-it-works/main.png" width="551" height="495" layout="responsive" alt="kits" placeholder="blur" blurDataURL={shimmerUrl} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 md:mt-130 mb-90 mx-15">
          <div className="container px-0 mx-auto">
            <div className="grid grid-cols-2 relative">
              {howItWorkTypes.map((type: HowItWorksType, index: number) => (
                <div
                  key={index}
                  className={
                    'relative flex justify-center py-20 cursor-pointer rounded-t-xl ' +
                    (workType === type ? 'bg-light-50 border border-light-75 border-b-0 z-10 shadow-primary' : 'lg:border-b border-light-75 z-0')
                  }
                  onClick={() => setWorkType(type)}>
                  <span className="text-15 lg:text-32 text-primary">{howItWorksContents[type].title}</span>
                </div>
              ))}
              <div className="hidden sm:block absolute bg-warning rounded-xl text-white font-bold text-12 z-30 px-15 py-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span>OR</span>
              </div>
            </div>
          </div>
          <div className="container shadow-primary bg-light-50 mx-auto border border-light-75 border-t-0 rounded-b-xl pb-60 md:pb-90 z-20 relative">
            {howItWorksContents[workType].items.map((item: any, itemIndex: number) => (
              <div className="grid grid-cols-1 lg:grid-cols-2 py-45" key={itemIndex}>
                <div className={'order-0 ' + (itemIndex % 2 ? 'lg:order-2' : 'lg:order-1')}>
                  <h5 className="text-24 font-normal text-warning mb-30">{item.title}</h5>
                  <h6 className="text-18 font-normal text-light-500 mb-30">{item.comment}</h6>
                  <ul className="list-disc text-primary pl-25 md:pl-0">
                    {item.steps.map((step: any, stepIndex: number) => (
                      <li className="mb-30" key={stepIndex}>
                        <p className="text-18 font-bold text-primary">{step.title}</p>
                        <p className="text-14 text-light-500">{step.comment}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={itemIndex % 2 ? 'order-1' : 'order-2'}>
                  <div
                    className={
                      'max-w-full lg:max-w-400 xl:max-w-500 shadow-primary rounded-lg bg-white mt-50 lg:mt-100 xl:mt-50 ' +
                      (itemIndex % 2 ? 'ml-0 mr-auto' : 'mr-0 ml-auto')
                    }>
                    <Swiper spaceBetween={20} slidesPerView={1} navigation>
                      {item.images.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="497" height="364" layout="responsive" alt="Carousel Image" placeholder="blur" blurDataURL={shimmerUrl} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-70">
              <button className="btn btn-warning btn-lg w-full md:w-auto mr-0 md:mr-20" onClick={consultationService.showConsultationDialog}>Book A Free Consultation</button>
              <Link href='/kits' passHref>
                <button className="btn btn-primary btn-lg w-full md:w-auto mt-15 md:mt-0">View Our Signature Kits</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
