import React from "react";
import "./Gallery.css";

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, imageUrl: "https://picsum.photos/400/300?random=1", title: "Image 1" },
  { id: 2, imageUrl: "https://picsum.photos/400/300?random=2", title: "Image 2" },
  { id: 3, imageUrl: "https://picsum.photos/400/300?random=3", title: "Image 3" },
  { id: 4, imageUrl: "https://picsum.photos/400/300?random=4", title: "Image 4" },
  { id: 5, imageUrl: "https://picsum.photos/400/300?random=5", title: "Image 5" },
  { id: 6, imageUrl: "https://picsum.photos/400/300?random=6", title: "Image 6" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-scroll">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;