// src/components/editor/MediaShowcaseEditor.jsx
import React from "react";
import { usePortfolioStore } from "../../store/portfolioStore";

const MediaShowcaseEditor = () => {
  const { currentPortfolio, updatePortfolioSection } = usePortfolioStore();
  const { media = { images: [], videos: [] } } = currentPortfolio.sections || {};

  // --- Add Image ---
  const addImage = () => {
    updatePortfolioSection("media", {
      images: [...(media.images || []), { id: Date.now().toString(), url: "", caption: "" }],
      videos: media.videos || [],
    });
  };

  // --- Add Video ---
  const addVideo = () => {
    updatePortfolioSection("media", {
      images: media.images || [],
      videos: [
        ...(media.videos || []),
        { id: Date.now().toString(), thumbnail: "", url: "", caption: "" },
      ],
    });
  };

  // --- Update Image ---
  const updateImage = (index, field, value) => {
    const updated = [...media.images];
    updated[index][field] = value;
    updatePortfolioSection("media", { images: updated, videos: media.videos });
  };

  // --- Update Video ---
  const updateVideo = (index, field, value) => {
    const updated = [...media.videos];
    updated[index][field] = value;
    updatePortfolioSection("media", { images: media.images, videos: updated });
  };

  // --- Remove Image ---
  const removeImage = (index) => {
    const updated = media.images.filter((_, i) => i !== index);
    updatePortfolioSection("media", { images: updated, videos: media.videos });
  };

  // --- Remove Video ---
  const removeVideo = (index) => {
    const updated = media.videos.filter((_, i) => i !== index);
    updatePortfolioSection("media", { images: media.images, videos: updated });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          🎭 Media Showcase ({(media.images?.length || 0) + (media.videos?.length || 0)})
        </h2>
        <div className="flex gap-2">
          <button onClick={addImage} className="btn btn-primary btn-sm">➕ Add Image</button>
          <button onClick={addVideo} className="btn btn-secondary btn-sm">🎬 Add Video</button>
        </div>
      </div>

      {/* Images Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">🖼️ Images ({media.images?.length || 0})</h3>
        {(!media.images || media.images.length === 0) ? (
          <p className="text-gray-500">No images yet. Add some!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.images.map((img, i) => (
              <div key={img.id} className="card bg-base-100 border shadow">
                {img.url && <img src={img.url} alt={img.caption} className="w-full h-40 object-cover" />}
                <div className="card-body space-y-3">
                  <input
                    type="url"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    value={img.url}
                    onChange={(e) => updateImage(i, "url", e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Caption"
                    className="input input-bordered w-full"
                    value={img.caption}
                    onChange={(e) => updateImage(i, "caption", e.target.value)}
                  />
                  <button onClick={() => removeImage(i)} className="btn btn-error btn-sm w-full mt-2">
                    ✕ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Videos Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">🎥 Videos ({media.videos?.length || 0})</h3>
        {(!media.videos || media.videos.length === 0) ? (
          <p className="text-gray-500">No videos yet. Add some!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.videos.map((vid, i) => (
              <div key={vid.id} className="card bg-base-100 border shadow">
                {vid.thumbnail && (
                  <div className="relative">
                    <img src={vid.thumbnail} alt={vid.caption} className="w-full h-40 object-cover" />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-80">▶</span>
                  </div>
                )}
                <div className="card-body space-y-3">
                  <input
                    type="url"
                    placeholder="Thumbnail URL"
                    className="input input-bordered w-full"
                    value={vid.thumbnail}
                    onChange={(e) => updateVideo(i, "thumbnail", e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="Video URL (YouTube, Vimeo, etc.)"
                    className="input input-bordered w-full"
                    value={vid.url}
                    onChange={(e) => updateVideo(i, "url", e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Caption"
                    className="input input-bordered w-full"
                    value={vid.caption}
                    onChange={(e) => updateVideo(i, "caption", e.target.value)}
                  />
                  <button onClick={() => removeVideo(i)} className="btn btn-error btn-sm w-full mt-2">
                    ✕ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaShowcaseEditor;
