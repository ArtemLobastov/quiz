import { useQuiz } from '../contexts/QuizContext';

function Progress() {
  const { numberQuestions, index, points, maxPossiblePoints, answer } =
    useQuiz();
  return (
    <header className="progress">
      <progress max={numberQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numberQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
