import Head from 'next/head';

import { FAQS, FAQCategory } from "../core/data/faqs";
import { Layout } from '../components/layout/layout';
import { Accordion } from '../components/ui-kit/misc/accordion';
import {enumToOptions} from "../components/ui-kit/utils";

export default function Faqs() {
  const faqs = FAQS;
  const faqCategory = enumToOptions<FAQCategory>(FAQCategory);
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
              <div className="w-full lg:w-1/4">
                <div className="sticky top-100 rounded-lg border-light shadow-primary overflow-hidden pt-20 px-20 mb-20">
                  <input type="text"/>
                  <div className="hidden lg:block">
                    <h5 className="text-secondary text-24 font-medium mb-30">Categories</h5>
                    <div className="ml-20 mb-30">
                      {faqCategory.map(category => {
                        return (<div>
                          <p className="text-light-400 font-normal text-18 cursor-pointer mb-20">{category.label}</p>
                        </div>);
                      })}
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-full lg:w-3/4 lg:pl-20">
                  {faqCategory.map(category => {
                    // TODO : removed optionLabel pipe behind category.value
                    return (<>
                      <p className="text-24 text-primary" id={category.value}>{category.value}</p>
                      <div className="rounded-lg border border-light mb-30 overflow-hidden">
                        <div className="border-radius-12 border-gray overflow-hidden">
                          {faqs[category.value].map(faq => {
                            return (<Accordion content={faq.content} name={faq.title} />);
                          })}
                        </div>
                      </div>
                    </>);
                  })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
