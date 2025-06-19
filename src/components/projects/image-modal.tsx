"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  alt: string;
}

export function ImageModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  alt,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
    null
  );

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Reset zoom when image changes
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Home":
          setCurrentIndex(0);
          break;
        case "End":
          setCurrentIndex(images.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose, goToNext, goToPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Only handle horizontal swipes
    if (!isVerticalSwipe) {
      if (isLeftSwipe && images.length > 1) {
        goToNext();
      }
      if (isRightSwipe && images.length > 1) {
        goToPrevious();
      }
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-500 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <motion.div
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-white font-medium">
                {currentIndex + 1} / {images.length}
              </div>
              {images.length > 1 && (
                <div className="hidden sm:flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom Toggle */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleZoom}
                  className="text-white hover:bg-white/20 border-white/20"
                >
                  {isZoomed ? (
                    <ZoomOut className="h-4 w-4" />
                  ) : (
                    <ZoomIn className="h-4 w-4" />
                  )}
                </Button>
              </motion.div>

              {/* Close Button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 border-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center p-4 pt-20 pb-20">
            <motion.div
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className={`relative overflow-hidden rounded-lg shadow-2xl cursor-pointer ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                animate={{
                  scale: isZoomed ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={toggleZoom}
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${alt} - Image ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-[90vw] max-h-[70vh] w-auto h-auto object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Arrows - Desktop */}
          {images.length > 1 && (
            <>
              <motion.div
                className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={goToPrevious}
                    className="text-white hover:bg-white/20 border-white/20 backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={goToNext}
                    className="text-white hover:bg-white/20 border-white/20 backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </motion.div>
              </motion.div>
            </>
          )}

          {/* Bottom Navigation - Mobile */}
          {images.length > 1 && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent md:hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToPrevious}
                    className="text-white hover:bg-white/20 border-white/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </motion.div>

                <div className="flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToNext}
                    className="text-white hover:bg-white/20 border-white/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Swipe Hint - Mobile */}
          {images.length > 1 && (
            <motion.div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/60 text-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
            >
              Swipe to navigate
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
