import axios from "axios";

export default async function apiData() {
    const result = await axios.get("https://restcountries.com/v3.1/all?fields=name,flag");
    const randomCountry = Math.ceil(Math.random() * result.data.length);

    let count = 0;
    let allOptions: any[] = []

    const rightAnswer = result.data[randomCountry];
    allOptions.push(rightAnswer.name.common);

    result.data.filter((country: any) => {
        if (country && count < 3) {
            allOptions.push(country.name.common)
            count++
        }
    });

    const questionsData = {
        rightAnswer,
        allOptions
    }
    return questionsData;
};