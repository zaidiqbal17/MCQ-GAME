import React, { useState } from 'react';
import Question from '../components/Question';
import Score from '../components/Score';
import { Container } from '@mui/material';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'What is the capital of Spain?',
    options: ['Madrid', 'Barcelona', 'Lisbon', 'Seville'],
    answer: 'Madrid'
  }
];

const Game: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      )}
    </Container>
  );
};

export default Game;
