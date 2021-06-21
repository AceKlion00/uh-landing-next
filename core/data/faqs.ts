export enum FAQCategory {
  TheBasics = 'THE_BASICS',
  AboutUHKits = 'ABOUT_UH_KITS',
  GettingStarted = 'GETTING_STARTED',
  DesigningMyKit = 'DESIGNING_MY_KIT',
  OrderingMyKit = 'ORDERING_MY_KIT',
  SettingUpDelivery = 'SETTING_UP_DELIVERY',
  DIYInstallation = 'DO_IT_YOURSELF_INSTALLATION',
  GettingEstimatesFromContractors = 'GETTING_ESTIMATES_FROM_CONTRACTORS',
  WorkingWithAContractor = 'WORKING_WITH_A_CONTRACTOR',
  WrappingUpYourProject = 'WRAPPING_UP_YOUR_PROJECT',
}

export const FAQS = {
  [FAQCategory.TheBasics]: [
    {
      title: 'What is Hardscapes?',
      content: 'A Hardscape is an outdoor or indoor project that involves the use of man-made concrete pavers, blocks or natural stone. Project types include walkways, patios, retaining walls, steps, veneer, poolscapes, and much more.',
    },
    {
      title: 'Who should consider a kit?',
      content: 'Homeowners who are looking to complete a hardscape project but need to work with a contractor, Do It Yourselfers who are looking to tackle projects on their own and Contractors who are looking to offer their customers a better overall Hardscape experience.',
    },
    {
      title: 'What is included in a Hardscape Kit?',
      content: 'Your Hardscape kit includes a project consultation with a Hardscape Architect, 2D + 3D Visual renderings of your project and all the materials needed to complete the project as designed.',
    },
    {
      title: 'When should I start planning my kit?',
      content: 'Planning your kit should be the first step in your Hardscape journey. Even before contacting contractors, you should have a plan in place and know exactly what you want before you start looking for installers.',
    },
    {
      title: 'Where do you currently service?',
      content: 'We currently service all of Connecticut, Rhode Island and Western Massachusetts.',
    },
    {
      title: 'Why work with United Hardscapes?',
      content: 'We are industry leaders who have a passion for what we do, with over 17 years of Hardscape experience and 10,000+ Hardscapes designed, there\'s no project too big or too small that we can’t help. We offer a one-of-a-kind solution geared to making your hardscaping project simple, stress-free and more affordable.',
    },
    {
      title: 'How much does it cost to get started?',
      content: 'We don’t charge customers for our consultation services, instead, we have partnered with local suppliers to get the best prices available. We offer free consultations and a 2D sketch outline of your project to get started and determine your kit budget. Once you decide to move forward with your kit, we require a $500 deposit (Credited toward your total kit cost) to start putting your entire package together. Your total kit cost varies based on the final design and material choices, but rest assured we’ve searched our network of wholesale suppliers to find the best prices available.',
    },
  ],
  [FAQCategory.AboutUHKits]:
    [
      {
        title: 'What brands do you work with?',
        content: 'We work with all the major hardscape manufacturers including Techo-bloc, Cambridge, Unilock, Belgard, Ideal, Keystone, Nicolock, and more.',
      },
      {
        title: 'Do you provide options for natural stone?',
        content: 'Yes, we offer kit solutions that include all sorts of natural stone including Bluestone, Brownstone, Granite, Goshen stone, Slate, and more.',
      },
      {
        title: 'Does my kit factor in for base materials?',
        content: 'Yes, your kit includes all the needed base materials to complete your project.',
      },
      {
        title: 'What are my options for base materials?',
        content: 'We provide homeowners with 2 standard options for base packages. An economy package or a professional base package both of which will be discussed during the consultation.',
      },
      {
        title: 'Does my kit include all the Hardscape accessories needed to complete my project?',
        content: 'Yes, your kit comes with everything needed to complete your project such as edging, nails and polymeric sand.',
      },
      {
        title: 'How do you calculate materials for my kit?',
        content: 'We use Computer-aided designs (CAD) combined with a set of industry algorithms to calculate out what is needed for your kit. Including all core pavers, border pavers, specialty designs, walls, caps, steps, bulk materials, screed materials, edging, nails, poly sand and anything else that\'s needed specific to your project.',
      },
      {
        title: 'Do you factor Hardscape waste into your calculations?',
        content: 'Yes, 10% which can be used for cuts or can be saved.',
      },
      {
        title: 'Do you provide guidelines for the installation of the kit?',
        content: 'Yes, we provide our own installation guidelines along with manufacturers’ specifications.',
      },
      {
        title: 'Can you help me with my landscape design?',
        content: 'We do not offer standalone landscape design at this time, we can however provide a landscape outline within your Hardscape design.',
      },
      {
        title: 'How quickly could I have my kit ready to order?',
        content: 'Our current lead time is 7 to 10 days for a complete from scratch kit. *On in-stock materials*',
      },
      {
        title: 'What if I want to do my project in pieces?',
        content: 'You could plan big and always break down your project into smaller kits and accomplish one at a time.',
      },
    ],
  [FAQCategory.GettingStarted]:
    [
      {
        title: 'How do I get started?',
        content: 'If you\'re interested in a pre-designed kit, simply choose your kit, customize if needed and place your order. However, if you\'re like most people and would like a custom-designed kit from scratch, (Click Here) to request a free consultation.',
      },
      {
        title: 'What is included in the free consultation?',
        content: 'You’ll speak with a Hardscape architect who will take the time to figure out the best solution for your project, discuss installation specifications, provide you a 2D sketch of your project as discussed and provide you an estimate for your kit.',
      },
      {
        title: 'Do I need to prepare anything for the consultation?',
        content: 'Prior to your consultation a Hardscape Architect will reach out to you via email and ask for photos of your project area, and will discuss with you your goals and objectives for the overall project. If you have a sketch or idea on size that would be great, but not required.',
      },
      {
        title: 'What\'s the difference between a virtual and onsite consultation?',
        content: 'Most projects start with a Virtual consultation that is conducted over Zoom where we will discuss your project in more detail and come up with an outline of your kit all remotely. However, for complex projects, onsite consultations are available upon request and involve scheduling an onsite visit to look at your project and go over all the details.',
      },
      {
        title: 'Do you charge for onsite visits?',
        content: 'No, at this time we do not charge for an onsite visit.',
      },
      {
        title: 'What if the kit estimate is more than I wanted to spend?',
        content: 'The initial kit estimate will be based on what was discussed with the Hardscape Architect. We understand that customers have a budget and if we need to work with you to design a project within a certain budget we can adjust accordingly.',
      },
      {
        title: 'What if I want to move forward with my kit?',
        content: 'Awesome! This next step is to bring your kit to life by choosing materials and reviewing your 3D renderings. In order to move forward to the design phase, we require a $500 deposit that gets credited towards your total kit cost.',
      },
    ],
  [FAQCategory.DesigningMyKit]:
    [
      {
        title: 'How do I choose materials for my kit?',
        content: 'United Hardscapes has one of the largest selections of Hardscape materials available online. We provide you access to view all of the available materials in one place, or we can help you narrow down your choices through our guided questionnaire.',
      },
      {
        title: 'Can you help me choose materials?',
        content: 'Yes, If you\'re looking for some professional input on the best color combos for your property, the best materials for your project or a unique design, we would be thrilled to provide our knowledge to make your project the best it could be.',
      },
      {
        title: 'Can I see samples of materials I have chosen?',
        content: 'Yes, We work with many local suppliers and can coordinate a sample viewing.',
      },
      {
        title: 'Can I mix different types of materials and brands?',
        content: 'Yes, in fact, we encourage it. It’s ok to mix brands, colors and even materials such as natural stone and pavers to make your project stand out and be unique.',
      },
      {
        title: 'What is a 2D digital blueprint?',
        content: 'A technical drawing of your project, that includes key measurements and information for the installation of your project.<Image className="mt-15" layout="responsive" width="574" height="257" src="/assets/images/landing-pages/faqs/pool-patio-design.jpg" alt="2d design">',
      },
      {
        title: 'What is a 3D rendering?',
        content: 'A detailed visual of your project built off your 2D blueprint, the 3D renderings bring your project to life, from different vantage points and showcases the materials you have chosen for your project.',
      },
      {
        title: 'Can I edit my 3D renderings?',
        content: 'Yes, once you see everything laid out and get the real feel for how your project is going to look, you’ll be able to request changes if needed.',
      },
      {
        title: 'What is a video walkthrough?',
        content: 'Upon signing off of your 3D renderings we will create a video walkthrough of your project, this video gives you the best pre-project visuals technology currently offers so that you have the most realistic expectation of your project.',
      },
    ],
  [FAQCategory.OrderingMyKit]:
    [
      {
        title: 'How do I order my kit?',
        content: 'Upon completion of the design process, United Hardscapes will provide you a summary of your kit materials and provide you with the final kit invoice minus the $500 deposit.',
      },
      {
        title: 'How can I pay for my kit?',
        content: 'We accept all major credit cards including AMEX and will accept ACH Bank transfers as well as certified checks.',
      },
      {
        title: 'Do you offer any type of discounts for cash?',
        content: 'Sorry, we do not offer any discounts for Cash purchases.',
      },
      {
        title: 'When should I order my kit?',
        content: 'We suggest ordering your kit as soon as possible as materials are available on a first-come-first-serve basis and availability varies throughout the season.',
      },
      {
        title: 'How long is the kit price good for?',
        content: 'Your kit proposal is good for 30 days. After 30 days we can update your proposal as needed.',
      },
      {
        title: 'Can I secure my order but place delivery on hold?',
        content: ' Yes, you will be able to place your order to secure prices and availability but hold off on delivery until you\'re ready.',
      },
      {
        title: 'How long can my order be placed on hold?',
        content: 'Orders can be placed on hold for up to 4 months.',
      },
      {
        title: 'Do you offer financing?',
        content: 'We offer limited financing options at this time, but if you are interested in financing please reach out to Orders@unitedhardscapes.com for more information.',
      },
      {
        title: 'What happens if I don’t proceed with the order at this time?',
        content: 'Nothing, we understand hardscaping projects take time to save up for and move forward with so if you end up deciding to wait there are no penalties. Your $500 deposit remains on credit on your account until you decide to move forward with your kit order.',
      },
      {
        title: 'What happens once I place my order?',
        content: '- We will start to prepare your order for delivery,  send you a dropbox link with all of your 2D Digital Blueprints, HD 3D renderings + Video walk-through, and reach out to you to coordinate a delivery date.',
      },
    ],
  [FAQCategory.SettingUpDelivery]:
    [
      {
        title: 'How do I set up delivery?',
        content: 'United Hardscapes will work with you to coordinate delivery around your schedule. Whether you are looking for delivery soon or need to coordinate delivery with your contractor’s schedule, we work with customers to set up a delivery time that works best for them.',
      },
      {
        title: 'What is your average delivery time?',
        content: 'If kit materials are in stock, delivery can be complete in as little as 4 to 5 days.',
      },
      {
        title: 'Can my delivery be staggered?',
        content: 'Yes, if you are looking for your delivery to be staggered (Base first, then Screed, then Hardscape materials, etc.), we can build a delivery schedule around your project.',
      },
      {
        title: 'Who delivers my kit?',
        content: 'We work with local wholesale suppliers and coordinate deliveries through local trucking companies.',
      },
      {
        title: 'What kind of trucks will be delivering my kit?',
        content: 'All of your bulk materials (process gravel and sand) will be delivered by dump truck. Hardscape materials such as pavers and wall blocks will be delivered on pallets, by a flatbed truck and forklift.',
      },
      {
        title: 'Can my contractor pick up my kit materials instead of having them delivered?',
        content: 'Yes, we can coordinate the kit materials so that your contractor is authorized to pick them up all or part of your order.',
      },
      {
        title: 'Where will my materials be placed when delivered?',
        content: 'Part of the delivery setup is to coordinate where you want materials placed. It\'s important to mark out a location that is out of your way, easy to access and does not have hazards like overhead wires or soft ground. Most bulk materials are placed in driveway turnarounds or in front of unused garage doors, with most palletized materials being lined up alongside the driveway.',
      },
      {
        title: 'What if I have no/limited room for material storage?',
        content: 'Reach out to United Hardscapes and we will coordinate a plan for delivery that takes this space restriction into consideration.',
      },
      {
        title: 'Can my contractor work with you to coordinate the entire delivery?',
        content: 'Yes, you can authorize a contractor to work with us on your behalf.',
      },
    ],
  [FAQCategory.DIYInstallation]:
    [
      {
        title: 'Can I install the kit myself?',
        content: 'Yes, we have made it easier than ever for you to do it yourself.  If you\'re a handyman, have the right tools,  have basic carpentry skills, and can follow instructions then you can install a hardscape on your own.',
      },
      {
        title: 'What If I have questions during the installation process?',
        content: 'Feel free to reach out to United Hardscapes and ask, we are here to help and guide you through any doubt and have a ton of resources at our disposal.',
      },
      {
        title: 'If I get stuck, do you offer installation services?',
        content: 'No, we do not offer any in-house installation services, however, we can recommend contractors who you can reach out to.',
      },
      {
        title: 'If I want to add on or need more materials can you help me?',
        content: 'Yes, if you realize you want to go bigger or if you need extra materials for whatever reason just reach out and we will coordinate the logistics for you.',
      },
      {
        title: 'What if I need topsoil, mulch and or decorative stone to finish off my project, do you carry this?',
        content: 'Yes, we can help you from end to end including delivery of topsoil and over landscape materials.',
      },
      {
        title: 'Can you help me figure out how much bulk materials I will need?',
        content: 'Yes, if you provide some photos and basic measurements of the area we can help you figure out how much you need.',
      },
      {
        title: 'How do I get started?',
        content: 'If you\'re interested in a pre-designed kit, simply choose your kit, customize if needed and place your order. However, if you\'re like most people and would like a custom-designed kit from scratch, schedule a free consultation.',
      },
      {
        title: 'Do you charge for the project design?',
        content: 'No, the project design is created for you for free. It includes 2D blueprints, 3D designs, a video walkthrough, and the list of materials necessary to complete your project (your hardscape kit). ',
      },
      {
        title: 'Can you help me choose materials?',
        content: 'Yes, If you\'re looking for some professional input on the best color combos for your property, the best materials for your project or a unique design, we would be thrilled to provide our knowledge to make your project the best it could be.',
      },
      {
        title: 'What brands do you offer?',
        content: 'We work with every major Hardscape brand including but not limited to Techo-Bloc, Unilock, Cambridge, Belgard, Keystone, and many other manufacturers.',
      },
      {
        title: 'How quickly can I get my kit?',
        content: 'For in-stock materials, your kit will ship in as little as 2 to 3 days.',
      },
      {
        title: 'Is shipping included in my quote?',
        content: 'Yes, your quote includes all delivery fees.',
      },
      {
        title: 'What if I want to do my project in pieces?',
        content: 'You could plan big and always break down your project into smaller kits and accomplish one at a time.',
      },
      {
        title: 'What If I have questions during the installation process?\n',
        content: 'Feel free to reach out to United Hardscapes and ask, we are here to help and guide you through any doubt and have a ton of resources at our disposal.',
      },
      {
        title: 'If I get stuck, do you offer installation services?',
        content: 'No, we do not offer any in-house installation services, however, we can recommend contractors who you can reach out to.',
      },
      {
        title: 'If I want to add on or need more materials can you help me?',
        content: 'Yes, if you realize you want to go bigger or if you need extra materials for whatever reason just reach out and we will coordinate the logistics for you.',
      },
      {
        title: 'What if I need topsoil, mulch and or decorative stone to finish off my project, do you carry this?',
        content: 'Yes, we can help you from end to end including delivery of topsoil and over landscape materials.',
      },
      {
        title: 'Can you help me figure out how much bulk materials I will need?',
        content: 'Yes, if you provide some photos and basic measurements of the area we can help you figure out how much you need.',
      },
    ],
  [FAQCategory.GettingEstimatesFromContractors]:
    [
      {
        title: 'When should I reach out to contractors?',
        content: 'It\'s best to reach out to contractors once you have the design portion of your kit complete. This way you will be able to easily articulate what needs to be completed.',
      },
      {
        title: 'How do I find contractors to install my kit?',
        content: 'If you know someone who has had Hardscape work done in the past, asking for a referral is a great starting point. Another great resource is Facebook. Its local community groups are great for finding contractors to install your kit.',
      },
      {
        title: 'How do I ask contractors for a quote on my kit?',
        content: 'Let contractors know you are looking to install a hardscape project and that you have a plan in hand and the materials already purchased and that you are looking for a “Labor only” quote for the installation of the project.',
      },
      {
        title: 'Is it easier to find contractors with or without a kit?',
        content: 'Contractors like customers who have a plan and who are more than just tire kickers. When contractors realize you are ready to move forward and all they need to do is provide an installation price, they are more likely to call you back and provide a more competitive estimate.',
      },
      {
        title: 'How do I compare estimates between contractors?',
        content: 'With a kit, comparing quotes is simple, you\'re only looking for a quote on labor. So to get your total project cost, just add your kit cost plus their quote and your total cost will be something you can easily compare apples to apples with other quotes.',
      },
      {
        title: 'What should I be looking for in a good contractor?',
        content: 'Ensure contractors have experience working with hardscape materials, ask them to provide pictures and references of past jobs and ask if the owner of the company will be onsite and make sure they have insurance.',
      },
      {
        title: 'Do you have any contractors you can recommend?',
        content: 'Depending upon your project location, we do have a network of contractors we collaborate with and could provide some recommendations.',
      },
      {
        title: 'What is the difference between “Kit” Estimates and Traditional estimates?',
        content: 'When you\'re requesting an estimate of a “Kit design” you are steps ahead of many, instead of taking a guess and trying to figure things out along the way like traditional estimates. A Kit provides you a turn-key project, that contractors can quickly bid on, schedule and start.',
      },
      {
        title: 'Why are kit estimates better than traditional estimates?',
        content: 'A kit estimate sets a standard, it tells contractors exactly what you want and how you want it built so that there is little room for error. Bidding off a plan also benefits contractors and it allows them to not worry about materials and thinking and instead focus on getting your project complete.',
      },
      {
        title: 'What if I already have a contractor I want to work with?',
        content: 'Awesome! Share with them your plans, kit details and schedule your delivery date.',
      },
    ],
  [FAQCategory.WorkingWithAContractor]:
    [
      {
        title: 'I hired a contractor to install my kit, now what?',
        content: 'If you have not already, now would be the time to set your delivery date for your kit, preferably one that coincides around your contractors schedule.',
      },
      {
        title: 'Can my contractor “Take charge” of my project?',
        content: 'Yes, you can authorize your contractor to work with us directly in coordinating the delivery or pickup of your kit materials.',
      },
      {
        title: 'What if my contractor has questions about the kit?',
        content: 'If your contractor happens to have a question about the kit, materials, or design they can reach out to the Hardscape Architect who designed the project for an answer.',
      },
      {
        title: 'Will I have some extra materials?',
        content: 'Yes you can expect to have some extra materials. This is calculated and done on purpose to compensate for waste, extra hardscape materials should be kept in case you ever need to replace or add onto the project, all other bulk materials should be removed and cleaned up by the contractor.',
      },
      {
        title: 'What if I have a lot of extra bulk materials?',
        content: 'Then your contractor did not install the base correctly. All bulk materials are calculated and have installation guides that match to the quantity ordered so that there is minimal “extra” base materials. Please contact us if you have an issue like this.',
      },
      {
        title: 'What if my contractor needs topsoil, mulch or rock to finish my project?',
        content: 'We make it easy for you and your contractor to work together by utilizing our online marketplace to easily source local materials.',
      },
    ],
  [FAQCategory.WrappingUpYourProject]:
    [
      {
        title: 'Do my materials come with a warranty?',
        content: 'Yes, most manufacturers provide a warranty on their product, these are manufacturer-specific warranties and range between 15 and 25 years. See manufacturer\'s specific warranty for full details.',
      },
      {
        title: 'Do you offer landscape design around my hardscape kit?',
        content: 'Yes, if you purchased a kit and are looking for a landscape design to be built around it, United Hardscapes can offer a solution. Reach out to Orders@unitedhardscapes.com for more details.',
      },
      {
        title: 'Do you offer referral rewards?',
        content: 'Yes, if you refer a friend or family member who utilizes United Hardscapes you will receive a $100 cash gift card.',
      },
      {
        title: 'What are your hours of operation?',
        content: 'We are available Monday through Saturday from 7 am to 7 pm EST.',
      },
      {
        title: 'What\'s the best way to contact you?',
        content: 'If you have any questions please email Orders@unitedhardscapes.com and we will get back to you within 24 hours.',
      },
    ],
};

export const kitsFAQs = [
  {
    title: 'Can I customize my kit?',
    content: 'Yes, you can customize your kit with your choice of materials, colors, borders, size, shape, and even base and accessory details.'
  },
  {
    title: 'Do I need a contractor to install my kit?',
    content: 'No, if you have the right equipment and are willing to put the work in, you can put together your project on your own.'
  },
  {
    title: 'Can I have a contractor install my kit?',
    content: 'Yes, we encourage homeowners to work with local contractors to install their kits. Each kit comes with a blueprint and installation specifications for the contractor to follow.'
  },
  {
    title: 'How do I find a contractor to install my kit?',
    content: 'We encourage homeowners to shop their designs around to get the best price and availability from local contractors. For example, by posting their project to local Facebook communities.'
  },
  {
    title: 'What if I don\'t see a kit that fits my project needs?',
    content: `<Link href="/contact-us"><a>Contact us</a></Link>. We will work with you to create a custom kit that fits your project objectives.`
  },
  {
    title: 'What brands do you offer?',
    content: 'We work with every major Hardscape brand including but not limited to Techo-Bloc, Unilock, Cambridge, Belgard, Keystone, and many other manufacturers.'
  },
  {
    title: 'Do you offer installation services?',
    content: 'No, United Hardscapes does not offer installation services.'
  },
  {
    title: 'How quickly can I get my kit?',
    content: 'For in-stock materials, your kit will ship in as little as 2 to 3 days.'
  },
  {
    title: 'Is shipping included in my quote?',
    content: 'Yes, your quote includes all delivery fees.'
  },
  {
    title: 'Can I place my delivery on hold until my contractor is ready to start the project?',
    content: 'Yes, once your order is placed, you can choose a delivery date that works for both you and your contractor.'
  },
];
