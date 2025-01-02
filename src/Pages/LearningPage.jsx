import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const LearningPage = () => {

  return (
    <div>
      <h2 className="text-3xl p-8 text-center font-bold ">
        Let's Learn Japanesse
      </h2>
      <h3>Total available lesson : </h3>

      <div className="space-y-4 my-6">
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 1</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 2</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 3</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 4</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 5</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 6</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 7</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 8</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 9</h2>
        </div>
        <div className="card-body border rounded-xl ">
          <h2 className="card-title">Lesson 10</h2>
        </div>
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

export default LearningPage;
