import React from "react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  const videos = [
    {
      id: "1",
      title: "Introduction to Japanese Alphabets",
      url: "https://www.youtube.com/embed/ogqeb9TLO8A",
    },
    {
      id: "2",
      title: "Basic Vocabulary in Japanese",
      url: "https://www.youtube.com/embed/R6Ej5FXEQ8s",
    },
    {
      id: "3",
      title: "Japanese Greetings",
      url: "https://www.youtube.com/embed/N9C-WZFptzA",
    },
    {
      id: "4",
      title: "Common Phrases in Japanese",
      url: "https://www.youtube.com/embed/VaUfsPxDUcA",
    },
    {
      id: "5",
      title: "Japanese Numbers 1-10",
      url: "https://www.youtube.com/embed/ZaF--39rQfw",
    },
    {
      id: "6",
      title: "Writing Practice for Hiragana",
      url: "https://www.youtube.com/embed/KZUqtPDX_Gk",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl text-center p-8 font-bold mb-5 animate__animated  animate__tada">
        Watch video for better learning
      </h1>

      <div className="video-grid grid lg:grid-cols-3 gap-5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card card-compact bg-base-100  shadow-xl"
          >
            <figure>
              <iframe
                width="350"
                height="250"
                src={video.url}
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6 p-5">
        <Link to={'/lessonPage'} className="btn btn-wide btn-accent   text-white">
          Learn Vocabullaries
        </Link>
      </div>
    </div>
  );
};

export default Tutorial;
