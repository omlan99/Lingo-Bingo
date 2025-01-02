import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const LearningPage = () => {
    const words = useLoaderData()
   const {no} = useParams()
   console.log(no, words[0].lesson_no)
   const filteredWords = words.filter(word => word.lesson_no === Number(no))
   console.log(filteredWords)
  return (
    <div>
      Hi I am lesson NO {no}
     
    </div>
  );
};

export default LearningPage;
