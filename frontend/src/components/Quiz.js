import React, { useState } from 'react';
import {Tab, Tabs, Form, Button, Figure} from 'react-bootstrap';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';


function Quiz()
{

    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");

    const doQuiz = event => 
    {
	    event.preventDefault();
        var quests = JSON.parse(localStorage.getItem('questions'));
        // alert("doQuiz() called");
        setQuestion(quests[0].Question);
        setOptionA(quests[0].A);
        setOptionB(quests[0].B);
        setOptionC(quests[0].C);
        setOptionD(quests[0].D);

    };    


    return(
      <div className="col text-center">
        <br></br>
        <div className="center">
                    <Form className="quizform">
                    <div>
                        <span>{question}</span>
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
                        <Button className="quiz option-text" size="lg" onClick={doQuiz} block>
                            <span>{optionA}</span>
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
                        <Button className="quiz option-text" size="lg" onClick={doQuiz} block>
                            <span>{optionB}</span>
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
                        <Button className="quiz option-text" size="lg" onClick={doQuiz} block>
                            <span>{optionC}</span>
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
                        <Button className="quiz option-text" size="lg" onClick={doQuiz} block>
                            <span>{optionD}</span>
                        </Button>
                    </div>
                    <br></br>
                    
                    {/* <span id="loginResult">{message}</span> */}
                    <hr></hr>
                    
                    </Form>
                </div>
        {/* <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="quizcollapse">
            <Tab eventKey="1" title="1">
                <div className="center">
                    <Form className="quizform">
                    <div className="loginlabel">
                        Question
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
                        </Button>
                    </div>
                    <br></br>
                    
                    <span id="loginResult">{message}</span>
                    <hr></hr>
                    
                    </Form>
                </div>
            </Tab>
            <Tab eventKey="2" title="2">
            <div className="center">
                    <Form className="quizform">
                    <div className="loginlabel">
                        Question
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
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
                        <Button className="quiz" size="lg" onClick={doQuiz} block>
                            Option
                        </Button>
                    </div>
                    <br></br>
                    
                    <span id="loginResult">{message}</span>
                    <hr></hr>
                    
                    </Form>
                </div>
            </Tab>
            <Tab eventKey="3" title="3">
                <div>3</div>
            </Tab>
            <Tab eventKey="4" title="4">
                <div>4</div>
            </Tab>
            <Tab eventKey="5" title="5">
                <div>5</div>
            </Tab>
            <Tab eventKey="6" title="6">
                <div>6</div>
            </Tab>
            <Tab eventKey="7" title="7">
                <div>7</div>
            </Tab>
            <Tab eventKey="8" title="8">
                <div>8</div>
            </Tab>
            <Tab eventKey="9" title="9">
                <div>9</div>
            </Tab>
            <Tab eventKey="10" title="10">
                <div>10</div>
            </Tab>
        </Tabs> */}
      </div>
   );
};

export default Quiz;
