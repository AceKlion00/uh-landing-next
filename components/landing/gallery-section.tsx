import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { galleryDescription } from '../../core/data/home';
import { HomePageType, Idea, ProjectAccessoryType } from '../../core/types';
import { ideaBoardApiService } from '../../core/api-services/idea-board-api.service';
import Spinner from '../ui-kit/common/spinner';
import useImagePreview from '../ui-kit/dialog/use-image-preview';
import Icon from '../ui-kit/icon';
import { shimmerUrl } from '../ui-kit/common/blur-image';

const imageCountPerDisplay = 9;
const projectAccessoryTypes = [
  { label: 'All', value: null },
  {
    label: 'Patios',
    value: ProjectAccessoryType.Patio,
    image: '/assets/images/landing-pages/kits/categories/patio.jpg',
  },
  {
    label: 'Walkways',
    value: ProjectAccessoryType.Walkway,
    image: '/assets/images/landing-pages/kits/categories/walkways.jpg',
  },
  {
    label: 'Pool Patios',
    value: ProjectAccessoryType.PoolPatio,
    image: '/assets/images/landing-pages/kits/categories/pool-patio.jpg',
  },
  {
    label: 'Retaining Walls',
    value: ProjectAccessoryType.RetainingWall,
    image: '/assets/images/landing-pages/kits/categories/retaining-wall.jpg',
  },
  {
    label: 'Staircases & Steps',
    value: ProjectAccessoryType.Steps,
    image: '/assets/images/landing-pages/kits/categories/stairs.jpg',
  }
];

interface Props {
  initialIdeas: Idea[];
  homepageType: HomePageType;
}

export function GallerySection({ initialIdeas, homepageType }: Props) {
  const imagePreviewService = useImagePreview();
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas);
  const [category, setCategory] = useState<ProjectAccessoryType|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ideasInitialized, setIdeasInitialized] = useState<boolean>(false);

  const loadIdeas = async (isMore: boolean) => {
    try {
      setIsLoading(true);
      const res = await ideaBoardApiService.getIdeas(category, isMore ? ideas.length : 0, imageCountPerDisplay);
      setIdeas(isMore ? [...ideas, ...res] : res);
    } catch (e) {
      console.log(e);
      // TODO: show error toast
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (ideasInitialized) {
      loadIdeas(false);
    }
    setIdeasInitialized(true);
  }, [category]);

  return (<section className="py-90 relative">
    <div className="container mx-auto text-center">
      <h3 className="text-primary text-32 font-normal mb-35">Gallery</h3>
      <p className="text-18 text-light-500">{galleryDescription[homepageType]}</p>
      <div className="mt-45">
        <div className="hidden md:block overflow-x-scroll pretty-scroll">
          <div className="grid grid-cols-6 min-w-1000 gap-20">
            {projectAccessoryTypes.map(
              (projectAccessoryType, index) => {
                return (<div
                  key={index}
                  className={ "flex flex-col cursor-pointer rounded-2xl overflow-hidden border-4 " + ((category === projectAccessoryType.value || !projectAccessoryType.value) ? "border-primary" : "border-white") }
                  onClick={() => setCategory(projectAccessoryType.value)}
                >
                  {projectAccessoryType.value && <Image src={projectAccessoryType.image} width={165} height={136} quality={100} layout="responsive" placeholder="blur" blurDataURL={shimmerUrl} alt={projectAccessoryType.label}/>}
                  {!projectAccessoryType.value && <div className="w-full flex-grow flex justify-center items-center">All Kits</div>}
                  <div className="bg-primary text-center text-white py-5">{projectAccessoryType.label || 'All'}</div>
                </div>);
              })}
          </div>
        </div>
        <hr className="text-light my-30" />
      </div>
      <Spinner isLoading={isLoading} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {ideas.map((idea, index) => (<div className="mb-20 cursor-pointer aspect-w-8 aspect-h-6 relative" key={index}>
          <div className="absolute w-full h-full rounded-xl overflow-hidden" onClick={() => imagePreviewService.preview(idea.url, 'Idea')}>
            <Image src={idea.url} width={idea.width} height={idea.height} layout="responsive" quality={100} objectFit="cover" placeholder="blur" blurDataURL={shimmerUrl} alt="Idea" />
            <Icon name="external_link" color="white" size={24} className="absolute bottom-20 right-20 cursor-pointer" />
          </div>
        </div>))}
      </div>
      <div className="flex justify-center mt-30">
        <button className="btn btn-primary btn-lg btn-sm-block" onClick={() => loadIdeas(true)}>See more</button>
      </div>
    </div>
  </section>);
}

GallerySection.defaultProps = {
  homepageType: HomePageType.Home,
}
