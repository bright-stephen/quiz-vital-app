import Quiz from "./component/Quiz/Quiz";
// import { jsQuizz } from "./component/Quiz/questions";
import { useEffect, useState } from "react";

function App() {
    // fetch questions from API
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://657674a20febac18d403e7fa.mockapi.io/api/xbot/questions"
      );
      const questionsResponse = await response.json();
      const firstFiveQuestions = questionsResponse.slice(0, 5);
      console.log(firstFiveQuestions);
      setQuestions(firstFiveQuestions);
      
    } catch (error) {
      console.log(error)
    }
  }



  return questions.length && <Quiz questions={questions}/>
  
}



// function App () {
//   // get questions from questions.js
//   return <Quiz questions={jsQuizz.questions}/>
// }


export default App;
