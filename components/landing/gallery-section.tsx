import { galleryDescription } from '../../core/data/home';
import { HomePageType } from '../../core/types';

export function GallerySection({ homepageType = HomePageType.Home }) {
  return (<section className="py-90 relative">
    <div className="container mx-auto text-center">
      <h3 className="text-primary text-32 font-normal mb-35">Gallery</h3>
      <p className="text-18 text-light-500">{galleryDescription[homepageType]}</p>
    </div>
  </section>);
}
