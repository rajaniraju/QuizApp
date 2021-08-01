function getQuestions(){
    let quizArray = [
        {
            Question1: " Which is the largest country in the world by population?",
            Options: ["India", "USA", "China", "Russia"],
            CorrectAnswer: "China"
        },
        {
            Question2: "When did the second world war end?",
            Options: ["1945", "1939", "1944", "1942"],
            CorrectAnswer: "1945"
        },
        {
            Question3: "Which was the first country to issue paper currency?",
            Options: ["USA", "France", "Italy", "China"],
            CorrectAnswer: "China"
        },
        {
            Question4: "Which city hosted the 1996 Summer Olympics?",
            Options: ["Atlanta", "Sydney", "Athens", "Beijing"],
            CorrectAnswer: "Atlanta",
 
        },
        {
            Question5: "Who invented the telephone?",
            Options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
            CorrectAnswer: "Alexander Graham Bell"
        },
    ]
    return quizArray.sort().Math.random();
}
export default getQuestions
