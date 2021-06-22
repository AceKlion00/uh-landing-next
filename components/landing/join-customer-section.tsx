import Image from 'next/image';
import useConsultationService from '../../core/app-services/consultation-service';

interface Props {
  buttonLabel: string,
}

export default function JoinCustomerSection({ buttonLabel }: Props) {
  const consultationService = useConsultationService();
  return (<section className="relative">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between z-10 relative py-80">
      <div className="w-full lg:w-2/3 text-white">
        <h2 className="text-36 font-bold mb-5 text-center lg:text-left">Now it&apos;s your turn</h2>
        <h2 className="text-36 font-bold mb-15 text-center lg:text-left">to build the yard of your dreams.</h2>
        <p className="text-18 mb-0 text-center lg:text-left">Join over 2,000 of our happy customers.</p>
      </div>
      <div className="w-full lg:w-1/3 flex justify-center items-center mt-20 lg:mt-0">
        <button className="btn btn-warning btn-lg" onClick={consultationService.showConsultationDialog}>{buttonLabel}</button>
      </div>
    </div>
    <Image src="/assets/images/landing-pages/home-page/banner-bg.jpg" layout="fill" objectFit="cover" alt="background" />
  </section>);
}

JoinCustomerSection.defaultProps = {
  buttonLabel: 'Schedule A Free Consultation',
};
