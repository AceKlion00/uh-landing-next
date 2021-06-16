import Image from 'next/image'
import { homeWorkFlows } from '../../core/data/home'

export function HowItWorksSection() {
  return (<section className="text-center">
    <div className="container mx-auto">
      <h3 className="text-primary text-32 font-normal mb-45">How It Works?</h3>
      <div className="absolute left-0 right-0">
        <Image src="/assets/images/how-it-works/primary-dotted-line.svg" width={1397} height={124} layout="responsive" alt="Dotted Line" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {homeWorkFlows.map((workflow, i) => (<div className="text-light-500">
            <div className="h-280" key={i}>
              <Image src={workflow.image} width={workflow.width} height={workflow.height} alt={workflow.title} />
            </div>
            <p className="text-18 font-bold mb-35">{workflow.title}</p>
            <p className="mx-auto max-w-md text-16">{workflow.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>);
}
