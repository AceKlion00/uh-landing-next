import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { Accordion } from '../components/ui-kit/misc/accordion';

export default function Faqs() {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <section className="pt-65 pb-80">
          <div className="container mx-auto">
            <h3 className="text-45 font-medium text-center mb-75">FAQs</h3>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/4 bg-light-50">categories</div>
              <div className="w-full lg:w-3/4 lg:pl-20">
                <div className="rounded-lg border border-light mb-30 overflow-hidden">
                  <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="What is lorem text?" />
                  <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="What is lorem text?" />
                  <Accordion content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="What is lorem text?" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
