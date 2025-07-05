'use client';


// Dữ liệu ảnh mẫu
const galleryImages = [
  {
    id: '465c66c1-db37-4f6a-9ad5-b021999fad6b',
    src: 'https://mona.media/template/assets/images/about/abl-img2-1920w.jpg',
    alt: 'Photo from 2016',
    year: '2016'
  },
  {
    id: '2',
    src: 'https://mona.media/template/assets/images/phong-about/abl-img2.jpg',
    alt: 'Another photo',
    year: '2017'
  },
  {
    id: '3',
    src: 'https://mona.media/template/assets/images/about/abl-img2-1920w.jpg',
    alt: 'Third photo',
    year: '2018'
  }
];

export function GalleryExample() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        
        {/* Sử dụng GalleryWithModal cho nhiều ảnh */}
      </div>
    </section>
  );
}
