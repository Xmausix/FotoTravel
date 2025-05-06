"use client";

import Image from 'next/image';
import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxImageProps {
  src: string;
  alt: string;
  images: { id: string; src: string; alt: string; hint?: string }[];
  currentIndex: number;
  className?: string;
  "data-ai-hint"?: string;
}

export function LightboxImage({ src, alt, images, currentIndex, className, "data-ai-hint": aiHint }: LightboxImageProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(currentIndex);

  React.useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex, isOpen]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, images.length]);


  const currentImage = images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={className ? className : "relative aspect-square w-full h-auto cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            fill // Changed from layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={aiHint}
          />
           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize text-white h-8 w-8"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent 
        className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/80 backdrop-blur-md border-none flex flex-col items-center justify-center"
        onInteractOutside={(e) => e.preventDefault()} // Prevents closing on outside click for better UX
      >
        {currentImage && (
            <div className="relative w-full h-full flex items-center justify-center">
                 <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill // Changed from layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                    data-ai-hint={currentImage.hint || 'gallery image'}
                 />
            </div>
        )}

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-12 w-12"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full h-12 w-12"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </Button>
          </>
        )}
        <DialogClose asChild>
            <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white bg-black/30 hover:bg-black/50 rounded-full h-10 w-10"
                aria-label="Close lightbox"
            >
                <X size={24} />
            </Button>
        </DialogClose>
         {currentImage && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-md text-sm">
            {currentImage.alt} ({currentImageIndex + 1} / {images.length})
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
