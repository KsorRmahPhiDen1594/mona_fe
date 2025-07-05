'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ImageCard({ 
  src, 
  alt, 
  title, 
  description, 
  className = '' 
}: ImageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageError = () => {
    console.log('Image failed to load:', src);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', src);
    setIsLoading(false);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className={`group relative overflow-hidden rounded-lg shadow-lg ${className}`}>
        <div className="relative aspect-[3/2] w-full bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-gray-500">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Card */}
      <div 
        className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative aspect-[3/2] w-full bg-gray-100">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-10">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
          
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 z-10">
              <div className="text-center">
                <div className="text-gray-500 mb-2">⚠️</div>
                <div className="text-sm text-gray-600">Image not available</div>
                <div className="text-xs text-gray-500 mt-1">{src}</div>
              </div>
            </div>
          )}
          
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
              isLoading || imageError ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={false}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          
          {/* Title overlay */}
          {(title) && (
            <div className="absolute bottom-4 left-4 text-white">
              {title && (
                <h3 className="font-bold text-[40px] mb-1 drop-shadow-lg group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
              )}            
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div className="relative max-w-[95vw] max-h-[95vh]">
            {imageError ? (
              <div className="bg-gray-800 text-white p-8 rounded-lg text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl mb-2">Image not available</h3>
                <p className="text-sm opacity-75">{src}</p>
              </div>
            ) : (
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            
            {/* Image info */}
            {(title || description) && (
              <div className="absolute bottom-4 left-4 right-4  bg-opacity-70 text-white p-4 rounded-lg">
                {title && <h3 className="font-semibold text-lg mb-1">{title}</h3>}
                {description && <p className="text-sm opacity-90">{description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Grid component cho nhiều cards
interface ImageCardGridProps {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
}

export function ImageCardGrid({ images }: ImageCardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.src}
          alt={image.alt}
          title={image.title}
         description={image.description}
        />
      ))}
    </div>
  );
} 