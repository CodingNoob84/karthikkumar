"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { ImageModal } from "./image-modal";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageCarousel({
  images,
  alt,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (index?: number) => {
    if (index !== undefined) {
      setCurrentIndex(index);
    }
    setIsModalOpen(true);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className={`relative group ${className}`}>
        <div className="relative overflow-hidden rounded-lg">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => openModal(currentIndex)}
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${alt} - Image ${currentIndex + 1}`}
              width={500}
              height={400}
              className="w-full h-72 object-cover transition-all duration-300"
            />
          </motion.div>

          {/* Expand Button */}
          <motion.div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="secondary"
              size="sm"
              className="shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90"
              onClick={(e) => {
                e.stopPropagation();
                openModal(currentIndex);
              }}
            >
              <Expand className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <motion.div
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="shadow-lg hover:shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-white shadow-lg"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-md text-sm backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        images={images}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIndex={currentIndex}
        alt={alt}
      />
    </>
  );
}
