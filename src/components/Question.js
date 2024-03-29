import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div className="">
      <h4>Question: {question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
