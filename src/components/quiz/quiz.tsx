import axios from "axios";
import React, { useState, useEffect } from "react";
import Question from "../questions/question";
import apiData from "../../api/countries";

function Quiz() {
    const [questions, setQuestions] = useState<any>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<any>([]);
    const [showResult, setShowResult] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setQuestions(await apiData())
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
    if (!questions) {
        return <div>carregando...</div>
    }
    return <div className="quiz">
        <Question question={questions} userAnswer={""} handleAnswer={""} />
    </div>;
}

export default Quiz;