import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

import { Layout } from '../components/layout/layout';
import { TestimonialSection } from '../components/landing/testimonial-section';
import { Idea } from '../core/types';
import { doGet } from '../core/api-services/http';
import JoinCustomerSection from '../components/landing/join-customer-section';
import BlueOval from '../components/misc/blue-oval';
import HowItWorks3DDesignStepsSection from '../components/landing/how-it-works-3d-design-steps-section';
import useFreeDesignConsultationService from '../core/app-services/free-design-consultation-service';

SwiperCore.use([Autoplay, Pagination]);

const carouselImages = [
  '/assets/images/landing-pages/home-page/carousel/house-with-patio.jpg',
  '/assets/images/landing-pages/home-page/carousel/pool-patio.jpg',
  '/assets/images/landing-pages/home-page/carousel/stair-with-retaining-wall.jpg',
  '/assets/images/landing-pages/home-page/carousel/house-with-all-kits.jpg',
];
const carouselBlurImages = [
  '/assets/images/landing-pages/home-page/carousel/patio-blur.jpg',
  '/assets/images/landing-pages/home-page/carousel/pool-patio-blur.jpg',
  '/assets/images/landing-pages/home-page/carousel/stairs-blur.jpg',
  '/assets/images/landing-pages/home-page/carousel/all-kits-blur.jpg',
];

const brandsList = [
  {
    src: '/assets/images/landing-pages/home-page/brands/cambridge.png',
    width: 163,
    height: 56
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/techo-bloc.png',
    width: 128,
    height: 49
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/versa-lock.png',
    width: 169,
    height: 76
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/belgard.png',
    width: 145,
    height: 63
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/uni-lock.png',
    width: 168,
    height: 60
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/delgado-stone.png',
    width: 150,
    height: 85
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/eldorado-stone.png',
    width: 197,
    height: 55
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/rosetta.png',
    width: 170,
    height: 31
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/techniseal.png',
    width: 158,
    height: 44
  },
  {
    src: '/assets/images/landing-pages/home-page/brands/srw.png',
    width: 104,
    height: 48
  },
];

interface Props {
  ideas: Idea[];
}

export default function Home({ ideas }: Props) {
  const freeDesignConsultationService = useFreeDesignConsultationService();
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space."/>
      </Head>
      <Layout>
        <section className="h-615 2xl:h-805 relative overflow-hidden">
          <div className="hidden xs:block"><Image src="/assets/images/landing-pages/home-page/bg-screen.jpg" quality={75} objectFit="cover" layout="fill" alt="background" placeholder="blur" blurDataURL="/assets/images/landing-pages/home-page/bg-blur.jpg"/></div>
          <div className="absolute bottom-0 xs:hidden"><Image src="/assets/images/landing-pages/home-page/bg-mobile.jpg" quality={75} width={480} height={304} alt="background" placeholder="blur" blurDataURL="/assets/images/landing-pages/home-page/bg-blur.jpg"/></div>
          <div className="absolute left-0 -top-425 lg:-top-325 xl:-top-225 2xl:-top-125 overflow-hidden lg:overflow-visible">
            <BlueOval />
          </div>
          <div className="absolute left-0 top-0 w-full h-full flex lg:items-center">
            <div className="container mx-auto mt-40 lg:-mt-40">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center">
                  <div className="text-white">
                    <h1 className="text-32 font-bold mb-20 text-center lg:text-left">This summer, get the yard<br className="hidden lg:inline-block"/> you&apos;ve always dreamed of!</h1>
                    <p className="text-18 mb-50 text-center lg:text-left">Work with a Hardscape Architect<br className="hidden lg:inline-block"/> to redesign your yard - for free.</p>
                    <div className="text-center lg:text-left">
                      <button className="btn btn-warning btn-lg btn-sm-block shadow-warning" onClick={freeDesignConsultationService.showFreeDesignConsultationDialog}>Get Started</button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative max-w-645">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 4000 }}
                      pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                      }}
                    >
                      {carouselImages.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="644" height="473" quality={100} layout="responsive" alt="Carousel Image" placeholder="blur" blurDataURL={carouselBlurImages[imageIndex]} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-pagination absolute w-full h-40 bottom-0 left-0 flex justify-center items-center z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-45 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-24 text-secondary my-35">Ensure long-lasting results with hundreds of options from leading brands.</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-30">
              {brandsList.map((brand, index) => (
                  <div className="w-full my-25" key={index}>
                    <Image src={brand.src} height={brand.height} width={brand.width} alt="brand" />
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-80 bg-light-50">
          <div className="container mx-auto text-center">
            <h4 className="text-32 text-primary max-w-700 mx-auto mb-30">Want to upgrade your outdoor space, but not sure where to get started? </h4>
            <div className="text-18 text-light-500">
              <p className="mb-30">We&apos;ve got you covered!</p>
              <p className="mb-30"><b className="text-warning">We are like no other hardscape supplier around</b>, putting the homeowner first and the sale second.</p>
              <p>Just follow our simple online process</p>
            </div>
          </div>
        </section>

        <HowItWorks3DDesignStepsSection />
        <section className="pt-70 pb-90">
          <div className="container mx-auto">
            <h3 className="text-32 text-primary text-center mb-60">About Us</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div className="text-center xl:text-left">
                <div className="max-w-full xl:max-w-550 text-light-500">
                  <p className="mb-20">United Hardscapes has been on a mission of creating beautiful yards and functional spaces for years. And now more than ever we bring our passion for Hardscapes to life by <b>providing homeowners a better way to plan, visualize</b> and <b>purchase materials</b> for their projects.</p>
                  <p className="mb-20"><b className="text-primary">We are like no other hardscape supplier around</b>, putting the homeowner first and the sale second. Having been in the shoes of a contractor and designing thousands of projects firsthand, we know exactly what goes into each project to make it complete and what it really takes to plan a project correctly. From ideas to design and material kits - we have everything you or your contractor will need to <b>get your project completed sooner, with less expense, and done right the first time.</b></p>
                  <p className="mb-20">This June, we offer homeowners our hardscape design services absolutely for free.</p>
                  <p className="mb-20"><b>Get started now to build the yard of your dreams!</b> See you on the other side!</p>
                  <p>Joe Masciovecchio,</p>
                  <p>CEO of United Hardscapes</p>
                </div>
              </div>
              <div>
                <div className="max-w-430 mx-auto mt-60 xl:mt-0">
                  <Image src="/assets/images/landing-pages/home-page/joe.jpg" width="434" height="426" quality={100} alt="Joe" layout="responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialSection showDesignAvatar={true} />
        {/*<GallerySection initialIdeas={ideas} homepageType={HomePageType.Consultation} />*/}
        <JoinCustomerSection buttonLabel="Get Started Now" eventHandler={freeDesignConsultationService.showFreeDesignConsultationDialog}/>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let ideas: Idea[] = [];
  try {
    ideas = await doGet<Idea[]>('/idea-board/all?skip=0&take=9');
  } catch (e) {
    console.log('unable to fetch ideas data.', e);
  }

  return {
    props: { ideas }, // will be passed to the page component as props
  }
}
