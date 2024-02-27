import './Card.css'
import { useState } from 'react';
import CardGalery from '../components/CardGalery.js'
import { useParams } from 'react-router-dom';
import StoryData from '../datas/storysData.js'
import { motion, AnimatePresence } from "framer-motion";


function Card() {
  const [showAnswer, setShowAnswer] = useState([]);
  const {storyId} = useParams()

  const singleStory = StoryData.find(story => story.id === parseInt(storyId))

  const {title, fullStory, date, questions } = singleStory;

  console.log(storyId)

  function toggleAnswer(id){
    setShowAnswer((prevShowAnswer) => {
      const updatedShowAnswer = { ...prevShowAnswer };
      updatedShowAnswer[id] = !prevShowAnswer[id];
      return updatedShowAnswer;
    });
  };


  return (
    <main className='single-card-container'>
        <div className='title-box'>
          <h2 className='single-card-title'>{title}</h2>
        </div>
        <p className='card-story'>{fullStory}</p>

    

        {questions.map((question) => (
        <div key={question.id} className='question-box'>
          <div className='question-btn'>
            <h2 className='question'>{question.title}</h2>
            <button className='btn-show-hide' onClick={() => toggleAnswer(question.id)}>
              {showAnswer[question.id] ? '-' : '+'}
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
        {/* <p className='card-story'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


           */}
          <div className='card-galery'>
            <p>{date}</p>
            <CardGalery />
          </div>
          
    </main>
  )
}

export default Card

