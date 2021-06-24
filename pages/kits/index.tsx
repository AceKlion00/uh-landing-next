import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { Layout } from '../../components/layout/layout';
import { doGet } from '../../core/api-services/http';
import { KitType } from '../../core/types';
import useWindowDimensions from '../../components/ui-kit/hooks/use-window';
import { CustomDesignRequestSection } from '../../components/landing/custom-design-request-section';
import useImagePreview from '../../components/ui-kit/dialog/use-image-preview';
import { shimmerUrl } from '../../components/ui-kit/common/blur-image';
import Icon from '../../components/ui-kit/icon';

interface Props {
  kits: KitType[];
}

export default function Kits({ kits }: Props) {
  const imagePreviewService = useImagePreview();
  const [seriesSelection, setSeriesSelection] = useState(kits.map(kit => {
    const index = kit.kitSeries.findIndex(k => k.isBestSeller);
    return Math.max(index, 0);
  }));
  const { width: windowWidth } = useWindowDimensions();

  const changeKitSeries = (kitIndex: number, serialIndex: number, kitTypeId: string, kitSeriesId: string): void => {
    if (windowWidth < 768) {
      Router.push(`/kits/${kitTypeId}/${kitSeriesId}`);
    } else {
      const newSeriesSelection = [...seriesSelection];
      newSeriesSelection[kitIndex] = serialIndex;
      setSeriesSelection(newSeriesSelection);
    }
  }

  return (<>
      <Head>
        <title>Hardscape Kits by United Hardscapes</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
      </Head>
      <Layout>
        <section className="bg-secondary">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="pt-70 lg:pt-120 pb-50 lg:pb-110 text-center lg:text-left text-white">
                <h2 className="mb-20 font-normal text-45">Find your perfect<br/>Hardscape Kit</h2>
                <p className="text-18 mb-40 pr-0 lg:pr-100">The easiest way to design, purchase and enjoy your new Hardscape project</p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start px-20">
                  <button className="btn btn-warning btn-lg shadow-warning">Find My Perfect Kit</button>
                  <button className="btn btn-primary btn-lg shadow-primary ml-0 lg:ml-15 mt-15 lg:mt-0">Free Consultation</button>
                </div>
              </div>
              <div className="relative">
                <div className="invisible lg:visible lg:-bottom-55 xl:-bottom-70 absolute w-full px-0 xl:px-30">
                  <Image src="/assets/images/landing-pages/kits/main.png" width="571" height="495" layout="responsive" alt="kits" placeholder="blur" blurDataURL={shimmerUrl} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-light-50 pt-110 pb-30">
            <div className="container mx-auto">
              <h3 className="text-primary text-center font-light text-32">Hardscaping Simplified &trade;</h3>
              <p className="text-center text-light-500 px-0 lg:px-150 mt-35 mb-0 text-18">United Hardscapes is the Hardscape Kit company that offers a large selection of unique patio, walkway, and retaining wall kits that are both <b>Do It Yourself and contractor friendly</b>. It is simple, just choose a kit, select your materials and enjoy the outdoors.</p>
            </div>
          </div>
          {!kits.length && <h5 className="text-center text-24 text-warning font-bold py-40">No available kits found.</h5>}
          {kits.map((kit, kitIndex) => {
            const odd = kitIndex % 2;
            return (<div key={kitIndex} className={"py-70" + (odd ? "" : " bg-light-50")}>
              <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="pr-0 lg:pr-60 mb-20 lg:mb-0">
                    <h5 className="text-primary text-24 font-medium text-center lg:text-left">{kit.name}</h5>
                    <p className="mt-30 text-center text-14 lg:text-left">{kit.comment}</p>
                    <div className="ml-0 lg:ml-30 mt-30">
                      <p className="text-18 font-medium mb-10 text-center lg:text-left">Series</p>
                      <p className="text-14 text-warning-100 mb-30 text-center lg:text-left">Select one of the series to learn more and click on the &apos;Explore Kits&apos; button.</p>
                      <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
                        {kit.kitSeries.map((serial, serialIndex) => {
                          return (<div
                            key={serialIndex}
                            className={
                              "w-full md:w-150 flex items-center justify-center text-center px-20 py-15 border-light shadow-secondary rounded-lg cursor-pointer mb-15 mb-sm-0 mr-10" +
                              (seriesSelection[kitIndex] === serialIndex ? " bg-primary text-white" : "")
                            }
                            onClick={() => changeKitSeries(kitIndex, serialIndex, kit.kitTypeId, kit.kitSeries[seriesSelection[kitIndex]].kitSeriesId)}
                          >
                            {serial.name}
                          </div>);
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col-reverse lg:flex-col pl-0 lg:pl-60">
                    <div className="relative" onClick={() => imagePreviewService.preview(kit.kitSeries[seriesSelection[kitIndex]].image, kit.name)}>
                      <Image className="rounded-lg overflow-hidden cursor-pointer" src={kit.kitSeries[seriesSelection[kitIndex]].image} width={560} height={379} layout="responsive" alt={kit.name} placeholder="blur" blurDataURL={shimmerUrl} />
                      <Icon name="external_link" color="white" size={24} className="absolute bottom-20 right-20 cursor-pointer" />
                    </div>
                    <div className="hidden lg:flex justify-center lg:justify-end mt-0 mb-30 lg:mt-40 lg:mb-0">
                      <Link href={`/kits/${kit.kitTypeId}/${kit.kitSeries[seriesSelection[kitIndex]].kitSeriesId}`} passHref>
                        <button className="btn btn-warning btn-md">Explore Kits</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>);
          })}
        </section>
        <CustomDesignRequestSection />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let kits: KitType[] = [];
  try {
    kits = await doGet<KitType[]>('/kits');
  } catch (e) {
    console.log('unable to fetch kits data.', e);
  }

  return {
    props: { kits }, // will be passed to the page component as props
  }
}
