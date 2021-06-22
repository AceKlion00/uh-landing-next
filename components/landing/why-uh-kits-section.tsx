import Image from 'next/image';
import useConsultationService from '../../core/app-services/consultation-service';
import { shimmerUrl } from '../ui-kit/common/blur-image';

const whyUhKitsContent = [
  {
    title: 'Simple Online Process',
    description: [
      'From the initial consultation with a Hardscape Architect to receiving and reviewing your project designs and ordering materials - everything can be done online, through our easy-to-use Hardscape Hub.',
    ],
    image: '/assets/images/components/landing/why-uh/customers-with-computer.png'
  },
  {
    title: 'Wide Range Of Materials',
    description: [
      'Access the largest selection of hardscape materials all in one place. From Pavers to Natural stone, granite to veneer, we work with all the major brands and local quarry\'s to provide you the largest selection of products guaranteed.',
    ],
    image: '/assets/images/components/landing/why-uh/brands.png'
  },
  {
    title: 'Guidance You Can Trust',
    description: [
      'Work with hardscape professionals who care about your project success as much as you do.',
      'Plan your project, get bids from contractors and buy your materials - all with the guidance of the industry experts.',
      'We are like no other hardscape supplier around, putting the homeowner first and the sale second.'
    ],
    image: '/assets/images/components/landing/why-uh/contractors-wearing-white-clothes.png'
  }
];

export function WhyUhKitsSection() {
  const consultationService = useConsultationService();
  return (
    <section className="bg-light-50 py-50 lg:py-80">
      <div className="container mx-auto">
        <h3 className="text-primary text-32 text-center mb-50">Why United Hardscapes</h3>
        {whyUhKitsContent.map((item: { title: string, description: string[], image: string }, index: number) => (
          <div className="max-w-1150 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30 py-35" key={index}>
            <div className={'flex flex-col justify-center ' + (index % 2 ? 'lg:order-2' : 'lg:order-1')}>
              <div className="max-w-560 mx-auto lg:mx-0 text-center lg:text-left">
                <h6 className="text-24 text-primary font-bold mb-35">{item.title}</h6>
                {item.description.map((text: string, textIndex: number) => (
                  <p className="text-18 text-light-500 mb-35" key={textIndex}>{text}</p>
                ))}
              </div>
            </div>
            <div className={index % 2 ? 'lg:order-1' : 'lg:order-2'}>
              <div
                className={
                  'max-w-500 mx-auto lg:mx-0 shadow-secondary rounded-xl overflow-hidden ' +
                  (index % 2 ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto')
                }>
                <Image src={item.image} width={690} height={449} objectFit="cover" layout="responsive" alt={item.title} placeholder="blur" blurDataURL={shimmerUrl} />
              </div>
            </div>
          </div>
        ))}
        <div className="text-24 text-center text-light-500 mt-75">
          <p className="mb-30">We’ll help you turn your ideas into a plan.<br className="invisible lg:visible" /><span className="text-warning">Get a free consultation</span> with a Hardscape Architect.</p>
          <p className="mb-30 lg:mb-80">No commitment. Just excitement to finally get the yard you’ve always dreamed of!</p>
          <button className="btn btn-warning btn-lg" onClick={consultationService.showConsultationDialog}>Schedule A Free Consultation</button>
        </div>
      </div>
    </section>
  );
}
