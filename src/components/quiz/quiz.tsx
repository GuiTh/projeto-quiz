import axios from "axios";
import React, { useState, useEffect } from "react";
import Question from "../questions/question";

function Quiz() {
    const [questions, setQuestions] = useState<any>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>([]);
    const [showResult, setShowResult] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiData = await axios.get("https://restcountries.com/v3.1/all?fields=name,flag");
                const result = apiData.data;
                const randomCountry = Math.ceil(Math.random() * result.length);

                let count = 0;
                let allOptions: any[] = []

                const rightAnswer = result[randomCountry];
                allOptions.push(rightAnswer.name.common);

                result.filter((country: any) => {
                    if (country && count < 3) {
                        allOptions.push(country.name.common)
                        count++
                    }
                });

                const questionsData = {
                    rightAnswer,
                    allOptions
                }
                setQuestions(questionsData)
                return result;
            } catch (err) {
                console.log(err);
            };
        };

        fetchData();
    }, []);

    const handleAnswer = () => {

    };

    const handleNextQuestion = () => {
        // Move to the next question
    };

    const handlePrevQuestion = () => {
        // Move to the previous question
    };

    const handleFinishQuiz = () => {
        // Calculate the quiz result and show the result page
    };

    return <div className="quiz">
        <Question question={questions} userAnswer={""} handleAnswer={""} />
    </div>;
}

export default Quiz;