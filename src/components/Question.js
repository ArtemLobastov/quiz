import Options from './Options';

function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div className="">
      <h4>Question: {question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
