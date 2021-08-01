import React, { Component } from "react";
//import { getQuestions } from "./quiz.js";
import "./App.css";

class QuizApp extends React.Component {
  render() {
    /* state = {
    questions: [],
  };
  getQuestions = () => {
    this.setState({
      questions: "",
    });
  };
  componentDidMount() {
    this.getQuestions();
  }*/
    const questions = [
      {
        Question1: " Which is the largest country in the world by population?",
        Options: [
          { Answer: "India", isCorrect: false },
          { Answer: "USA", isCorrect: false },
          { Answer: "China", isCorrect: true },
          { Answer: "Russia", isCorrect: false },
        ],
      },
      {
        Question2: "When did the second world war end?",
        Options: [
          { Answer: "1945", isCorrect: true },
          { Answer: "1939", isCorrect: false },
          { Answer: "1944", isCorrect: false },
          { Answer: "1942", isCorrect: false },
        ],
      },
      {
        Question3: "Which was the first country to issue paper currency?",
        Options: [
          { Answer: "USA", isCorrect: false },
          { Answer: "France", isCorrect: false },
          { Answer: "Italy", isCorrect: false },
          { Answer: "China", isCorrect: true },
        ],
      },
      {
        Question4: "Which city hosted the 1996 Summer Olympics?",
        Options: [
          { Answer: "Atlanta", isCorrect: true },
          { Answer: "Sydney", isCorrect: false },
          { Answer: "Athens", isCorrect: false },
          { Answer: "Beijing", isCorrect: false },
        ],
      },
      {
        Question5: "Who invented the telephone?",
        Options: [
          { Answer: "Albert Einstein", isCorrect: false },
          { Answer: "Alexander Graham Bell", isCorrect: true },
          { Answer: "Isaac Newton", isCorrect: false },
          { Answer: "Marie Curie", isCorrect: false },
        ],
      },
    ];

    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>Welcome to QuizApp</p>

            <button>Start the quiz</button>
          </header>
        </div>
      </>
    );
  }
}

export default QuizApp;
