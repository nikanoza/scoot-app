import { useState } from "react";
import Chevron from "../../svg/Chevron";

type PropsType = {
  question: string;
  answer: string;
};

const Question: React.FC<PropsType> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full xl:w-[730px] p-8 bg-light xl:hover:bg-light-yellow">
      <div className="flex justify-between items-center gap-4">
        <h3 className="mono text-lg text-semi-gray font-bold">{question}</h3>
        <div
          style={{ transform: showAnswer ? "rotate(180deg)" : "none" }}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <Chevron />
        </div>
      </div>
      {showAnswer && (
        <p className="lexend font-normal text-semi-gray text-[15px] mt-4">
          {answer}
        </p>
      )}
    </div>
  );
};

export default Question;
