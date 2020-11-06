import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';


function Home()
{
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [message,setMessage] = useState('');

    const doHome = async event => 
    {
        event.preventDefault();
        const level = event.target.id;

        var obj = {difficulty:level};
        var js = JSON.stringify(obj);

        try {
            const response = await fetch('http://localhost:5000/api/findQuestions',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if(res.length === 0)
            {
                setMessage("Unable to retrieve questions");
                return;
            }

            localStorage.setItem('questions', JSON.stringify(res));
            console.log(JSON.parse(localStorage.getItem('questions')));
            window.location.href = '/Quiz';
            
        }
        catch(e) {
            alert(e.toString());
            return;
        }
        
    };

    
    return(
       <div>
           <br></br>
           <span id="questionSearch">{message}</span>
           <div className="col text-center">
           <Button className="quiz1 col text-center"
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            size="lg"
            >
            Level 1
            </Button>
            <Collapse in={open1}>
                <div id="example-collapse-text" className="quizcollapse">
                **Level 1 description**
                <br></br>
                <br></br>
                <div className="col text-center">
                    <Button id="1" className="startButton" onClick={doHome}>
                        Start
                    </Button>
                </div>
                </div> 
            </Collapse>
            </div>
            <div className="col text-center">
            <br></br>
            <Button className="quiz2 col text-center"
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            size="lg"
            >
            Level 2
            </Button>
            <Collapse in={open2}>
                <div id="example-collapse-text" className="quizcollapse">
                **Level 2 description**
                <br></br>
                <br></br>
                <div className="col text-center">
                    <Button id="2" className="startButton" onClick={doHome}>
                        Start
                    </Button>
                </div>
                </div>
            </Collapse>
            </div>
            <div className="col text-center">
            <br></br>
            <Button className="quiz3 col text-center"
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
            size="lg"
            >
            Level 3
            </Button>
            <Collapse in={open3}>
                <div id="example-collapse-text" className="quizcollapse">
                **Level 3 description**
                <br></br>
                <br></br>
                <div className="col text-center">
                    <Button id="3" className="startButton" onClick={doHome}>
                        Start
                    </Button>
                </div>
                </div>
            </Collapse>
            </div>
            <div className="col text-center">
            <br></br>
            <Button className="quiz4 col text-center"
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open4}
            size="lg"
            >
            Level 4
            </Button>
            <Collapse in={open4}>
                <div id="example-collapse-text" className="quizcollapse">
                **Level 4 description**
                <br></br>
                <br></br>
                <div className="col text-center">
                    <Button id="4" className="startButton" onClick={doHome}>
                        Start
                    </Button>
                </div>
                </div>
            </Collapse>
            </div>
            <div className="col text-center">
            <br></br>
            <Button className="quiz5 col text-center"
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text"
            aria-expanded={open5}
            size="lg"
            >
            Level 5
            </Button>
            <Collapse in={open5}>
                <div id="example-collapse-text" className="quizcollapse">
                **Level 5 description**
                <br></br>
                <br></br>
                <div className="col text-center">
                    <Button id="5" className="startButton" onClick={doHome}>
                        Start
                    </Button>
                </div>
                </div>
            </Collapse>
            <br></br>
            </div>
       </div>
       
    );
};

export default Home;