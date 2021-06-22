import Image from 'next/image';
import useConsultationService from '../../core/app-services/consultation-service';

export function WhyUhKitsSection() {
  const consultationService = useConsultationService();
  return (<section className="bg-light-50 py-50 lg:py-80">
    <div className="container mx-auto">
      <h3 className="text-primary text-32 font-normal text-center mb-50">Why United Hardscapes?</h3>
      <div className="mb-50 lg:mb-70">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center lg:pr-20">
            <p className="text-primary text-center lg:text-left text-24 font-bold mb-20">Simple Online Process</p>
            <p className="text-18 font-medium">From the initial consultation with a Hardscape Architect to receiving and reviewing your project designs and ordering materials - everything can be done online, through our easy-to-use Hardscape Hub.</p>
          </div>
          <div className="w-full lg:w-1/2 py-20 lg:pl-20">
            <div className="shadow-secondary rounded-xl overflow-hidden">
              <Image src="/assets/images/landing-pages/home-page/why-uh/customers-with-computer.png" width={690} height={449} objectFit="cover" layout="responsive" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-20 lg:pr-20">
            <div className="shadow-secondary rounded-xl overflow-hidden">
              <Image src="/assets/images/landing-pages/home-page/why-uh/brands.png" width={690} height={449} objectFit="cover" layout="responsive" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center lg:pl-20">
            <p className="text-primary text-center lg:text-left text-24 font-bold mb-20">Wide Range Of Materials</p>
            <p className="text-18 font-medium">Access the largest selection of hardscape materials all in one place. From Pavers to Natural stone, granite to veneer, we work with all the major brands and local quarry's to provide you the largest selection of products guaranteed.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-20 flex flex-col justify-center lg:pr-20">
            <p className="text-primary text-center lg:text-left text-24 font-bold mb-20">Guidance You Can Trust</p>
            <p className="text-18 font-medium">Work with hardscape professionals who care about your project success as much as you do.</p>
            <p className="text-18 font-medium">Plan your project, get bids from contractors and buy your materials - all with the guidance of the industry experts.</p>
            <p className="text-18 font-medium">We are like no other hardscape supplier around, putting the homeowner first and the sale second.</p>
          </div>
          <div className="w-full lg:w-1/2 py-20 lg:pl-20">
            <div className="shadow-secondary rounded-xl overflow-hidden">
              <Image src="/assets/images/landing-pages/home-page/why-uh/contractors-wearing-white-clothes.png" width={690} height={449} objectFit="cover" layout="responsive" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-24 text-center mt-20">
        <p>We’ll help you turn your ideas into a plan.<br className="invisible lg:visible" /><span className="text-warning">Get a free consultation</span> with a Hardscape Architect.</p>
        <p className="mb-30 lg:mb-80">No commitment. Just excitement to finally get the yard you’ve always dreamed of!</p>
        <button className="btn btn-warning btn-md" onClick={consultationService.showConsultationDialog}>Schedule A Free Consultation</button>
      </div>
    </div>
  </section>);
}
