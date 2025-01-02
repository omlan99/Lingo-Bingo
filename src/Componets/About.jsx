import React from "react";

const About = () => {
  return (
    <div className="py-16">
      <h3 className="text-2xl font-medium p-5 text-center">About Us</h3>
      <p className="text-center py-2 ">
        Welcome to Lingo Bingo, your one-stop platform for learning and
        mastering vocabulary in a fun and interactive way!
      </p>
      <div className="grid lg:grid-cols-2 gap-9 mt-5">
        <div className="flex flex-col items-center border border-indigo-100 rounded-md py-6">
          <p className="text-xl font-semibold text-center p-9">Our Mission</p>
          <p className="pl-2 max-w-72">
            At Lingo Bingo, we aim to help learners of all levels improve their
            vocabulary and communication skills in a way that feels enjoyable
            and natural. Whether you’re just starting your language-learning
            journey or looking to enhance your skills, we’re here to support you
            every step of the way.
          </p>
        </div>
        <div className="flex flex-col  items-center border border-indigo-100 rounded-md py-6">
          <p className="text-xl font-semibold text-center p-9">What We Offer</p>
          <p className="pl-2 max-w-72">
            <ul>
              <li className="list-disc">
                Interactive Lessons: Learn vocabulary through structured lessons
                tailored to your pace.
              </li>
              <li className="list-disc">
                Cultural Connection: Explore words and phrases contextualized
                for real-life use.
              </li>
              <li className="list-disc">
                Progress Tracking: Keep track of your vocabulary growth and
                achievements.
              </li>
              <li className="list-disc">
                Fun Features: Engage with interactive cards, tutorials, and
                quizzes designed to make learning a breeze.
              </li>
            </ul>
          </p>
        </div>  
      </div>
      <h3 className="text-2xl font-medium p-5 text-center mt-5">Why Choose Us?</h3>
      <p className="text-center py-2 ">
      We believe language learning should be accessible and enjoyable. With our carefully curated resources, responsive design, and engaging learning methods, we strive to make vocabulary acquisition seamless for everyone.!
      </p>
    </div>
  );
};

export default About;
