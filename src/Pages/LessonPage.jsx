import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LessonPage = () => {
  const navigate = useNavigate();
  const lessons = [
    { id: 1, title: "Lesson 1" },
    { id: 2, title: "Lesson 2" },
    { id: 3, title: "Lesson 3" },
    { id: 4, title: "Lesson 4" },
    { id: 5, title: "Lesson 5" },
    { id: 6, title: "Lesson 6" },
    { id: 7, title: "Lesson 7" },
    { id: 8, title: "Lesson 8" },
    { id: 9, title: "Lesson 9" },
    { id: 10, title: "Lesson 10" },
  ];
  return (
    <div>
      <h2 className="text-3xl p-8 text-center font-bold ">
        Let's Learn Japanesse
      </h2>
      <div className="cards-wrapper">
        {lessons.map((lesson) => (
          <div
            className="space-y-4 my-6 cursor-pointer"
            key={lesson.id}
            onClick={() => navigate(`/lesson/${lesson.id}`)}
          >
            <div className="card-body border rounded-xl ">
              <h2 className="card-title">{lesson.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="my-16">
         <h3 className="text-5xl text-center font-bold p-14"> Tutorial</h3>
         <div className="flex justify-center">
         <figure>
              <iframe
                width="706"
                height="397"
                src="https://www.youtube.com/embed/ogqeb9TLO8A"
                title="Introduction to Japanese Alphabets"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            <h2 className="card-title mx-auto">Introduction to Japanese Alphabets</h2>
            </figure>
         </div>
         <div className="text-center p-10">

            <Link to={'/tutorial'} className="btn btn-info ">View More</Link>
         </div>
      </div>
    </div>
  );
};

export default LessonPage;
