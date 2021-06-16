import Head from 'next/head'
import Image from 'next/image'

import { Layout } from '../components/layout/layout'
import { PopularKitsSection } from '../components/landing/popular-kits-section';
import { HowItWorksSection } from '../components/landing/how-it-works-section';
import { WhyUhKitsSection } from '../components/landing/why-uh-kits-section';
import { GallerySection } from '../components/landing/gallery-section';
import { TestimonialSection } from '../components/landing/testimonial-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="jumbotron relative overflow-hidden">
          <div><Image src="/assets/images/landing-pages/home-page/background.jpg" objectFit="cover" layout="fill" alt="background" /></div>
          <div className="absolute left-0 top-0 w-full h-full z-10">
            <div className="container mx-auto text-white h-full flex flex-col justify-start lg:justify-center font-medium mt-36 lg:mt-0">
              <h4 className="text-xl mb-2 text-center lg:text-left">Hardscaping is Hard.</h4>
              <h1 className="text-4xl mb-10 text-center lg:text-left">We make it Simple.</h1>
              <p className="text-lg mb-8 lg:max-w-md text-center lg:text-left">Plan your project, find a contractor, and buy your materials - all with the help of the industry experts.</p>
              <div className="text-center lg:text-left">
                <button className="btn-warning btn-md">Schedule a Free Consultation</button>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0"><Image src="/assets/images/landing-pages/home-page/blue-bg-shape.svg" width={1059} height={854} layout="fixed" alt="blue-bg" /></div>
          <div className="absolute left-0 top-0 right-0 lg:right-40 xl:right-60 2xl:right-80 2xl:mr-80 bottom-0">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 right-0 mb-6 xl:mb-32"><Image src="/assets/images/landing-pages/home-page/primary-ellipse.svg" width={538} height={538} layout="fixed" alt="ellipse" /></div>
              <div className="absolute bottom-0 right-0 mb-52 mr-20"><Image src="/assets/images/landing-pages/home-page/icon-set.svg" width={507} height={377} layout="fixed" alt="ellipse" /></div>
              <div className="absolute bottom-0 mb-20 md:mb-56 xl:mb-72 rounded-3xl pt-7 pr-6 pb-6 pl-6 xl:pl-36 w-96 right-10 lg:-right-20 xl:-right-56 bg-white">
                <p className="text-warning-300 text-lg font-medium mb-4 leading-6">“We had no idea where to start, but you made it so simple.”</p>
                <p className="text-light-500 mb-3 leading-5">We just chose the kit we wanted, made some minor changes, and clicked 'Order'. We quickly found a contractor to install it, our kit was delivered and we had a new patio in days. Such a great experience.</p>
                <p className="text-primary">Valerie & Jon Petersson</p>
              </div>
              <div className="absolute bottom-0 right-0 hidden xl:block -mb-2"><Image src="/assets/images/landing-pages/home-page/valerie-and-john.png" width={626} height={723} layout="fixed" alt="ellipse" /></div>
            </div>
          </div>
        </section>
        <HowItWorksSection />
        <WhyUhKitsSection />
        <PopularKitsSection />
        <GallerySection />
        <TestimonialSection />
      </Layout>
    </>
  )
}
