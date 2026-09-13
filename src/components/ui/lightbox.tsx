"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";

  const isVideo = (url: string) => {
    return /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        if (isRtl) {
          onNavigate((currentIndex - 1 + images.length) % images.length);
        } else {
          onNavigate((currentIndex + 1) % images.length);
        }
      } else if (e.key === "ArrowLeft") {
        if (isRtl) {
          onNavigate((currentIndex + 1) % images.length);
        } else {
          onNavigate((currentIndex - 1 + images.length) % images.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, isRtl, onClose, onNavigate]);

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance in pixels

    if (Math.abs(diff) > threshold) {
      if (isRtl) {
        // RTL: swipe left = prev, swipe right = next
        if (diff > 0) handlePrev();
        else handleNext();
      } else {
        // LTR: swipe left = next, swipe right = prev
        if (diff > 0) handleNext();
        else handlePrev();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={isRtl ? handleNext : handlePrev}
            className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={isRtl ? handlePrev : handleNext}
            className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-6xl h-[80vh] mx-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {isVideo(images[currentIndex]) ? (
              <video
                key={currentIndex}
                src={images[currentIndex]}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest font-mono text-sm z-50">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
