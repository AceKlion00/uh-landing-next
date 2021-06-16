import Head from 'next/head';

export default function ThemeDemo() {
  return (
    <div className="container mx-auto font-poppins">
      <Head>
        <title>United Hardscapes: Theme Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      </Head>

      <main>
        <section className="my-5">
          <h1 className="pb-4 text-5xl font-medium">Colors</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-primary">Primary</h3>
              <div className="p-4 bg-primary-50 text-white">bg-primary-50</div>
              <div className="p-4 bg-primary-75 text-white">bg-primary-75</div>
              <div className="p-4 bg-primary-100 text-white">bg-primary-100</div>
              <div className="p-4 bg-primary-200 text-white">bg-primary-200</div>
              <div className="p-4 bg-primary-300 text-white">bg-primary-300</div>
              <div className="p-4 bg-primary-400 text-white">bg-primary-400</div>
            </div>
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-secondary">Secondary</h3>
              <div className="p-4 bg-secondary-50 text-white">bg-secondary-50</div>
              <div className="p-4 bg-secondary-100 text-white">bg-secondary-100</div>
            </div>
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-success">Success</h3>
              <div className="p-4 bg-success-50 text-white">bg-success-50</div>
              <div className="p-4 bg-success-75 text-white">bg-success-75</div>
              <div className="p-4 bg-success-100 text-white">bg-success-100</div>
              <div className="p-4 bg-success-200 text-white">bg-success-200</div>
            </div>
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-warning">Warning</h3>
              <div className="p-4 bg-warning-50 text-white">bg-warning-50</div>
              <div className="p-4 bg-warning-75 text-white">bg-warning-75</div>
              <div className="p-4 bg-warning-100 text-white">bg-warning-100</div>
              <div className="p-4 bg-warning-200 text-white">bg-warning-200</div>
              <div className="p-4 bg-warning-300 text-white">bg-warning-300</div>
              <div className="p-4 bg-warning-400 text-white">bg-warning-400</div>
            </div>
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-danger">Danger</h3>
              <div className="p-4 bg-danger-50 text-white">bg-danger-50</div>
              <div className="p-4 bg-danger-75 text-white">bg-danger-75</div>
              <div className="p-4 bg-danger-100 text-white">bg-danger-100</div>
              <div className="p-4 bg-danger-200 text-white">bg-danger-200</div>
            </div>
            <div className="mb-4">
              <h3 className="pb-2 text-2xl font-medium text-light">Light</h3>
              <div className="p-4 bg-light-50 text-white">bg-light-50</div>
              <div className="p-4 bg-light-75 text-white">bg-light-75</div>
              <div className="p-4 bg-light-100 text-white">bg-light-100</div>
              <div className="p-4 bg-light-200 text-white">bg-light-200</div>
              <div className="p-4 bg-light-300 text-white">bg-light-300</div>
              <div className="p-4 bg-light-400 text-white">bg-light-400</div>
              <div className="p-4 bg-light-500 text-white">bg-light-500</div>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h1 className="pb-4 text-5xl font-medium">Buttons</h1>
          <div>
            <div className="mb-4">
              <button className="btn-primary btn-lg mr-3">Primary Button</button>
              <button className="btn-primary btn-md mr-3">Primary Button</button>
              <button className="btn-primary btn-sm">Primary Button</button>
            </div>
            <div className="mb-4">
              <button className="btn-warning btn-lg mr-3">Warning Button</button>
              <button className="btn-warning btn-md mr-3">Warning Button</button>
              <button className="btn-warning btn-sm">Warning Button</button>
            </div>
            <div className="mb-4">
              <button className="btn-danger btn-lg mr-3">Danger Button</button>
              <button className="btn-danger btn-md mr-3">Danger Button</button>
              <button className="btn-danger btn-sm">Danger Button</button>
            </div>
            <div className="mb-4">
              <button className="btn-light btn-lg mr-3">Light Button</button>
              <button className="btn-light btn-md mr-3">Light Button</button>
              <button className="btn-light btn-sm">Light Button</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
