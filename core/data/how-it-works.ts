export enum HowItWorksType {
  Designing = 'DESIGNING',
  Installing = 'INSTALLING',
}

export const howItWorksContents = {
  [HowItWorksType.Designing]: {
    title: 'Designing your kit',
    items: [
      {
        title: 'Work with an Industry Expert',
        comment: 'Work one on one with a Hardscape Architect who will help you design and plan your project.',
        images: [
          '/assets/images/landing-pages/how-it-works/design/work1.jpg',
          '/assets/images/landing-pages/how-it-works/design/work2.jpg',
          '/assets/images/landing-pages/how-it-works/design/work3.jpg',
        ],
        steps: [
          {
            title: 'Defining your project goals',
            comment: 'During your consultation call, we will discuss the main goals of your project and work with you to create a solution that best fits your property.',
          },
          {
            title: 'Choosing your materials',
            comment: 'We provide the largest selection of materials available in one place. Whether you are looking to choose materials on your own or would like our guided help, we make it easy to choose materials for your project.',
          },
          {
            title: 'Selecting your Base Package',
            comment: 'Choose between two convenient base packages that include everything you need to ensure your project is installed correctly.',
          },
        ],
      },
      {
        title: 'Review Your Designs',
        comment: 'Based on your project specifications our designers will create 2D Blueprints, 3D Renderings, and a Video Walkthrough of your project.',
        images: [
          '/assets/images/landing-pages/how-it-works/design/design1.jpg',
          '/assets/images/landing-pages/how-it-works/design/design2.jpg',
          '/assets/images/landing-pages/how-it-works/design/design3.jpg',
        ],
        steps: [
          {
            title: 'Approve 2D Sketches',
            comment: 'After your consultation with a Hardscape Specialist, you will receive a 2D sketch of your project and an estimate of your kit cost based on the design and suggested materials.',
          },
          {
            title: 'Review 3D Designs',
            comment: 'Next, we will create 3D Renderings of your project so you can get a true visual of what it is going to look like and adjust if needed.',
          },
          {
            title: 'Receive your design package',
            comment: 'Your design package includes everything you need to visualize and articulate your project to others - 2D Digital Blueprints that include key measurements, 3D Renderings of your project from multiple angles and a Video Walkthrough that allows you to feel like your project is already complete.',
          },
        ],
      },
      {
        title: 'Ordering your Kit',
        comment: 'With our network of local suppliers, sourcing materials for your kit is simple. We coordinate all the logistics and ensure your kit is delivered as promised.',
        images: [
          '/assets/images/landing-pages/how-it-works/design/order1.jpg',
          '/assets/images/landing-pages/how-it-works/design/order2.jpg',
          '/assets/images/landing-pages/how-it-works/design/order3.jpg',
        ],
        steps: [
          {
            title: 'Purchase your kit',
            comment: 'Review your detailed materials list, select a payment method and easily order your kit in minutes.',
          },
          {
            title: 'Select Delivery Date',
            comment: 'Choose a delivery date that works best for you. Whether you are looking for the kit right away or want to place delivery on hold until your contractor is ready, we will work around your schedule.',
          },
          {
            title: 'Mark out where you want materials placed',
            comment: 'Tell us where you want your materials placed - whether it is a driveway, side yard or near the project location. Limitations apply.',
          },
        ],
      },
    ]
  },
  [HowItWorksType.Installing]: {
    title: 'Installing your kit',
    items: [
      {
        title: 'Doing it Yourself',
        comment: 'Installing your kit yourself is a breeze when you have a plan to follow and all the materials ready to go.',
        images: [
          '/assets/images/landing-pages/how-it-works/install/diy1.jpg',
          '/assets/images/landing-pages/how-it-works/install/diy2.jpg',
          '/assets/images/landing-pages/how-it-works/install/diy3.jpg',
        ],
        steps: [
          {
            title: 'Getting Started',
            comment: 'Review your 2D Blueprints and mark out your project area and make sure you\'ve taken all proper safety precautions before you start to excavate for your project.'
          },
          {
            title: 'Installing your Kit',
            comment: 'Your kit includes an installation guide based on the packages you\'ve chosen as well as material specifications.'
          },
          {
            title: 'Wrapping up your project',
            comment: 'Whether you need any additional materials or are looking for topsoil, mulch or decorative stone to finish up around your project, we can help you there too.'
          },
        ],
      },
      {
        title: 'Getting Estimates from Contractors',
        comment: 'Getting and comparing estimates without a plan is hard. Getting and comparing estimates on a kit is simple.',
        images: [
          '/assets/images/landing-pages/how-it-works/install/contractor1.jpg',
          '/assets/images/landing-pages/how-it-works/install/contractor2.jpg',
          '/assets/images/landing-pages/how-it-works/install/contractor3.jpg',
        ],
        steps: [
          {
            title: 'Reaching out to local contractors',
            comment: 'Whether you have a contractor in mind or want multiple quotes, contractors like customers who are prepared with a plan in hand and are more eager to provide a competitive price.',
          },
          {
            title: 'Articulating your project to contractors',
            comment: 'Your kit has everything you need to easily articulate to contractors exactly what needs to be done with no room for miscommunication.',
          },
          {
            title: 'Comparing quotes from multiple contractors',
            comment: 'Since contractors will be providing labor-only quotes and bidding off the same project specifications, it is easy to compare bids and hire the contractor you\'re most comfortable with.',
          },
        ],
      },
      {
        title: 'Working with a Contractor',
        comment: 'Once you\'ve chosen a contractor to install your kit, you can invite them to your project portal where they can access all the details for installation.',
        images: [
          '/assets/images/landing-pages/how-it-works/install/work1.jpg',
          '/assets/images/landing-pages/how-it-works/install/work2.jpg',
          '/assets/images/landing-pages/how-it-works/install/work3.jpg',
        ],
        steps: [
          {
            title: 'Schedule delivery',
            comment: 'Your contractor will be able to set up a delivery date for your kit that coordinates with the installation date they have promised you.',
          },
          {
            title: 'Installing your kit',
            comment: 'Your contractor will have access to all the 2D and 3D renderings of your project, Installation guidelines, material list and material specifications.',
          },
          {
            title: 'Wrapping up your project',
            comment: 'Whether you need any additional materials or are looking for topsoil, mulch or decorative stone to finish up around your project, our integrated marketplace makes it easy for your contractor to request and order additional materials.',
          },
        ],
      },
    ]
  },
};
