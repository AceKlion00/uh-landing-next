import Head from 'next/head';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FAQS, FAQCategory } from "../core/data/faqs";
import { Layout } from '../components/layout/layout';
import { Accordion } from '../components/ui-kit/misc/accordion';
import {enumToOptions} from "../components/ui-kit/utils";
import {SearchInput} from '../components/ui-kit/input/search-input';

export default function Faqs() {
  const faqs = FAQS;
  const faqCategory = enumToOptions<FAQCategory>(FAQCategory);

  const schema = Yup.object().shape({
    searchKey: Yup.string().required('Required')
  });
  const form = useFormik({
    initialValues: {
      searchKey: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      console.log('values = ', values);
    }
  })

  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <section className="pt-65 pb-80">
          <form>
            <div className="container mx-auto">
              <h3 className="text-45 font-medium text-center mb-75">FAQs</h3>
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4">
                  <div className="sticky top-100 border rounded-2xl border-light shadow-primary pt-20 px-20 mb-20">
                    <SearchInput name="searchKey" value={form.values.searchKey} onChange={form.handleChange} onSearch={(key) => {
                      console.log('search triggered with ', key);
                    }}></SearchInput>
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
                      <p className="text-24 text-primary mb-20" id={category.value}>{category.label}</p>
                      <div className="rounded-2xl border border-light mb-30 overflow-hidden">
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
          </form>
        </section>
      </Layout>
    </>
  );
}
