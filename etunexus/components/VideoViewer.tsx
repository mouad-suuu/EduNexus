import React from "react";

interface VideoViewerProps {
  title: string;
  description: string;
  videoUrl: string;
}

const VideoViewer: React.FC<VideoViewerProps> = ({
  title,
  description,
  videoUrl,
}: VideoViewerProps) => {
  const extractYouTubeVideoId = (url: string) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <div className="video-container flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
              videoUrl
            )}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoViewer;
