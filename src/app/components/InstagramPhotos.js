"use client";

import React from "react";
import ImageModal from "./ImageModal";

const InstagramPhotos = ({ mediaItems }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((media) => (
          <div key={media.id}>
            {media.media_type === "IMAGE" ? (
              <ImageModal
                src={media.media_url}
                alt={`Instagram media by ${media.username}`}
                className=""
              />
            ) : (
              <video controls className="w-full h-64">
                <source src={media.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPhotos;
