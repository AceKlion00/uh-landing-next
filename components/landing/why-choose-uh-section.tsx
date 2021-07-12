import Image from 'next/image';

const whyChooseUh = [
  {
    title: `Work with an industry professional to plan your project - <span class="text-warning">for free</span>`,
    description: [
      'Let us turn your sketch or idea into a plan.',
      'Our Hardscape Architect will consult you about your project and create a detailed 2D Digital Blueprint so that you could get an overall idea of material costs.',
    ],
    image: '/assets/images/components/landing/why-choose-uh/call-on-laptop.png',
    imageBlur: '/assets/images/components/landing/why-choose-uh/call-on-laptop-blur.png',
  },
  {
    title: `Know exactly what your project is going to look like`,
    description: [
      'Receive a Free 3D Rendering of your project.',
      'Easily adjust layouts and have a plan in place before you order your materials.',
    ],
    image: '/assets/images/components/landing/why-choose-uh/3d-design-for-pool-patio.png',
    imageBlur: '/assets/images/components/landing/why-choose-uh/3d-design-for-pool-patio-blur.png',
  },
  {
    title: `Find the right materials for your project`,
    description: [
      'With thousands of materials to choose from, we made it easier than ever to find the best materials for your style and budget.',
      'Simply answer some basic questions about what you like and we will narrow down the best material matches for your project.',
    ],
    image: '/assets/images/components/landing/why-choose-uh/modal-screen-on-uh.png',
    imageBlur: '/assets/images/components/landing/why-choose-uh/modal-screen-on-uh-blur.png',
  },
  {
    title: `Order your materials online in minutes`,
    description: [
      'Your entire order will be calculated based on your project specifications. It will be then laid out in an easy to review format and ready to order with just one click.',
    ],
    image: '/assets/images/components/landing/why-choose-uh/order-screen-on-uh.png',
    imageBlur: '/assets/images/components/landing/why-choose-uh/order-screen-on-uh-blur.png',
  },
];

export function WhyChooseUhSection() {
  return (
    <section className="bg-light-50 py-50 lg:py-80">
      <div className="container mx-auto">
        <h3 className="text-primary text-32 text-center mb-30">Why Choose United Hardscapes</h3>
        <p className="text-secondary text-18 text-center mb-40 lg:px-200">Whether you are a Do-It-Yourselfer or you are just a homeowner trying to save on the hardscape materials, we have a solution for you.</p>
        {whyChooseUh.map((item: { title: string, description: string[], image: string, imageBlur: string }, index: number) => (
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30 py-60" key={index}>
            <div className={'flex flex-col justify-center ' + (index % 2 ? 'lg:order-2' : 'lg:order-1')}>
              <div className="max-w-560 mx-auto lg:mx-0 text-center lg:text-left">
                <h6 className="text-24 font-medium mb-40" dangerouslySetInnerHTML={{__html: item.title}} />
                {item.description.map((text: string, textIndex: number) => (
                  <p className="text-18 text-light-500 mb-20" key={textIndex}>{text}</p>
                ))}
              </div>
            </div>
            <div className={index % 2 ? 'lg:order-1' : 'lg:order-2'}>
              <div
                className={
                  'mx-auto lg:mx-0 rounded-lg overflow-hidden ' +
                  (index % 2 ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto')
                }>
                <Image src={item.image} width={640} height={403 } objectFit="cover" layout="responsive" alt={item.title} placeholder="blur" blurDataURL={item.imageBlur} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
