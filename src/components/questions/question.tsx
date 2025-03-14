import { useEffect, useState } from "react";

// Question
type question = {
    question: {
        rightAnswer: any,
        allOptions: any[]
    },
    userAnswer: string,
    handleAnswer: string
}

function Question({ question, userAnswer, handleAnswer }: question) {
    console.log('oi')
    const [selectCountry, setSelectCountry] = useState(0);

    const arr: any[] = [];
    const flag = question.rightAnswer.flag;

    const result = question.allOptions
    for (let key in result) {
        arr.push(result[key])
    };

    const shufledArray = arr.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

    const validateRightAnswer = (selectCountry: any) => {
        setSelectCountry(selectCountry)
    }

    return <div className="question">
        <div>Qual o nome do pais dessa bandeira oh seu comedia?: {flag}</div>

        {shufledArray.map((name: any, index: number) => (
            <button key={index} onClick={validateRightAnswer} value={name} >
                <p>{name}</p>
            </button>
        ))}
    </div>;
}

export default Question;