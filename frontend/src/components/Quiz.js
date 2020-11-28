import React, { useState } from 'react';
import {Tab, Tabs, Form, Button, Figure} from 'react-bootstrap';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';

var q_number = 0;
var totalcorrect = 0;
var choices = [];
var correctAnswers = [];
var questions = [];

function Quiz()
{
    
    
    var quests = JSON.parse(localStorage.getItem('questions'));
    var user = JSON.parse(localStorage.getItem('user_data'));
    

    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");
    

    const doQuiz = event => 
    {
	    event.preventDefault();
        // console.log(event.target.id);
        // alert("doQuiz() called");
        

        setQuestion(quests[q_number].Question);
        setOptionA(quests[q_number].A);
        setOptionB(quests[q_number].B);
        setOptionC(quests[q_number].C);
        setOptionD(quests[q_number].D);
        setNumber(q_number+1);
        
    };  
    
    const answerSelect = async event =>
    {
        event.preventDefault();
        choices.push(event.target.id);
        correctAnswers.push(quests[q_number].CorrectAnswer);
        questions.push(quests[q_number].Question);
        localStorage.setItem('choices', JSON.stringify(choices));
        // localStorage.setItem('answers', JSON.stringify(correctAnswers));
        console.log(q_number);
        console.log(quests[q_number]);
        if(quests[q_number].CorrectAnswer === event.target.id)
        {
            console.log("Correct");
            totalcorrect++;
        }
        if(q_number === 9)
        {

            // var obj = {level:quests[0].Difficulty,email:user.email,total:totalcorrect};
            // var js = JSON.stringify(obj);

            var obj = {email:user.email,questions:quests,choices:choices,correct:correctAnswers,level:quests[0].Difficulty,score:totalcorrect};
            var js = JSON.stringify(obj);
            
            try {
                // const response = await fetch('http://localhost:5000/api/totalCorrect',
                //     {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
    
                // var res = JSON.parse(await response.text());

                const response = await fetch('http://localhost:5000/api/makingHistory',
                    {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
    
                var res = JSON.parse(await response.text());
                
                if(res.error !== "")
                {
                    setMessage("Unable to save total");
                    return;
                }
    
                // localStorage.setItem('questions', JSON.stringify(res));
                // console.log(JSON.parse(localStorage.getItem('questions')));
                window.location.href = '/QuizCompleted';
                
            }
            catch(e) {
                alert(e.toString());
                return;
            }

            return;
        }
        q_number++;
        if(q_number !== 10)
        {
            setQuestion(quests[q_number].Question);
            setOptionA(quests[q_number].A);
            setOptionB(quests[q_number].B);
            setOptionC(quests[q_number].C);
            setOptionD(quests[q_number].D);
            setNumber(q_number+1);
        }
        

    };


    return(
      <div id="quiz-question" className="col text-center" onLoad={doQuiz}>
        <br></br>
        {/* <h4>Question {number} of 10</h4> */}
        <div className="center">
                    <Form className="quizform">
                    <h4>Question {number} of 10</h4>
                    <div>
                        <span className="lala">{question}</span>
                    </div>
                    <br></br>
                    <div className="option">
                        <Figure>
                            <Figure.Image
                            width={40}
                            height={40}
                            alt="<image>"
                            src={a}
                            />
                        </Figure>
                        &nbsp;&nbsp;
                        <Button id="A" className="quiz option-text" size="lg" block onClick={answerSelect}>
                            <span id="A">{optionA}</span>
                        </Button>
                    </div>
                    
                    <br></br>
                    <div className="option">
                        <Figure>
                            <Figure.Image
                            width={40}
                            height={40}
                            alt="<image>"
                            src={b}
                            />
                        </Figure>
                        &nbsp;&nbsp;
                        <Button id="B" className="quiz option-text" size="lg" block onClick={answerSelect}>
                            <span id="B">{optionB}</span>
                        </Button>
                    </div>
                    <br></br>
                    <div className="option">
                        <Figure>
                            <Figure.Image
                            width={40}
                            height={40}
                            alt="<image>"
                            src={c}
                            />
                        </Figure>
                        &nbsp;&nbsp;
                        <Button id="C" className="quiz option-text" size="lg" block onClick={answerSelect}>
                            <span id="C">{optionC}</span>
                        </Button>
                    </div>
                    <br></br>
                    <div className="option">
                        <Figure>
                            <Figure.Image
                            width={40}
                            height={40}
                            alt="<image>"
                            src={d}
                            />
                        </Figure>
                        &nbsp;&nbsp;
                        <Button id="D" className="quiz option-text" size="lg" block onClick={answerSelect}>
                            <span id="D">{optionD}</span>
                        </Button>
                    </div>
                    <br></br>
                    
                    <span id="loginResult">{message}</span>
                    {/* <Button onClick={doQuiz}>Next</Button> */}
                    <hr></hr>
                    
                    </Form>
                </div>
        
      </div>
   );
};

export default Quiz;