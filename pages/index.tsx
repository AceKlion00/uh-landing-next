import Head from 'next/head';
import Image from 'next/image';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import Link from 'next/link';

import { Layout } from '../components/layout/layout';
import { TestimonialSection } from '../components/landing/testimonial-section';
import { Idea } from '../core/types';
import { doGet } from '../core/api-services/http';
import JoinCustomerSection from '../components/landing/join-customer-section';
import useFreeDesignConsultationService from '../core/app-services/free-design-consultation-service';
import useGAService from '../core/app-services/ga-service';
import { shimmerUrl } from '../components/ui-kit/common/blur-image';
import { WhyChooseUhSection } from '../components/landing/why-choose-uh-section';

SwiperCore.use([Autoplay, Pagination]);

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
  const gaService = useGAService();
  gaService.pageView('/');
  const freeDesignConsultationService = useFreeDesignConsultationService();
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space."/>
      </Head>
      <Layout>
        <section className="relative">
          <div className="h-700 overflow-hidden hidden sm:block">
            <Image src="/assets/images/landing-pages/home-page/bg-with-all-steps.png" quality={75} objectFit="cover" layout="fill" alt="HomePage" placeholder="blur" blurDataURL={shimmerUrl} />
          </div>
          <div className="h-700 overflow-hidden block sm:hidden">
            <Image src="/assets/images/landing-pages/home-page/bg-with-all-steps-mobile.png" quality={75} objectFit="cover" layout="fill" alt="HomePage" placeholder="blur" blurDataURL={shimmerUrl} />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="text-center text-white flex flex-col items-center justify-center">
              <h1 className="text-38 sm:text-45 font-medium mb-40 px-15">The Northeast&apos;s Largest Online Retailer<br className="hidden lg:block" /> of Hardscape Materials</h1>
              <p className="text-18 mb-40 px-15">Helping Homeowners plan and complete projects faster with DIY and Contractor friendly solutions.</p>
              <div className="flex flex-col md:flex-row mx-30">
                <button className="btn btn-warning btn-lg btn-sm-block m-15" onClick={freeDesignConsultationService.showFreeDesignConsultationDialog}>Get a Free Project Design</button>
                <Link href="/kits" passHref><button className="btn bg-transparent border border-white btn-lg btn-sm-block m-15">View Signature Kits</button></Link>
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

        <WhyChooseUhSection />

        <section className="py-80 bg-secondary text-white text-center">
          <h3 className="text-32 font-bold px-15 mb-30">Get Started Now!</h3>
          <p className="text-24 px-15 mb-75">Build the yard of your dreams with the help of a Hardscape Architect - <span className="text-warning">for free</span>.</p>
          <button className="btn btn-warning btn-lg m-15" onClick={freeDesignConsultationService.showFreeDesignConsultationDialog}>Get a Free Project Design</button>
        </section>

        <TestimonialSection showDesignAvatar={true} showBackground={false} />
        <JoinCustomerSection buttonLabel="Get a Free Project Design" eventHandler={freeDesignConsultationService.showFreeDesignConsultationDialog}/>
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
