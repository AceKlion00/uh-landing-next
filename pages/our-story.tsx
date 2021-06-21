import Head from 'next/head';
import Image from 'next/image';

import { Layout } from '../components/layout/layout';

export default function OurStory() {

  const dreamImages = [
    'https://assets.unitedhardscapes.com/idea-board/266.jpg',
    'https://assets.unitedhardscapes.com/idea-board/127.jpg',
    'https://assets.unitedhardscapes.com/idea-board/130.jpg',
    'https://assets.unitedhardscapes.com/idea-board/369.jpg',
    'https://assets.unitedhardscapes.com/idea-board/411.jpg',
  ];

  const workStepImages = [
    '/assets/images/landing-pages/our-story-page/patio-design.jpg',
    '/assets/images/landing-pages/our-story-page/patio-economy.jpg',
    '/assets/images/landing-pages/our-story-page/vehicle-for-patio.jpg',
    '/assets/images/landing-pages/our-story-page/patio-entertainment.jpg'
  ];

  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>"/>
      </Head>
      <Layout>
        <section className="py-65">
          <div className="container mx-auto pb-70">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-45 text-secondary mb-60">Our Story</h2>
                <p className="text-18 font-bold mb-15">Taking the 'Hard' out of Hardscaping since 2005 <br className="hidden lg:block" />and loving every second of it.</p>
                <p className="text-18 text-light-400">Creating beautiful yards and functional solutions has been a passion of ours since the beginning and now more than ever we bring our passion for Hardscapes to life by providing homeowners a better way to plan, visualize and purchase materials for their projects.</p>
              </div>
              <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
                <div className="text-center lg:text-right">
                  <Image src="/assets/images/landing-pages/our-story-page/about-mission.png" height={314} width={442} alt="background" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-50">
            <div className="container mx-auto pt-80 pb-50 text-center">
              <h3 className="text-primary text-32 font-normal mb-45">How to get the yard of your dreams?</h3>
              <p className="lg:px-80">Work with a company like United Hardscapes. We take pride in each kit we design and sell. <br className="hidden lg:block" />From the minor details like border and cap colors to major decisions like what material is best for your project, we are here to help and guide you every step of the way.</p>
            </div>

            <div className="grid md:grid-cols-5 overflow-hidden">
              {dreamImages.map((image, index) => {
                return (<div key={index}>
                  <Image src={image} width={1090} height={817} alt="dream-image" />
                </div>);
              })}
            </div>
          </div>

          <div className="container mx-auto pt-70 text-center lg:text-left">
            <h3 className="text-primary text-32 font-normal text-center mb-50">Why We Started United Hardscapes</h3>
            <p className="mb-20">United Hardscapes was <span className="font-bold">formed to make Hardscaping simple</span>. Being in the Hardscape industry for half his life, our Founder and CEO, Joe Masciovecchio has a passion for Hardscapes, being efficient and making things simpler for customers.</p>
            <p className="mb-20">The problem is, Hardscaping is Hard, there is a lot to think about. From planning the design, choosing the materials and ensuring the project will be done right. Contactors don’t always have the time to give customers the proper attention to plan their project. So, many homeowners are left struggling and have to figure out their design for themselves.</p>
            <p className="mb-60">That’s where United Hardscapes comes in. We are different. Having been in the shoes of a contractor and designing thousands of projects first hand, we know exactly what goes into each project to make it complete and what it really takes to plan a project correctly. From ideas to design and material kits - we have everything you or your contractor will need to <span className="font-bold">get your project completed sooner, with less expense</span>, and <span className="font-bold">done right the first time</span>.</p>

            <div className="grid md:grid-cols-4 overflow-hidden mb-60 rounded-2xl">
              {workStepImages.map((image, index) => {
                return (<div key={index}>
                  <Image src={image} width={273} height={165} layout="responsive" alt="work-step" />
                </div>);
              })}
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                <p className="mb-20">United Hardscapes’ <span className="font-bold">dedicated team of Hardscape Architects, Designers, and Kit Constructors</span><br className="hidden md:block" /> takes pride in each kit we complete and <span className="font-bold">ensures customer satisfaction</span> every step of the way.</p>
                <p className="mb-20">When it comes to starting your project off right, <span className="font-bold">start first with United Hardscapes</span>.</p>
                <p className="mb-0">We thank you for taking the time to view our company information and look forward to helping you plan your Hardscaping project.</p>
              </div>
              <div className="flex lg:w-1/3 items-center justify-center">
                <div className="mt-50 lg:mt-0">
                  <Image src="/assets/images/logo-green.svg" width={288} height={82} alt="United Hardscapes" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
