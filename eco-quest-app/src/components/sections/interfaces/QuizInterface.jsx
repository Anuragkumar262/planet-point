import React, { useState, useEffect } from 'react';

function QuizInterface({ challenge, onBack, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // 1. MODIFIED useEffect: Control the timer more precisely
  useEffect(() => {
    // Only run the timer if the explanation is NOT being shown
    if (showExplanation) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Pass a dummy value for the answer since time ran out
          handleSubmitAnswer(-1); // Use -1 or another indicator for "no answer"
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    // This cleanup function is crucial
    return () => clearInterval(timer);
  }, [currentQuestion, showExplanation]); // Re-run effect if question or explanation state changes

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleSubmitAnswer = (answerIndex) => {
    // Determine the answer to save. If called by timer, selectedAnswer might be null.
    const answerToSubmit = answerIndex !== undefined ? answerIndex : selectedAnswer;

    if (answerToSubmit === null) return;

    // Stop further interactions while waiting
    setShowExplanation(true);

    const newAnswers = [...answers, answerToSubmit];
    setAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentQuestion < challenge.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false); // This will restart the timer in useEffect
        setTimeLeft(30);
      } else {
        const correct = newAnswers.filter((answer, index) => 
          challenge.questions[index] && answer === challenge.questions[index].correct
        ).length;
        const score = Math.round((correct / challenge.questions.length) * 100);
        const points = Math.round((score / 100) * challenge.points);
        onComplete(score, points);
      }
    }, 3000);
  };

  // 2. ADD A GUARD CLAUSE: Prevents rendering if data is missing
  if (!challenge || !challenge.questions || !challenge.questions[currentQuestion]) {
    // You can also return a loading spinner here
    return null;
  }

  const currentQ = challenge.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / challenge.questions.length) * 100;

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'quiz-container' },
      React.createElement('div', { className: 'quiz-header' },
        React.createElement('div', null,
          React.createElement('h3', { className: 'quiz-title' }, challenge.title),
          React.createElement('div', { className: 'quiz-progress-bar' },
            React.createElement('div', { 
              className: 'quiz-progress-fill',
              style: { width: `${progress}%` }
            })
          )
        ),
        React.createElement('div', null,
          React.createElement('div', { className: 'quiz-progress' }, 
            `${currentQuestion + 1} / ${challenge.questions.length}`
          ),
          React.createElement('div', { 
            style: { 
              marginTop: '8px', 
              fontSize: '14px',
              color: timeLeft <= 10 ? '#ff4444' : 'inherit'
            } 
          }, `⏱️ ${timeLeft}s`)
        )
      ),
      React.createElement('div', { className: 'quiz-content' },
        React.createElement('div', { className: 'question-container' },
          React.createElement('div', { className: 'question-number' }, 
            `Question ${currentQuestion + 1}`
          ),
          React.createElement('h4', { className: 'question-text' }, currentQ.question),
          React.createElement('div', { className: 'options-container' },
            currentQ.options.map((option, index) => {
              let optionClass = 'quiz-option';
              if (showExplanation) {
                if (index === currentQ.correct) {
                  optionClass += ' correct';
                } else if (index === selectedAnswer && index !== currentQ.correct) {
                  optionClass += ' incorrect';
                }
              } else if (selectedAnswer === index) {
                optionClass += ' selected';
              }
              
              return React.createElement('div', {
                key: index,
                className: optionClass,
                onClick: showExplanation ? null : () => handleAnswerSelect(index)
              },
                React.createElement('span', null, option)
              );
            })
          )
        ),
        showExplanation && React.createElement('div', { className: 'quiz-explanation' },
          React.createElement('div', { className: 'quiz-explanation-title' }, '💡 Explanation'),
          React.createElement('div', { className: 'quiz-explanation-text' }, currentQ.explanation)
        ),
        React.createElement('div', { className: 'quiz-actions' },
          React.createElement('button', {
            className: 'btn btn--secondary',
            onClick: onBack,
            disabled: showExplanation
          }, '← Back'),
          !showExplanation && React.createElement('button', {
            className: 'btn btn--primary',
            onClick: () => handleSubmitAnswer(),
            disabled: selectedAnswer === null
          }, currentQuestion === challenge.questions.length - 1 ? 'Finish Quiz' : 'Next Question')
        )
      )
    )
  );
}

export default QuizInterface;