import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Layout } from '../components/layout/layout';
import { GallerySection } from '../components/landing/gallery-section';
import { TestimonialSection } from '../components/landing/testimonial-section';
import { HomePageType, Idea } from '../core/types';
import { doGet } from '../core/api-services/http';
import JoinCustomerSection from '../components/landing/join-customer-section';
import BlueOval from '../components/misc/blue-oval';
import HowItWorks3DDesignStepsSection from '../components/landing/how-it-works-3d-design-steps-section';
import { shimmerUrl } from '../components/ui-kit/common/blur-image';
import useFreeDesignConsultationService from '../core/app-services/free-design-consultation-service';

const carouselImages = [
  '/assets/images/landing-pages/home-page/carousel/house-with-patio.jpg',
  '/assets/images/landing-pages/home-page/carousel/pool-patio.jpg',
  '/assets/images/landing-pages/home-page/carousel/stair-with-retaining-wall.jpg',
  '/assets/images/landing-pages/home-page/carousel/house-with-all-kits.jpg',
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
        <section className="h-555 xl:h-705 2xl:h-805 relative overflow-hidden">
          <div><Image src="/assets/images/landing-pages/home-page/background.jpg" objectFit="cover" layout="fill" alt="background"/></div>
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
                  <div className="max-w-645 lg:pl-30">
                    <Swiper spaceBetween={20} slidesPerView={1}>
                      {carouselImages.map((image: string, imageIndex: number) => (
                        <SwiperSlide key={imageIndex}>
                          <div className="">
                            <Image className="rounded-lg overflow-hidden cursor-pointer" src={image} width="644" height="473" layout="responsive" alt="Carousel Image" placeholder="blur" blurDataURL={shimmerUrl} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-80">
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
                <div>
                  Video
                  {/* TODO: video should be embeded here */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialSection showDesignAvatar={true} />
        <GallerySection initialIdeas={ideas} homepageType={HomePageType.Consultation} />
        <JoinCustomerSection buttonLabel="Get Started Now" eventHandler={() => console.log('outside')}/>
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
