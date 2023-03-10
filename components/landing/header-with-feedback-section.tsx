import Image from 'next/image';
import BlueOval from '../misc/blue-oval';
import useConsultationService from '../../core/app-services/consultation-service';

export default function HeaderWithFeedbackSection() {
  const consultationService = useConsultationService();
  return (
    <>
      <section className="h-855 relative overflow-hidden">
        <div><Image src="/assets/images/landing-pages/home-page/background.jpg" objectFit="cover" layout="fill" alt="background"/></div>
        <div className="absolute left-0 top-0"><BlueOval/></div>
        <div className="absolute bottom-0 right-0 -mb-150 lg:mb-0 mr-235 lg:mr-250 2xl:mr-450">
          <div className="absolute ml-75 mt-110">
            <Image src="/assets/images/landing-pages/home-page/primary-ellipse.svg" width={515} height={515} layout="fixed" alt="ellipse"/>
          </div>
          <div className="absolute ml-75 mt-110">
            <Image src="/assets/images/landing-pages/home-page/icon-set.svg" width={507} height={377} layout="fixed" alt="ellipse"/>
          </div>
          <div
            className="absolute bg-light-50 w-345 rounded-3xl pt-25 pr-20 pb-20 pl-20 xl:pl-120 mt-230 md:mt-250 ml-500">
            <p className="text-warning-300 text-16 font-medium mb-15 leading-6">“We had no idea where to start, but you made it so simple.”</p>
            <p className="text-light-500 text-13 mb-10 leading-5">We just chose the kit we wanted, made some minor changes, and clicked &apos;Order&apos;. We quickly found a contractor to install it, our kit was delivered and we had a new patio in days. Such a great experience.</p>
            <p className="text-primary text-13">Valerie & Jon Petersson</p>
          </div>
          <div className="relative invisible xl:visible -mb-10">
            <Image src="/assets/images/landing-pages/home-page/valerie-and-john.png" width={626} height={723} layout="fixed" alt="ellipse"/>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full">
          <div
            className="container mx-auto text-white h-full flex flex-col justify-start lg:justify-center font-medium mt-130 lg:mt-0">
            <h4 className="text-24 mb-10 text-center lg:text-left">Hardscaping is Hard.</h4>
            <h1 className="text-40 mb-30 text-center lg:text-left font-normal">We make it Simple.</h1>
            <p className="text-18 mb-25 lg:max-w-390 text-center lg:text-left">Plan your project, find a contractor, and buy your materials - all with the help of the industry experts.</p>
            <div className="text-center lg:text-left">
              <button className="btn btn-warning btn-lg" onClick={consultationService.showConsultationDialog}>Schedule a Free Consultation </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
