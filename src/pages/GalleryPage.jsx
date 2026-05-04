import React, { useState } from 'react';
import { portfolioCategories } from '../data/portfolio';

export default function GalleryPage() {
  // Flatten all images from all categories into one array for the gallery
  const allImages = portfolioCategories.flatMap(category => 
    category.images.map(img => ({
      src: img,
      category: category.name,
      color: category.color
    }))
  );

  return (
    <main className="sub-page">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-label reveal">Portfolio</span>
          <h1 className="reveal page-title">
            Our <span className="text-accent">Work.</span>
          </h1>
          <p className="page-description reveal">
            A curated archive of our most impactful creative solutions.
          </p>
        </div>

        <div className="gallery-grid">
          {allImages.map((item, index) => (
            <div key={index} className={`gallery-item reveal stagger-${(index % 5) + 1}`}>
              <div className="gallery-card">
                <img src={item.src} alt={`${item.category} work`} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-tag" style={{ background: item.color || '#e8352a' }}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
