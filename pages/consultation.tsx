import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import useConsultationService from '../core/app-services/consultation-service';
import HeaderWithFeedbackSection from '../components/landing/header-with-feedback-section';
import { HowItWorksSection } from '../components/landing/how-it-works-section';
import { WhyUhKitsSection } from '../components/landing/why-uh-kits-section';
import { PopularKitsSection } from '../components/landing/popular-kits-section';
import { GallerySection } from '../components/landing/gallery-section';
import { Idea } from '../core/types';
import { doGet } from '../core/api-services/http';
import { TestimonialSection } from '../components/landing/testimonial-section';
import JoinCustomerSection from '../components/landing/join-customer-section';

interface Props {
  ideas: Idea[];
}

export default function Consultation({ ideas }: Props) {
  const consultationService = useConsultationService();
  return (
    <>
      <Head>
        <title>United Hardscapes: Signature Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space."/>
      </Head>
      <Layout>
        <HeaderWithFeedbackSection/>
        <section className="py-80">
          <div className="container mx-auto mb-85">
            <p className="text-24 text-light-500 text-center max-w-950 mx-auto">Get started with a Hardscape Architect to design your patio, walkway, poolscape, retaining wall, or stair project.</p>
          </div>
          <HowItWorksSection/>
          <div className="flex justify-center mt-50">
            <button className="btn btn-warning btn-lg w-full sm:w-auto" onClick={consultationService.showConsultationDialog}>Schedule A Free Consultation</button>
          </div>
        </section>
        <PopularKitsSection/>
        <GallerySection initialIdeas={ideas}/>
        <TestimonialSection />
        <JoinCustomerSection />
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
