import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout/layout';
import useConsultationService from '../core/app-services/consultation-service';

export default function WhyUH() {
  const consultationService = useConsultationService();
  const features = [
    {
      image: '/assets/images/landing-pages/why-uh/features/onsite-consultation.svg',
      title: 'Elegant and Functional',
      comment: 'Each kit is designed with your goals in mind. Whether you\'re looking to entertain, want something simple or have a problem you need a Hardscape solution for, our kits have that perfect balance of elegance and functionality built-in.',
    },
    {
      image: '/assets/images/landing-pages/why-uh/features/self-service.svg',
      title: 'Simple and stress free',
      comment: 'Take the guesswork out of your project and eliminate contractor miscommunication with our simple to articulate plans and easy to follow installation guidelines. By having your materials properly calculated, you have little to worry about.',
    },
    {
      image: '/assets/images/landing-pages/why-uh/features/ai-consultant.svg',
      title: 'Efficient and Affordable',
      comment: 'Streamline your entire hardscape project. From design to choosing materials and even comparing contractor quotes, our kits make it easier for you to get your project completed sooner and within a budget, you can afford.',
    },
  ];
  return (
    <>
      <Head>
        <title>United Hardscapes - Why Choose Our Kits</title>
        <meta name="description" content="With such a variety of hardscape products on the market, it can be hard to make a choice. Learn why UH Kits are better than anything you have considered before." />
      </Head>
      <Layout>
        <section className="bg-secondary">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="pt-70 lg:pt-120 pb-50 lg:pb-110 text-center lg:text-left text-white">
                <h2 className="text-45 font-normal mb-15">Why UH Kits</h2>
                <p className="text-14 mb-20 pr-0 lg:pr-100">With such a variety of hardscaping products on the market, it might be hard to make the right choice.</p>
                <p className="text-14 mb-20 pr-0 lg:pr-100">Learn why UH Hardscape Kits are better than anything you might have considered before.</p>
              </div>
              <div className="relative">
                <div className="invisible lg:visible lg:-bottom-55 xl:-bottom-70 absolute w-full max-w-530 2xl:max-w-600 px-0 xl:px-30">
                  <Image src="/assets/images/landing-pages/why-uh/main.png" width="551" height="495" layout="responsive" alt="kits" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-105 pb-90">
          <div className="container mx-auto text-center">
            <div className="mx-0 lg:mx-80 mb-50">
              <p className="text-18 text-light-500 mb-30">Figuring out your Hardscape project is hard - you're not sure where to begin, what can be done, what it's going to cost, or even how to compare estimates and that's just before you hire a contractor.</p>
              <p className="text-18 text-light-500 mb-60">Then trying to visualize your project, wondering if you are choosing the right materials, and worrying about if everything will be delivered as promised keeps you up at night.</p>
              <h3 className="text-32 text-primary mb-20">There is a better way</h3>
              <p className="text-light-500 mb-30">United Hardscapes has simplified the entire hardscape process through our DIY and Contractor friendly kits.</p>

              <div className="bg-warning text-white p-25 rounded-2xl">
                <h5 className="text-24 font-bold">What is a kit?</h5>
                <p className="text-18">Think of it as a turnkey Hardscape plan personalized for you. That includes concierge-level guidance, visual renderings and all the materials ready to go to complete your project.</p>
              </div>
            </div>

            <h3 className="text-32 text-primary mb-50">Why United Hardscapes Kits?</h3>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-30">
              {features.map((feature: { image: string, title: string, comment: string }, index: number) => (
                <div className="relative border border-light-75 rounded-xl shadow-primary px-40 pt-40 pb-60" key={index}>
                  <Image src={feature.image} width="90" height="99" alt={feature.title} />
                  <h6 className="text-24 text-primary mt-15 mb-30">{feature.title}</h6>
                  <p className="text-light-500">{feature.comment}</p>
                  <div className="absolute -bottom-25 left-1/2 transform -translate-x-1/2">
                    <Image src="/assets/images/landing-pages/why-uh/check.svg" alt="Checkmark" width="40" height="40" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center mt-40 md:mt-80">
              <button className="btn btn-warning btn-lg w-full md:w-auto mr-0 md:mr-20" onClick={consultationService.showConsultationDialog}>Book A Free Consultation</button>
              <Link href={'/kits'}>
                <button className="btn btn-primary btn-lg w-full md:w-auto mt-15 md:mt-0">View Our Signature Kits</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-light-50 py-80">
          <div className="container mx-auto">
            <h3 className="text-32 text-primary text-center mb-50">FAQs</h3>
            {/* TODO: FAQ section */}
            <div className="flex justify-center">
              <Link href={'/faqs'}>
                <button className="btn btn-warning btn-lg w-full md:w-auto mt-15 md:mt-0">Go To FAQs</button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
