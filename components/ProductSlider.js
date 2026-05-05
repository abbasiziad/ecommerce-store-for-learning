"use client";

import { useState } from "react";

export default function ProductSlider({ images, thumbnail }) {
  const allImages = [thumbnail, ...(images || [])];
  const [active, setActive] = useState(0);

  return (
    <div className="w-[30%]">
      {/* Main Image */}
      <img
        src={allImages[active]}
        className="w-full max-w-md h-80 object-cover rounded"
      />

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {allImages.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActive(index)}
            className={`w-20 h-20 object-cover cursor-pointer border ${
              active === index ? "border-green-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}