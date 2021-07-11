import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    photo: '/assets/images/testimonial/photo1.jpg',
    designPhoto: '/assets/images/testimonial/photo1-design.png',
    title: '“We had no idea where to start with our project, but you made it so simple.”',
    name: 'Valerie & Jon Petersson',
    words: 'We had no idea where to start with our project, but you made it so simple. We just chose the kit we wanted, made some minor changes, and clicked \'Order\'. We quickly found a contractor to install it, our kit was delivered and we had a new patio in days. Such a great experience. Thanks, United Hardscapes!'
  }, {
    photo: '/assets/images/testimonial/photo2.jpg',
    designPhoto: '/assets/images/testimonial/photo2-design.png',
    title: '“My only regret is we did not find United Hardscapes sooner”',
    name: 'Sara Shepard',
    words: 'My husband and I were struggling trying to explain to contractors what we wanted, we kept getting different estimates and had a hard time comparing quotes and figuring out what was best for our yard. That\'s when we found United Hardscapes. We ended up going with their custom design kit. They delivered all the materials in time and even referred us to a local contractor. My only regret is we did not find United Hardscapes sooner.'
  }, {
    photo: '/assets/images/testimonial/photo3.jpg',
    designPhoto: '/assets/images/testimonial/photo3-design.png',
    title: '“The best DIY (with help) experience I have ever had.”',
    name: 'Donald Maxwell',
    words: 'During a recent rainstorm our retaining wall collapsed. Looking to save money I decided to redo the wall myself. I found the United Hardscapes website, talked to Dominic, their representative, and he helped me choose the right kit. The best DIY (with help) experience I have ever had.'
  }
];

const swiperBreakPoints = {
  640: {
    width: 640,
    slidesPerView: 1,
  },
  768: {
    width: 768,
    slidesPerView: 2,
  },
  1024: {
    width: 1024,
    slidesPerView: 3,
  }
};

interface Props {
  showDesignAvatar: boolean;
  showBackground: boolean;
}

export function TestimonialSection({ showDesignAvatar, showBackground }: Props) {
  return (<section className={showBackground ? 'pt-110 pb-20 bg-gradient-to-r from-primary-100 to-primary-75' : 'pt-110 pb-20 bg-light-50'}>
    <div className="container mx-auto">
      <h3 className={showBackground ? 'text-white text-32 text-center' : 'text-primary text-32 text-center'}>Check out what our customers have to say</h3>
    </div>
    <div className="px-10 sm:px-20 md:px-30 lg:px-40 xl:px-50 pb-50 pt-20">
      <Swiper className="w-full" breakpoints={swiperBreakPoints } spaceBetween={20}>
        {testimonials.map((testimonial, index) => (<SwiperSlide className="flex-grow" key={index}>
          <div className="bg-white rounded-lg shadow-primary text-center relative pt-80 px-40 shadow-secondary mt-90">
            <div
              className={
                'absolute w-full flex justify-center left-0 ' +
                (showDesignAvatar ? '-top-75' : '-top-55')
              }>
              <div
                className={
                  'rounded-full border-4 border-primary-50 bg-primary-50 overflow-hidden relative ' +
                  (showDesignAvatar ? 'w-140 h-140' : 'w-110 h-110')
                }
              >
                <Image src={showDesignAvatar ? testimonial.designPhoto : testimonial.photo} layout="fill" alt={testimonial.name} objectFit="cover"/>
              </div>
            </div>
            <span className="text-warning-100 text-24 font-medium">{testimonial.title}</span>
            <p className="pt-10 pb-20">{testimonial.words}</p>
            <p className="text-primary text-12 pb-35">{testimonial.name}</p>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
  </section>);
}

TestimonialSection.defaultProps = {
  showDesignAvatar: false,
  showBackground: true
}
