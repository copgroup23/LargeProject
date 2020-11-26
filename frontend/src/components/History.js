import React from 'react';
import { Table, Card, Button, Modal, Pagination } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";



function History()
{
    var history = JSON.parse(localStorage.getItem('history'));
    var user = JSON.parse(localStorage.getItem('user_data'));
    var data = [];
    
    
    // const doHistory = event =>
    // {
    //     event.preventDefault();
    //     console.log("akakakakkakakaka");
    // };

    const doView = event =>
    {
        event.preventDefault();
        console.log(event.target.id);
        var id = history.history[event.target.id]._id;
        localStorage.setItem('delete_id',JSON.stringify(id));
        var view = history.history[event.target.id].Questions;
        localStorage.setItem('viewquestions',JSON.stringify(view));
        var picked = history.history[event.target.id].Choices;
        localStorage.setItem('picked',JSON.stringify(picked));
        window.location.href = '/ViewQuiz';
    };

    

    var i = 0;
    var length = history.total;
    
    let rows = [];
    for (i = length-1; i >= 0; i--){
        let rowID = `row${i}`
        let cell = []
        cell.push(<td>{length-i}.</td>)
        cell.push(<td>Level {history.history[i].Difficulty}</td>)
        cell.push(<td>{history.history[i].Score}0/100</td>)
        // cell.push(<td>{history.history[i].Date}</td>)
        cell.push(<td>
            <Button id={i} variant="outline-primary" size="sm" onClick={doView}>
                View
            </Button>&nbsp;&nbsp;
            </td>)
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }

    return(
        <div className="col text-center">
            <br></br>
            <Card>
                <Card.Body>
                <h3>Past Quizzes</h3>
                <br></br>
                <Table striped bordered>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Difficulty Level</th>
                        <th>Total Score</th>
                        {/* <th>Date</th> */}
                        <th></th>
                        </tr>
                    </thead>
                <tbody id="search-results">{rows}</tbody>
                </Table>
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
                
            </Card>
            

        </div>
    );

    
    
};

export default History;
