import "./Card.css";
import { useState } from "react";
import CardGalery from "../components/CardGalery.js";
import { useParams } from "react-router-dom";
import StoryData from "../datas/storysData.js";
import { motion, AnimatePresence } from "framer-motion";

function Card() {
  const [showAnswer, setShowAnswer] = useState([]);
  const { storyId } = useParams();

  const singleStory = StoryData.find((story) => story.id === parseInt(storyId));

  const { title, fullStory, date, questions, storyPhotos } = singleStory;

  console.log(storyId);

  function toggleAnswer(id) {
    setShowAnswer((prevShowAnswer) => {
      const updatedShowAnswer = { ...prevShowAnswer };
      updatedShowAnswer[id] = !prevShowAnswer[id];
      return updatedShowAnswer;
    });
  }

  return (
    <main className="single-card-container">
      <div className="title-box">
        <h2 className="single-card-title">{title}</h2>
      </div>
      <p className="card-story">{fullStory}</p>

      {questions.map((question) => (
        <div key={question.id} className="question-box">
          <div className="question-btn">
            <h2 className="question">{question.title}</h2>
            <button
              className="btn-show-hide"
              onClick={() => toggleAnswer(question.id)}
            >
              {showAnswer[question.id] ? "-" : "+"}
            </button>
          </div>
          <AnimatePresence>
          {showAnswer[question.id] && (       
                <motion.p
              className="answer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              {question.info}
            </motion.p>
          )} 
           </AnimatePresence>
        </div>
      ))}
      <div className="card-galery">
        <p>{date}</p>
        <CardGalery storyPhotos={storyPhotos}/>
      </div>
    </main>
  );
}

export default Card;
