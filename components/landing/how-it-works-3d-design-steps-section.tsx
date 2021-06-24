import { useState } from 'react';
import Image from 'next/image';

import useFreeDesignConsultationService from '../../core/app-services/free-design-consultation-service';

const steps = [
  {
    title: 'Tell us about your project',
    description: 'Tell us a bit more about the yard of your dreams.<br/> Attach some photos of how your yard looks like currently.',
    image: '/assets/images/components/landing/3d-design-steps/mobile-with-homes.jpg',
  },
  {
    title: 'Talk to a Hardscape Architect',
    description: 'One of our Hardscape experts will get back to you to discuss your project.',
    image: '/assets/images/components/landing/3d-design-steps/man-doing-call.jpg',
  },
  {
    title: 'Get a 3D Design Of Your Project - <span class="text-primary">FREE</span>',
    description: 'We will provide you with the 2D and 3D designs along with a video walkthrough.',
    image: '/assets/images/components/landing/3d-design-steps/3d-with-all-kits.jpg',
  },
  {
    title: 'Order Hardscape Materials',
    description: 'We will provide you with a list of materials necessary to complete your project. Order from us to get the best prices on the market.',
    image: '/assets/images/components/landing/3d-design-steps/materials-on-patio.jpg',
  },
  {
    title: 'Install Your Project',
    description: 'Install your project yourself based on our installation guides or find a contractor to do it for you.',
    image: '/assets/images/components/landing/3d-design-steps/work-with-materials.jpg',
  },
];

export default function HowItWorks3DDesignStepsSection() {
  const freeDesignConsultationService = useFreeDesignConsultationService();
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <section className="relative">
      <div className="absolute w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-secondary" />
        <div className="hidden lg:block bg-light-50" />
      </div>
      <div className="relative container mx-auto z-10 pt-60 pb-70">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-white">
            <h3 className="text-32 font-bold text-center mb-60">How It Works</h3>
            {steps.map((step: { title: string, image: string, description: string }, stepNumber: number) => (
              <div
                key={stepNumber}
                className={
                  'text-18 py-15 flex items-center cursor-pointer transition-all duration-300 ease-in-out ' +
                  (currentStep === stepNumber ? 'text-warning' : 'text-white')
                }
                onClick={() => setCurrentStep(stepNumber)}>
                <span className="rounded-full flex-none w-35 h-35 border-2 flex justify-center items-center mr-20">{stepNumber + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center">
                    <p className="font-medium md:flex-none" dangerouslySetInnerHTML={{ __html: step.title }} />
                    <span
                      className={
                        'hidden xl:block bg-white ml-30 transition-width duration-300 ease-in-out ' +
                        (currentStep === stepNumber ? 'border w-full' : 'w-0')
                      } />
                  </div>
                  <p
                    className={
                      'text-14 text-warning max-w-500 xl:max-w-380 2xl:max-w-500 pr-0 lg:pr-30 xl:pr-0  overflow-hidden transition-all duration-300 ease-in-out ' +
                      (currentStep === stepNumber ? 'mt-10 max-h-100' : 'max-h-0')
                    }
                    dangerouslySetInnerHTML={{ __html: step.description }} />
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-35">
              <button className="btn btn-warning btn-lg shadow-warning btn-sm-block" onClick={freeDesignConsultationService.showFreeDesignConsultationDialog}>Get Started</button>
            </div>
          </div>
          <div className="hidden lg:block pl-30 xl:pl-0">
            <div className="rounded-lg overflow-hidden shadow-primary max-w-670 mt-90 ml-0 xl:-ml-110">
              <Image src={steps[currentStep].image} width="672" height="423" layout="responsive" alt={steps[currentStep].title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
