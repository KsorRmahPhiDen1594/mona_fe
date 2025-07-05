'use client';

import { ImageCard, ImageCardGrid } from '../ui/image-card';

// Dữ liệu ảnh mẫu
const galleryImages = [
  {
    id: '1',
    src: 'https://mona.media/template/assets/images/about/abl-img2-1920w.jpg',
    alt: 'Photo from 2016',
    title: '2016'
  },
  {
    id: '2',
    src: 'https://picsum.photos/800/600?random=1',
    alt: 'Test image 1',
    title: '2017'
  },
  {
    id: '3',
    src: 'https://picsum.photos/800/600?random=2',
    alt: 'Test image 2',
    title: '2018'
  },
  {
    id: '4',
    src: 'https://picsum.photos/800/600?random=2',
    alt: 'Test image 2',
    title: '2019'
  },

];

export function GallerySection() {
  return (
    <section className="bg-gray-50 w-full">
          <ImageCardGrid images={galleryImages} />
    </section>
  );
}

// Component cho 1 ảnh đơn lẻ
export function SingleImageCard() {
  return (
    <div className="p-8">
      <div className="max-w-lg mx-auto">
        <ImageCard
          src="https://mona.media/template/assets/images/about/abl-img2-1920w.jpg"
          alt="Photo from 2016"
          title="Năm 2016"
        />
      </div>
    </div>
  );
} 