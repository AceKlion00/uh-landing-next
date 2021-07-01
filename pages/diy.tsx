import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../components/layout/layout';
import BlueOval from '../components/misc/blue-oval';
import useConsultationService from '../core/app-services/consultation-service';
import { HowItWorksSection } from '../components/landing/how-it-works-section';
import { WhyUhKitsSection } from '../components/landing/why-uh-kits-section';
import JoinCustomerSection from '../components/landing/join-customer-section';
import { FAQS, FAQCategory } from '../core/data/faqs';
import { Accordion } from '../components/ui-kit/misc/accordion';

export default function DIY() {
  const consultationService = useConsultationService();

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
            <div className="container mx-auto mt-40 lg:-mt-120">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center">
                  <div className="text-white">
                    <h3 className="text-32 font-medium text-center lg:text-left">Do It Yourself.</h3>
                    <h1 className="text-45 lg:text-55 mb-20 text-center lg:text-left">With our help.</h1>
                    <p className="text-18 mb-50 text-center lg:text-left">Plan your hardscape project, receive a free project design, and buy materials - all with the help of our industry experts.</p>
                    <div className="text-center lg:text-left">
                      <button className="btn btn-warning btn-lg btn-sm-block shadow-warning" onClick={consultationService.showConsultationDialog}>Schedule A Free Consultation</button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="max-w-645 lg:pl-30">
                    <Image src="/assets/images/landing-pages/diy/main.png" width={676} height={601} layout="responsive" alt="Hardscapes"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-80">
          <div className="container mx-auto mb-85">
            <p className="text-24 text-light-500 text-center max-w-950 mx-auto">Get started with a Hardscape Architect to design your patio, walkway, poolscape, retaining wall, or stair project - <span className="text-warning">for free.</span></p>
          </div>
          <HowItWorksSection />
          <div className="flex justify-center mt-50">
            <button className="btn btn-warning btn-lg w-full sm:w-auto" onClick={consultationService.showConsultationDialog}>Schedule A Free Consultation</button>
          </div>
        </section>
        <WhyUhKitsSection />
        <section className="py-80 bg-white">
          <div className="container mx-auto">
            <h3 className="text-32 text-primary text-center mb-5">FAQs</h3>
            <div className="max-w-865 mx-auto rounded-2xl border border-b-0 border-light overflow-hidden mb-50">
              {FAQS[FAQCategory.DIYInstallation].map((item: { title: string, content: string }, index: number) => (
                <Accordion content={item.content} name={item.title} key={index} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href='/faqs' passHref>
                <button className="btn btn-warning btn-lg btn-sm-block">Go To FAQs</button>
              </Link>
            </div>
          </div>
        </section>
        <JoinCustomerSection buttonLabel="Schedule A Free Consultation" />
      </Layout>
    </>
  );
}
