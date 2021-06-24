import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/layout/layout';
import usePartnerRequestService from '../core/app-services/partner-request-service';

export default function Partners() {
  const partnerRequestService = usePartnerRequestService();

  return (
    <>
      <Head>
        <title>Partners - United Hardscapes</title>
        <meta name="description" content="Whether you are a contractor or own a local garden center, fill in our application and we will get back to you regarding our partnership opportunities." />
      </Head>
      <Layout>
        <section className="my-100">
          <h2 className="text-secondary text-45 font-normal text-center mb-60">Partners</h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden text-white">
              <div className="relative text-center lg:text-left p-40">
                <div className="relative z-20">
                  <h3 className="text-45 font-medium mb-40">Garden Centers</h3>
                  <h5 className="text-24 font-medium mb-40">Are you the owner or manager of a Hardscape supply center?</h5>
                  <p className="text-14 mb-20">Would you like to generate more online sales for your business?</p>
                  <p className="text-14 mb-50"><b>Reach out</b> to United Hardscapes to see how your company can join our network as a local supplier. </p>
                  <button className="btn btn-warning btn-lg" onClick={partnerRequestService.showSupplierRequestDialog}>Join Now</button>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-90 z-10">{/* Overlay */}</div>
                  <Image src="/assets/images/landing-pages/partners/contractor-background.jpg" objectFit="cover" layout="fill" alt="background" />
                </div>
              </div>
              <div className="relative p-40 text-center lg:text-right">
                <div className="relative z-20">
                  <h3 className="text-45 font-medium mb-40">Contractors</h3>
                  <h5 className="text-24 font-medium mb-40">Are you a hardscape business owner or entrepreneur?</h5>
                  <p className="text-14 mb-20">Do you have a passion for hardscaping, provide great customer service, and can handle more work?</p>
                  <p className="text-14 mb-20">We are looking for passionate hard-working hardscapers to provide estimates and serve our customers&apos; installation needs.</p>
                  <p className="text-14 mb-50">If you are interested in <b>learning more and applying</b>, check out our Authorized Contractors section.</p>
                  <Link href="/contact-us" passHref><button className="btn btn-warning btn-lg">Apply Now</button></Link>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-secondary bg-opacity-90 z-10">{/* Overlay */}</div>
                  <Image src="/assets/images/landing-pages/partners/contractor-background.jpg" objectFit="cover" layout="fill" alt="background" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
