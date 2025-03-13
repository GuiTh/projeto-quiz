// Question
type question = {
    question: any,
    userAnswer: string,
    handleAnswer: string
}

function Question({ question, userAnswer, handleAnswer }: question) {
    const flag = question.rightAnswer?.flag
    const options = question?.allOptions
    const arr: any[] = []

    function randomArrayIndexPicker(obj: any) {
        for (let key in obj) {
            arr.push(obj[Math.ceil(Math.random() * arr.length - 1)])
        };
        console.log(Math.ceil(Math.random() * (arr.length - 1)))
    }
    randomArrayIndexPicker(options)
    return <div className="question">
        <div>Qual o nome do pais dessa bandeira oh seu comedia?: {flag}</div>
        {/* <div>
            {randomArrayIndexPicker(options).map((name) => {
                return <p>{name}</p>
            })}
        </div> */}
    </div>;
}

export default Question;