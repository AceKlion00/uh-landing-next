import { useEffect, useState } from 'react';
import Head from 'next/head';

import { FAQS, FAQCategory } from '../core/data/faqs';
import { Layout } from '../components/layout/layout';
import { Accordion } from '../components/ui-kit/misc/accordion';
import { enumToOptions } from '../components/ui-kit/utils';
import SearchInput from '../components/ui-kit/input/search-input';
import smoothScrollTo from '../components/ui-kit/services/smooth-scroll-to';

export default function Faqs() {
  const [faqs, setFaqs] = useState(FAQS);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategory = enumToOptions<FAQCategory>(FAQCategory);

  useEffect(() => {
    smoothScrollTo('root', 300);
  }, []);

  const filterCategory = (key: string) => {
    let updateFaqs = { ...FAQS };
    faqCategory.map(category => {
      let filteredFaq = updateFaqs[category.value];
      if (key !== '') {
        filteredFaq = filteredFaq.filter(item => item.title.toLowerCase().indexOf(key.toLowerCase()) >= 0 || item.content.toLowerCase().indexOf(key.toLowerCase()) >= 0)
      }
      updateFaqs[category.value] = filteredFaq;
    });
    setFaqs(updateFaqs);
  }

  return (<>
      <Head>
        <title>FAQs - United Hardscapes</title>
        <meta name="description" content="Check our Frequently Asked Questions and Answers page to quickly find answers to your questions." />
      </Head>
      <Layout>
        <section className="pt-65 pb-80">
          <div className="container mx-auto">
            <h3 className="text-45 font-medium text-center mb-75">FAQs</h3>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/4">
                <div className="sticky top-100 border rounded-2xl border-light shadow-primary pt-20 px-20 mb-20">
                  <SearchInput id="searchKey" name="searchKey" label="Search" placeholder="Type Search Keyword" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onSearch={filterCategory} />
                  <div className="hidden lg:block">
                    <h5 className="text-secondary text-24 font-medium mb-30">Categories</h5>
                    <div className="ml-20 mb-30">
                      {faqCategory.map((category, index) => {
                        return (<div key={index}>
                          <p className={'font-normal text-18 cursor-pointer mb-20 ' + (index === currentCategory ? 'text-primary' : 'text-light-400')}
                             onClick={() => {
                                setCurrentCategory(index);
                                smoothScrollTo(category.value, 300);
                          }}>{category.label}</p>
                        </div>);
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/4 lg:pl-20">
                {faqCategory.map((category, index) => {
                  return (<div key={index}>
                    <p className="text-24 text-primary mb-20" id={category.value}>{category.label}</p>
                    <div className="rounded-2xl border border-light mb-30 overflow-hidden">
                      <div className="border-radius-12 border-gray overflow-hidden">
                        {faqs[category.value].map(faq => {
                          return (<Accordion content={faq.content} name={faq.title} />);
                        })}
                      </div>
                    </div>
                  </div>);
                })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
