import Head from 'next/head';
import Image from 'next/image';

import { Layout } from '../components/layout/layout';
import { PopularKitsSection } from '../components/landing/popular-kits-section';
import { HowItWorksSection } from '../components/landing/how-it-works-section';
import { WhyUhKitsSection } from '../components/landing/why-uh-kits-section';
import { GallerySection } from '../components/landing/gallery-section';
import { TestimonialSection } from '../components/landing/testimonial-section';
import useConsultationService from '../core/app-services/consultation-service';
import { Idea } from '../core/types';
import { doGet } from '../core/api-services/http';
import JoinCustomerSection from '../components/landing/join-customer-section';
import BlueOval from '../components/misc/blue-oval';
import HowItWorks3DDesignStepsSection from '../components/landing/how-it-works-3d-design-steps-section';

interface Props {
  ideas: Idea[];
}

export default function Home({ ideas }: Props) {
  const consultationService = useConsultationService();
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space."/>
      </Head>
      <Layout>
        <section className="h-855 relative overflow-hidden">
          <div><Image src="/assets/images/landing-pages/home-page/background.jpg" objectFit="cover" layout="fill" alt="background"/></div>
          <div className="absolute left-0 top-0"><BlueOval/></div>
          <div className="absolute bottom-0 right-0 -mb-150 lg:mb-0 mr-235 lg:mr-250 2xl:mr-450">
            <div className="absolute ml-75 mt-110">
              <Image src="/assets/images/landing-pages/home-page/primary-ellipse.svg" width={515} height={515} layout="fixed" alt="ellipse"/>
            </div>
            <div className="absolute ml-75 mt-110">
              <Image src="/assets/images/landing-pages/home-page/icon-set.svg" width={507} height={377} layout="fixed" alt="ellipse"/>
            </div>
            <div
              className="absolute bg-light-50 w-345 rounded-3xl pt-25 pr-20 pb-20 pl-20 xl:pl-120 mt-230 md:mt-250 ml-500">
              <p className="text-warning-300 text-16 font-medium mb-15 leading-6">“We had no idea where to start, but you made it so simple.”</p>
              <p className="text-light-500 text-13 mb-10 leading-5">We just chose the kit we wanted, made some minor changes, and clicked &apos;Order&apos;. We quickly found a contractor to install it, our kit was delivered and we had a new patio in days. Such a great experience.</p>
              <p className="text-primary text-13">Valerie & Jon Petersson</p>
            </div>
            <div className="relative invisible xl:visible -mb-10">
              <Image src="/assets/images/landing-pages/home-page/valerie-and-john.png" width={626} height={723} layout="fixed" alt="ellipse"/>
            </div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full">
            <div
              className="container mx-auto text-white h-full flex flex-col justify-start lg:justify-center font-medium mt-130 lg:mt-0">
              <h4 className="text-24 mb-10 text-center lg:text-left">Hardscaping is Hard.</h4>
              <h1 className="text-40 mb-30 text-center lg:text-left font-normal">We make it Simple.</h1>
              <p className="text-18 mb-25 lg:max-w-390 text-center lg:text-left">Plan your project, find a contractor, and buy your materials - all with the help of the industry experts.</p>
              <div className="text-center lg:text-left">
                <button className="btn btn-warning btn-lg" onClick={consultationService.showConsultationDialog}>Schedule a Free Consultation </button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-80">
          <div className="container mx-auto text-center">
            <h4 className="text-32 text-primary max-w-700 mx-auto mb-30">Want to upgrade your outdoor space, but not sure where to get started? </h4>
            <div className="text-18 text-light-500">
              <p className="mb-30">We've got you covered!</p>
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
        <GallerySection initialIdeas={ideas} />
        <JoinCustomerSection/>
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
