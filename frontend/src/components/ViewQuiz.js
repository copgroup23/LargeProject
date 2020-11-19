import React, {useState} from 'react';
import { Button, Card, CardDeck, Modal } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

var del_id = JSON.parse(localStorage.getItem('delete_id'));
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           Are you sure you want to delete the history of this quiz attempt?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button id={props.id} onClick={doDelete} variant="danger">Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const doDelete = async event =>
  {
    event.preventDefault();
    var obj = {_id:del_id};
    console.log(del_id);
    var js = JSON.stringify(obj);
    
    try {
        const response = await fetch('http://localhost:5000/api/deleteQuiz',
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

        var res = JSON.parse(await response.text());
        if(res.error !== "")
        {
            console.log("error");
        }

        var user = JSON.parse(localStorage.getItem("user_data"));
        var obj2 = {email:user.email};
        var js2 = JSON.stringify(obj2);
            
        try {
            const response = await fetch('http://localhost:5000/api/getHistory',
                {method:'POST',body:js2,headers:{'Content-Type': 'application/json'}});
    
            var res = JSON.parse(await response.text());
            localStorage.setItem('history', JSON.stringify(res));
                
        }
        catch(e) {
            alert(e.toString());
            return;
        }
        window.location.href = '/History';
            
        
            
    }
    catch(e) {
        alert(e.toString());
        return;
    }
  };

function ViewQuiz()
{
    var quests = JSON.parse(localStorage.getItem('viewquestions'));
    var choices = JSON.parse(localStorage.getItem('picked'));
    
    const [modalShow, setModalShow] = React.useState(false);
    var total = 0;
    var compare = [];
    var styles = [];
    var i = 0;

    for(i = 0; i < 10; i++)
    {
        if(quests[i].CorrectAnswer === choices[i])
        {
            compare.push(10);
            styles.push("rgb(0, 180, 0)");
        }
        else
        {
            compare.push(0);
            styles.push("red");
        }
        total += compare[i];
    }
    var color = "";
    if(total <= 50) color = "red";
    else if(total > 50 && total < 80) color = "rgb(211, 152, 43)";
    else if(total >= 80) color = "rgb(0, 180, 0)";
    
    
    return(
      <div>
          <br></br>
          
          <h3 className="col text-center" style={{color: color}}>Total: {total}/100</h3>
          <br></br>
          <br></br>
        <CardDeck>
        <Card className="result-card">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 1</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[0].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[0].A}
            </Card.Text>
            <Card.Text>
                B) {quests[0].B}
            </Card.Text>
            <Card.Text>
                C) {quests[0].C}
            </Card.Text>
            <Card.Text>
                D) {quests[0].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[0]}
                <br></br>
                Correct Choice: {quests[0].CorrectAnswer}
                <br></br>
                <div style={{color: styles[0]}}>Score: {compare[0]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 2</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[1].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[1].A}
            </Card.Text>
            <Card.Text>
                B) {quests[1].B}
            </Card.Text>
            <Card.Text>
                C) {quests[1].C}
            </Card.Text>
            <Card.Text>
                D) {quests[1].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[1]}
                <br></br>
                Correct Choice: {quests[1].CorrectAnswer}
                <br></br>
                <div style={{color: styles[1]}}>Score: {compare[1]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 3</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[2].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[2].A}
            </Card.Text>
            <Card.Text>
                B) {quests[2].B}
            </Card.Text>
            <Card.Text>
                C) {quests[2].C}
            </Card.Text>
            <Card.Text>
                D) {quests[2].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[2]}
                <br></br>
                Correct Choice: {quests[2].CorrectAnswer}
                <br></br>
                <div style={{color: styles[2]}}>Score: {compare[2]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 4</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[3].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[3].A}
            </Card.Text>
            <Card.Text>
                B) {quests[3].B}
            </Card.Text>
            <Card.Text>
                C) {quests[3].C}
            </Card.Text>
            <Card.Text>
                D) {quests[3].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[3]}
                <br></br>
                Correct Choice: {quests[3].CorrectAnswer}
                <br></br>
                <div style={{color: styles[3]}}>Score: {compare[3]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 5</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[4].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[4].A}
            </Card.Text>
            <Card.Text>
                B) {quests[4].B}
            </Card.Text>
            <Card.Text>
                C) {quests[4].C}
            </Card.Text>
            <Card.Text>
                D) {quests[4].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[4]}
                <br></br>
                Correct Choice: {quests[4].CorrectAnswer}
                <br></br>
                <div style={{color: styles[4]}}>Score: {compare[4]}/10</div>
            </Card.Footer>
        </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 6</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[5].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[5].A}
            </Card.Text>
            <Card.Text>
                B) {quests[5].B}
            </Card.Text>
            <Card.Text>
                C) {quests[5].C}
            </Card.Text>
            <Card.Text>
                D) {quests[5].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[5]}
                <br></br>
                Correct Choice: {quests[5].CorrectAnswer}
                <br></br>
                <div style={{color: styles[5]}}>Score: {compare[5]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 7</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[6].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[6].A}
            </Card.Text>
            <Card.Text>
                B) {quests[6].B}
            </Card.Text>
            <Card.Text>
                C) {quests[6].C}
            </Card.Text>
            <Card.Text>
                D) {quests[6].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[6]}
                <br></br>
                Correct Choice: {quests[6].CorrectAnswer}
                <br></br>
                <div style={{color: styles[6]}}>Score: {compare[6]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 8</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[7].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[7].A}
            </Card.Text>
            <Card.Text>
                B) {quests[7].B}
            </Card.Text>
            <Card.Text>
                C) {quests[7].C}
            </Card.Text>
            <Card.Text>
                D) {quests[7].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[7]}
                <br></br>
                Correct Choice: {quests[7].CorrectAnswer}
                <br></br>
                <div style={{color: styles[7]}}>Score: {compare[7]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 9</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[8].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[8].A}
            </Card.Text>
            <Card.Text>
                B) {quests[8].B}
            </Card.Text>
            <Card.Text>
                C) {quests[8].C}
            </Card.Text>
            <Card.Text>
                D) {quests[8].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[8]}
                <br></br>
                Correct Choice: {quests[8].CorrectAnswer}
                <br></br>
                <div style={{color: styles[8]}}>Score: {compare[8]}/10</div>
            </Card.Footer>
        </Card>
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
            <Card.Title className="col text-center">Question 10</Card.Title>
            <br></br>
            <Card.Text>
                <div>{quests[9].Question}</div>
            </Card.Text>
            <Card.Text>
                A) {quests[9].A}
            </Card.Text>
            <Card.Text>
                B) {quests[9].B}
            </Card.Text>
            <Card.Text>
                C) {quests[9].C}
            </Card.Text>
            <Card.Text>
                D) {quests[9].D}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                You Picked: {choices[9]}
                <br></br>
                Correct Choice: {quests[9].CorrectAnswer}
                <br></br>
                <div style={{color: styles[9]}}>Score: {compare[9]}/10</div>
            </Card.Footer>
        </Card>
        </CardDeck>
        <br></br>
        {/* <Button>
            <a href="/history" className="col text-left back"><BsArrowLeft></BsArrowLeft>Back to History</a>
        </Button> */}
        <Button href="/history" className="back">
            <BsArrowLeft></BsArrowLeft>Back to History
        </Button>
        <Button variant="danger" className="back right2" onClick={(e) => setModalShow(true)}>
            <BsTrash></BsTrash>
        </Button>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <br></br>
        <br></br>
      </div>
   );
};

export default ViewQuiz;
