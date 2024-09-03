import React from "react";

const InstagramPhotos= ({ mediaItems }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((media) => (
          <div
            key={media.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            {media.media_type === "IMAGE" ? (
              <img
                src={media.media_url}
                alt={`Instagram media by ${media.username}`}
                className="w-full h-64 object-cover"
              />
            ) : (
              <video controls className="w-full h-64">
                <source src={media.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="p-4">
              <p className="text-sm text-gray-500">
                Posted by {media.username}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(media.timestamp).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPhotos;
