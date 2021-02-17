import React from "react";
import { NewComponent, QuestionDivs, H3text } from "./Q&Acomponent";
import QAQuestions from "../QAQuestions";

const QAcomponent = (props) => {
  return (
    <>
      <NewComponent>
        <div>
          <h1>Frequently Asked Questions</h1>
        </div>

        {QAQuestions.map((ques) => {
          return (
            <>
              <QuestionDivs>
                <H3text>{ques}</H3text>
              </QuestionDivs>
            </>
          );
        })}
      </NewComponent>
    </>
  );
};

export default QAcomponent;
