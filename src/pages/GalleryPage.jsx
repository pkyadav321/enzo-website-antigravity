import React from 'react';
import { CircularGallery } from "../components/ui/circular-gallery-2";

const galleryItems = [
  { image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", text: "Abstract Form" },
  { image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop", text: "Cyber Reality" },
  { image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop", text: "Liquid Flow" },
  { image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", text: "Neon Pulse" },
  { image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop", text: "Digital Core" },
  { image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?q=80&w=800&auto=format&fit=crop", text: "Strategy" },
  { image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", text: "High Tech" },
  { image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop", text: "Creative" },
];

export default function GalleryPage() {
  return (
    <main className="sub-page">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-label reveal">Visual Showcase</span>
          <h1 className="reveal page-title">
            Interactive <span className="text-accent">Gallery.</span>
          </h1>
          <p className="page-description reveal">
            Drag or scroll to explore our creative universe. Built with OGL for high-performance 3D interactions.
          </p>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-[#1a1a1a]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </main>
  );
}
