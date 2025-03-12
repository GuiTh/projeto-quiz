// Question

import React from "react";

type question = {
    question: string,
    userAnswer: string,
    handleAnswer: string
}

function Question({ question, userAnswer, handleAnswer }: question) {
    return <div className="question">
        <div>Pergunta {question}</div>
        <div>
            <div>opcao 1</div>
            <div>opcao 2</div>
            <div>opcao 3</div>
            <div>opcao 4</div>
        </div>
    </div>;
}

export default Question;