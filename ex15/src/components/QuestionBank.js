import React, { useReducer } from 'react';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      id: 3,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    },
    {
      id: 4,
      question: 'Which language is primarily used for React development?',
      options: ['Python', 'JavaScript', 'C++', 'Java'],
      answer: 'JavaScript',
    },
    {
      id: 5,
      question: 'Which React hook is used for managing complex state logic?',
      options: ['useEffect', 'useReducer', 'useRef', 'useMemo'],
      answer: 'useReducer',
    }
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'NEXT_QUESTION': {
      const currentQ = state.questions[state.currentQuestion];
      const isCorrect = state.selectedOption === currentQ.answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      const nextIndex = state.currentQuestion + 1;

      if (nextIndex < state.questions.length) {
        return {
          ...state,
          score: newScore,
          currentQuestion: nextIndex,
          selectedOption: '',
        };
      } else {
        return {
          ...state,
          score: newScore,
          showScore: true,
        };
      }
    }

    case 'RESTART_QUIZ':
      return {
        ...state,
        currentQuestion: 0,
        selectedOption: '',
        score: 0,
        showScore: false,
      };

    default:
      return state;
  }
};

const QuestionBank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  const q = questions[currentQuestion];

  return (
    <div className="card shadow-sm p-4 mb-4 bg-white">
      <h3 className="card-title text-primary mb-3">2. Question Bank Quiz (useReducer)</h3>

      {showScore ? (
        <div className="text-center py-4">
          <div className="alert alert-success py-4">
            <h4 className="fw-bold mb-2">🎉 Quiz Completed!</h4>
            <p className="fs-5 mb-0">
              Your Final Score: <strong>{score}</strong> / {questions.length} (
              {Math.round((score / questions.length) * 100)}%)
            </p>
          </div>
          <button className="btn btn-primary px-4 py-2 mt-2 fw-semibold" onClick={handleRestartQuiz}>
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          {/* Progress Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-secondary fs-6">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="badge bg-info text-dark fs-6">Current Score: {score}</span>
          </div>

          {/* Progress Bar */}
          <div className="progress mb-4" style={{ height: '8px' }}>
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Title */}
          <h4 className="fw-bold mb-4">{q.question}</h4>

          {/* Options List */}
          <div className="list-group mb-4">
            {q.options.map((option, index) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={index}
                  type="button"
                  className={`list-group-item list-group-item-action py-3 d-flex align-items-center ${
                    isSelected ? 'active fw-bold' : ''
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <span className="me-3 badge rounded-pill bg-light text-dark border">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary px-4 py-2 fw-semibold"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question ➔'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBank;
