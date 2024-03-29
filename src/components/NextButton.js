import { useQuiz } from '../contexts/QuizContext';

function NextButton() {
  const { dispatch, answer, index, numberQuestions } = useQuiz();
  if (answer === null) return null;
  if (index < numberQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      </div>
    );
  if (index === numberQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'finished' })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
