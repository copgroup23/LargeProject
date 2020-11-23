import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {Figure} from 'react-bootstrap';
import types from '../images/types.PNG';
import inttypes from '../images/IntTypes.PNG';
import float from '../images/float.PNG';
import vars from '../images/var.PNG';
import vt from '../images/vtype.PNG';
import ve from '../images/vex.PNG';
import varsyn from '../images/varsyn.PNG';
import varsynex from '../images/varsynex.PNG';
import cons from '../images/const.PNG';
import cs from '../images/csyn.PNG';

function StudyMaterial()
{

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
            <p>&emsp;In the C programming language, data types refer to an extensive system used for
            declaring variables or functions of different types. The type of a variable determines how
            much space it occupies in storage and how the bit pattern stored is interpreted.</p>
            <br></br>
            <p>The types in C can be classified as follows:</p>
            <div className="col text-center">
            <Figure>
                <Figure.Image
                width={600}
                height={500}
                alt="<image>"
                src={types}
                />
            </Figure></div>
            <h6>Integer Types</h6>
            <p>Following table gives you details about standard integer types with its storage sizes and
value ranges:</p>
<div className="col text-center">
            <Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={inttypes}
                />
            </Figure></div>
            <h6>Floating-Point Types</h6>
            <p>Following table gives you details about standard floating-point types with storage sizes and
value ranges and their precision:
</p>
<div className="col text-center">
            <Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={float}
                />
            </Figure></div>
            <hr class="rounded"></hr>
            <h4 id="list-item-2">Variables, Contants, and Literals</h4>
            <br></br>
            <h6>Variables:</h6>
            <p>&emsp;A variable is nothing but a name given to a storage area that our programs can
manipulate. Each variable in C has a specific type, which determines the size and layout of
the variable's memory; the range of values that can be stored within that memory; and the
set of operations that can be applied to the variable.
<br></br>
&emsp;The name of a variable can be composed of letters, digits, and the underscore character. It
must begin with either a letter or an underscore. Upper and lowercase letters are distinct
because C is case-sensitive. Based on the basic types explained in previous chapter, there
will be the following basic variable types:</p>
        <div className="col text-center">
            <Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={vars}
                />
            </Figure></div>
            <p>Syntax for variable declaration:&nbsp;&nbsp;
            <Figure>
                <Figure.Image
                width={150}
                height={80}
                alt="<image>"
                src={vt}
                />
            </Figure></p>
            <p>Example of Variable Declaration:&nbsp;&nbsp;
            <Figure>
                <Figure.Image
                width={150}
                height={80}
                alt="<image>"
                src={ve}
                />
            </Figure></p>
            <p>Variables can be declared using the syntax above and can also simultaneously be initialized to a value. 
                This can be done by using the following syntax:&nbsp;&nbsp;
                <Figure>
                <Figure.Image
                width={200}
                height={100}
                alt="<image>"
                src={varsyn}
                />
            </Figure></p>
            <p>Example of Variable Declaration and Initialization:</p>
            <div className="col text-center">
            <Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={varsynex}
                />
            </Figure></div>
            <br></br>
            <h6>Constants and Literals:</h6>
            <p>&emsp;The constants refer to fixed values that the program may not alter during its
execution. These fixed values are also called literals. Constants can be of any of the basic data types like an integer constant, a floating
constant, a character constant, or a string literal. There are also enumeration
constants as well. The constants are treated just like regular variables except that their values cannot be
modified after their definition.</p>
            <p>There are two ways of defining constants:</p>
            <p>&emsp;1. Using #define preprocessor</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={200}
                height={100}
                alt="<image>"
                src={cons}
                />
            </Figure></div>
            <p>&emsp;2. Using const keyword</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={200}
                height={100}
                alt="<image>"
                src={cs}
                />
            </Figure></div>
            <br></br>
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
