import React from "react";
import YouTube from "react-youtube";
import "./YoutubeGallery.scss";

// This component renders a gallery of YouTube videos.  It can either
// embed a playlist of uploads from a channel (using the channel handle)
// or display a specific list of video IDs.  To use it, import it in
// your page and ensure the corresponding section is defined in
// src/portfolio.js as `youtubeSection`.

export default function YoutubeGallery({ section }) {
  if (!section || section.display === false) {
    return null;
  }

  const { channelHandle, videoIds, title, subtitle } = section;

  return (
    <section id="youtube-gallery" className="youtube-gallery-section">
      <div className="youtube-container">
        <h2>{title}</h2>
        {subtitle && <p className="youtube-subtitle">{subtitle}</p>}
        
        {videoIds && videoIds.length > 0 ? (
          <div className="youtube-video-list">
            {videoIds.map((id) => (
              <div key={id} className="youtube-video-item">
                <YouTube 
                  videoId={id} 
                  opts={{ 
                    width: "100%", 
                    height: "315",
                    playerVars: {
                      autoplay: 0,
                      controls: 1,
                      modestbranding: 1,
                      rel: 0
                    }
                  }} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="youtube-channel-embed">
            <iframe
              title="YouTube Channel"
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/videoseries?list=UU${channelHandle}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="channel-note">
              📺 Showing latest videos from my YouTube channel
            </p>
          </div>
        )}
      </div>
    </section>
  );
}