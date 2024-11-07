"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";

interface ModalWithCarouselProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

export const ModalWithCarousel = ({
  open,
  onClose,
  images,
}: ModalWithCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative bg-white p-6 rounded-lg max-w-lg w-full">
          <Button onClick={onClose} className="absolute top-2 right-2">
            Close
          </Button>

          {/* Carrousel */}
          <div className="flex items-center justify-center">
            <button onClick={goToPrevious} className="mr-4">
              ⬅️
            </button>
            <Image
              src={images[currentIndex]}
              alt={`Project Screenshot ${currentIndex + 1}`}
              className="w-full max-h-80 object-cover"
            />
            <button onClick={goToNext} className="ml-4">
              ➡️
            </button>
          </div>

          {/* Indicateur de position */}
          <div className="flex justify-center mt-4">
            {images.map((_, index: number) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};
