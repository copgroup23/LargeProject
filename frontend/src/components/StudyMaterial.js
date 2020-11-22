import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
// import { Card, Button, CardDeck, CardGroup, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
// import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
// import { Scrollspy } from 'reactstrap-scrollspy'




function StudyMaterial()
{

  const doStudyMaterial = async event => 
    {
        event.preventDefault();        
            
    };
     

    return(
        <div>
            <br></br>
            <br></br>
            <h3 className="col text-center">Introduction  to C Programming</h3>
            <br></br>
            <div id="list-example items" className="col text-center" >
            <a className="list-group-item list-group-item-action black" href="#list-item-1"><b>Data Types</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-2"><b>Variables, Constants, and Literals</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-3"><b>Operators</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-4"><b>Decision Making</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-5"><b>Loops</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-6"><b>Functions</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-7"><b>Arrays</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-8"><b>Pointers</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-9"><b>Structures</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-10"><b>Input/Output and File Handling</b></a>
            <a className="list-group-item list-group-item-action black" href="#list-item-11"><b>Recursion</b></a>
            </div>
            <br></br>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scroll">
            <h4 id="list-item-1">Data Types</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-2">Variables, Contants, and Literals</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-3">Operators</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-4">Decision Making</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-5">Loops</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-6">Functions</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-7">Arrays</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-8">Pointers</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-9">Structures</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-10">Input/Output and File Handling</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            <h4 id="list-item-11">Recursion</h4>
            <p>...</p>
            <hr class="rounded"></hr>
            </div>
        </div>
    );
};



// Scrollspy.propTypes = {
//     names: Array<string | null>,
//     homeIndex?: number,
//     topOffset?: string | number,
//     bottomOffset?: string | number,
//     delayMs?: number,
//     children: ChildrenArray<any>,
//   }

// Scrollspy.defaultProps = {
//     homeIndex: 0,
//     topOffset: '50%',
//     bottomOffset: '40%',
//     delayMs: 50,
//   }

export default StudyMaterial;
