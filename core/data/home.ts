import { HomePageType, ProjectAccessoryType, Workflow } from '../types';

export const homeContent = {
  kitSeries: [
    {
      name: 'Patio Kit - Ent15x20 Deluxe',
      image: '/assets/images/components/landing/popular-kits/patio.jpg',
      link: '/kits/patio/entertainment',
      id: 'ent-15x20-deluxe',
      width: 398,
      height: 254,
      price: 6165
    },
    {
      name: 'Walkway Kit - WW50x4S',
      image: '/assets/images/components/landing/popular-kits/walkway.jpg',
      link: '/kits/walkways/traditional',
      id: 'ww50x4s',
      width: 398,
      height: 254,
      price: 2824
    },
    {
      name: 'Pool Patio Kit - REC18x36EC',
      image: '/assets/images/components/landing/popular-kits/pool-patio.jpg',
      link: '/kits/pool-patio/economy',
      id: 'rec-18x36ec',
      width: 398,
      height: 254,
      price: 5375
    },
    {
      name: 'Retaining Wall Kit - SU50x2Standard',
      image: '/assets/images/components/landing/popular-kits/retaining-wall.jpg',
      link: '/kits/retaining-wall/supporter',
      id: 'su50x2-standard',
      width: 398,
      height: 254,
      price: 3242
    }
  ]
};

export const homeWorkFlows: Workflow[] = [
  {
    title: 'Book A Free Consultation',
    image: '/assets/images/components/landing/how-it-works/sit-man-with-mac.svg',
    description: `Discuss your outdoor project needs and budget with a Hardscape Architect.`,
    width: 350,
    height: 233,
  },
  {
    title: `Design Your Project`,
    image: '/assets/images/components/landing/how-it-works/man-with-laptop.svg',
    description: 'Get 2D blueprints, 3D designs, a video walkthrough, and the list of materials necessary for your project designed (your hardscape kit).',
    width: 350,
    height: 236,
  },
  {
    title: `Order Hardscape Materials Online`,
    image: '/assets/images/components/landing/how-it-works/man-with-vehicle.svg',
    description: 'Get all the necessary materials delivered to your home along with the installation guidelines.',
    width: 350,
    height: 223,
  }
];

export const popularKitsTitle = {
  [HomePageType.Home] : 'Looking for a ready-to-go solution?',
  [HomePageType.Consultation]: 'Hardscaping Simplified&trade&trade;'
};

export const popularKitsDescription = {
  [HomePageType.Home] : 'View our pre-designed Signature Kits that make hardscaping easier. All our patio, walkway, poolscapes, retaining wall and stair kits are both Do It Yourself and Contractor friendly.',
  [HomePageType.Consultation]: 'View our ready-to-go Signature Kits that make hardscaping easier. United Hardscapes offers a large selection of unique patio, walkway, poolscapes, retaining wall and stair kits that are both Do It Yourself and contractor friendly.'
};

export const galleryDescription = {
  [HomePageType.Home] : 'Get inspired with the photos of our clients\' completed projects.',
  [HomePageType.Consultation]: 'Get inspired with hundreds of completed projects, view photos, get ideas and customize your project.'
};

export const accessoryTypes = [
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/steps.png',
    value: ProjectAccessoryType.Steps,
    label: 'Steps'
  },
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/fire-pit.png',
    value: ProjectAccessoryType.FirePit,
    label: 'Fire Pit'
  },
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/sitting-wall.png',
    value: ProjectAccessoryType.SittingWall,
    label: 'Sitting wall'
  },
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/pillars.png',
    value: ProjectAccessoryType.Pillars,
    label: 'Pillars'
  },
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/lighting.png',
    value: ProjectAccessoryType.Lighting,
    label: 'Lighting'
  },
  {
    image: 'https://assets.unitedhardscapes.com/accessory-types/other.png',
    value: ProjectAccessoryType.Other,
    label: 'Other'
  },
];
