import Link from 'next/link';

export function CustomDesignRequestSection() {
  return (<section className="bg-gradient-to-r from-warning to-warning-75 py-60">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/3 mb-20 text-white text-center lg:text-left">
          <p className="text-35 font-bold">Don&apos;t see what you are looking for?</p>
          <p className="text-24 font-light">Get a custom-designed kit for your project.</p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <Link href="/kits/custom-design-request" passHref><button className="bg-white outline-none focus:outline-none rounded-lg py-20 px-35 text-20 text-primary font-bold focus:ring focus:ring-primary-50 hover:bg-light-75">Get Your Custom Design</button></Link>
        </div>
      </div>
    </div>
  </section>);
}
