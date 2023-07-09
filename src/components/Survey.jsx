import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import avatar from '../assets/avatar.png';


const Survey = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const isAnswered = (index) => {
    return answers[index] !== undefined;
  };

  const questions = [
    {
      type: 'statement',
      text: "Hi, I'm Bob, your personal assistant. <br /> Let's get you started!",
    },
    {
      type: 'text',
      text: "Let's start with your company.<br />What's the name of your company?",
    },
    {
      type: 'mcq',
      text: 'What industry is your company in?',
      options: ['Red', 'Blue', 'Green', 'Yellow', 'Other'],
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/hierarchy-chart');
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleTextChange = (e) => {
    setAnswers({ ...answers, [currentQuestion]: e.target.value });
  };

  const handleOptionChange = (e) => {
    setAnswers({ ...answers, [currentQuestion]: e.target.value });
    if (e.target.value === 'Other') {
      setOtherInputVisible(true);
    } else {
      setOtherInputVisible(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {currentQuestion > 0 && (
         <>
         <img
           src={avatar}
           alt="Avatar"
           className="fixed top-0 left-0 ml-4 mt-4 w-16 h-16 rounded-full"
         />
         <div className="fixed top-0 right-0 mr-4 mt-4">
           <div className="relative pt-1">
             <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
               <div
                 style={{
                   width: `${((currentQuestion - 1) / (questions.length - 2)) * 100}%`,
                 }}
                 className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
               ></div>
             </div>
             <p className="text-sm text-right">
               {Math.round(
                 ((currentQuestion - 1) / (questions.length - 2)) * 100
               )}
               %
             </p>
           </div>
         </div>
       </>
      )}
      <div className="w-full max-w-4xl">
        {questions[currentQuestion].type === 'statement' && (
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4">
            <img src={avatar} alt="Avatar" className="w-36 h-36" />
            <div className="text-left">
              <p
                dangerouslySetInnerHTML={{
                  __html: questions[currentQuestion].text,
                }}
                className="mb-8 text-2xl"
              />
              <Button onClick={handleNext}>Get Started</Button>
            </div>
          </div>
        )}

        {questions[currentQuestion].type === 'text' && (
          <div className="mb-4">
            <label
              dangerouslySetInnerHTML={{
                __html: questions[currentQuestion].text,
              }}
              className="mb-8 text-2xl"
            />
            <input
              className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-9 mb-4"
              type="text"
              onChange={handleTextChange}
            />
            <div className="flex justify-end space-x-4 w-3/4">
              <Button onClick={handlePrevious}>Previous</Button>
              <Button onClick={handleNext} disabled={!isAnswered(currentQuestion)} cursor="../assets/disabled.png">Next</Button>
            </div>
          </div>
        )}

        {questions[currentQuestion].type === 'mcq' && (
          <div className="mb-4">
            <fieldset>
              <legend className="block text-gray-700 text-2xl font-bold mb-2">
                {questions[currentQuestion].text}
              </legend>
              {questions[currentQuestion].options.map((option) => (
                <div key={option}>
                  <label className="inline-flex items-center text-xl">
                    <input
                      type="radio"
                      className="form-radio form-checkbox"
                      name="option"
                      value={option}
                      onChange={handleOptionChange}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </fieldset>
            {otherInputVisible && (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
                type="text"
                onChange={handleTextChange}
              />
            )}
            <div className="flex justify-end space-x-4 w-3/4">
              <Button onClick={handlePrevious}>Previous</Button>
              <Button onClick={handleNext} disabled={!isAnswered(currentQuestion)} cursor="../assets/disabled.png">Next</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;
