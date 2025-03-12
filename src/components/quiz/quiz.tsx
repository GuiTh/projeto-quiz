import axios from "axios";
import React, { useState, useEffect } from "react";
import Question from "../questions/question";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    async function fetchData() {
        try {
            const apiData = await axios.get("https://restcountries.com/v3.1/all?fields=name,flag")
            const result = apiData.data;
            console.log(result)
            return result;
        } catch (err) {
            console.log(err);
        };
    };

    fetchData();
    useEffect(() => {
        console.log("oi")
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
        <Question />
    </div>;
}

export default Quiz;