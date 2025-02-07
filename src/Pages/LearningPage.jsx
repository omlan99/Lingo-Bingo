import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const LearningPage = () => {
  const words = useLoaderData();
  const { no } = useParams();
  const [showWord, setShowWorld] = useState();
  console.log(words)
  const filteredWords = words.filter((word) => word.lesson_no === Number(no));
  console.log(filteredWords)
  const handleSay = (id) => {
    const clickedId = id;
    console.log(id);
    const show = filteredWords.find((word) => word.id === id);
    setShowWorld(show);
    document.getElementById("my_modal_1").showModal();
  };
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="my-14">
      <h2 className="text-3xl p-8 text-center font-bold ">
        Let's start Lesson No : {no}
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 my-5 ">
        {filteredWords.map((word, index) => (
          <div
            key={index}
            className={`border border-indigo-100 rounded-xl p-5 cursor-pointer ${
              word.difficulty === "easy"
                ? "bg-green-400"
                : word.difficulty === "medium"
                ? "bg-orange-400"
                : "bg-red-500"
            }`}
            onClick={() => {
              pronounceWord(word.word);
            }}
          >
            <p>
              <span className="font-semibold">Word </span>: {word.word}
            </p>
            <p>
              <span className="font-semibold">Pronunciation </span>:{" "}
              {word.pronunciation}
            </p>
            <p>
              <span className="font-semibold">Meaning </span>: {word.meaning}
            </p>

            <p>
              <span className="font-semibold">Parts of Speech </span>:{" "}
              {word.part_of_speech}
            </p>
            <p>
              <span className="font-semibold">Difficulty </span>:{" "}
              {word.difficulty}
            </p>
            <button
              className=" btn btn-warning w-full my-4"
              onClick={() => handleSay(word.id)}
            >
              When to say
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={"/lessonPage"}
          className="btn btn-wide btn-info text-white my-5"
        >
          Back To Lesson
        </Link>
      </div>
      {showWord && (
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <p className="p-2">
              <span className="font-semibold">Word </span>: {showWord.word}
            </p>
            <p className="p-2">
              <span className="font-semibold">Meaning </span>:{" "}
              {showWord.meaning}
            </p>

            <p className="p-2">
              <span className="font-semibold">When To Say</span>:
              {showWord.when_to_say}
            </p>
            <p className="p-2">
              <span className="font-semibold">Example</span>:{showWord.example}
            </p>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default LearningPage;
