import React,{Component} from 'react';
import "./quiz.js";
import './App.css';

class App extends Component() {
  state = {
    questions: [],
  };
  getQuestions = () => {
    this.setState({
      questions: question
    })
  }
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
        
            <p>
              Welcome to QuizApp
            </p>
        
            <button>Start the quiz</button>
            {this.state.questions.length>0}
      
          </header>
        </div>
      </>
    )
  };
};

export default App;
