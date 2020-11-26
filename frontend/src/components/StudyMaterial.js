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
import op from '../images/op.PNG';
import op2 from '../images/op2.PNG';
import op3 from '../images/op3.PNG';
import op4 from '../images/op4.PNG';
import op5 from '../images/op5.PNG';
import op6 from '../images/op6.PNG';
import dec from '../images/dec.PNG';
import ifs from '../images/ifs.PNG';
import ifel from '../images/ifel.PNG';
import ifelel from '../images/ifelel.PNG';
import nest from '../images/nest.PNG';
import sw from '../images/switch.PNG';
import nsw from '../images/nsw.PNG';
import loop from '../images/loop.PNG';
import whsyn from '../images/wh.PNG';
import dosyn from '../images/dosyn.PNG';
import nff from '../images/nestfor.PNG';
import nww from '../images/nestwh.PNG';
import ndw from '../images/nestdw.PNG';
// import op3 from '../images/op3.PNG';
// import op4 from '../images/op4.PNG';
// import op5 from '../images/op5.PNG';
// import op6 from '../images/op6.PNG';
// import dec from '../images/dec.PNG';
// import ifs from '../images/ifs.PNG';
// import ifel from '../images/ifel.PNG';
// import ifelel from '../images/ifelel.PNG';
// import nest from '../images/nest.PNG';
// import sw from '../images/switch.PNG';
// import nsw from '../images/nsw.PNG';
// import loop from '../images/loop.PNG';
// import whsyn from '../images/wh.PNG';

function StudyMaterial()
{

    return(
        <html  id="top">
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
            <a href="#top">Jump to the top of page</a>
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
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-3">Operators</h4>
            <p>&emsp;An operator is a symbol that tells the compiler to perform specific mathematical or logical
manipulations. C language is rich in built-in operators and provides the following types of
operators:
<br></br>
<ul>
<li>Arithmetic Operators: Let variables A = 10 and B = 20 <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op}
                />
            </Figure></div></li>
<li>Relational Operators: Let variables A = 10 and B = 20<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op2}
                />
            </Figure></div></li>
<li>Logical Operators: Let variables A = 1 and B = 0 <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op3}
                />
            </Figure></div></li>
<li>Bitwise Operators: Let variables A = 60 and B = 13 <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op4}
                />
            </Figure></div></li>
<li>Assignment Operators: These are following assignment operators supported by C language<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op5}
                />
            </Figure></div></li>
<li>Misc Operators:<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={op6}
                />
            </Figure></div></li>
</ul></p>
<a href="#top">Jump to the top of page</a>
<br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-4">Decision Making</h4>
            <p>&emsp;Decision making structures require that the programmer specify one or more
conditions to be evaluated or tested by the program, along with a statement or statements
to be executed if the condition is determined to be true, and optionally, other statements to
be executed if the condition is determined to be false.<br></br>
&emsp;Following is the general form of a typical decision making structure found in most of the
programming languages:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={300}
                height={400}
                alt="<image>"
                src={dec}
                />
            </Figure></div>
            <h6>if Statement:</h6>
            <p>An if statement consists of a boolean expression followed by one or more statements. Following is the syntax of an if-block:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={ifs}
                />
            </Figure></div>
            <h6>if-else Statement:</h6>
            <p>An if statement can be followed by an optional else statement, which executes when the
boolean expression is false. Following is the syntax of an if-else block:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={ifel}
                />
            </Figure></div>
            <h6>The if...else if...else Statement:</h6>
            <p>An if statement can be followed by an optional else if...else statement, which is very
useful to test various conditions using single if...else if statement. Following is the syntax of an if...else if...else block:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={ifelel}
                />
            </Figure></div>
            <h6>Nested if statements:</h6>
            <p>It is always legal in C programming to nest if-else statements, which means you can use
one if or else if statement inside another if or else if statement(s). Following is the syntax:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={nest}
                />
            </Figure></div>
            <h6>switch Statement:</h6>
            <p>A switch statement allows a variable to be tested for equality against a list of values. Each
value is called a case, and the variable being switched on is checked for each switch case. Following is the syntax:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={sw}
                />
            </Figure></div>
            <h6>Nested switch statements:</h6>
            <p>It is possible to have a switch as part of the statement sequence of an outer switch.
Even if the case constants of the inner and outer switch contain common values, no
conflicts will arise. Following is the syntax:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={nsw}
                />
            </Figure></div>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-5">Loops</h4>
            <p>&emsp;There may be a situation, when you need to execute a block of code several number
of times. In general, statements are executed sequentially: The first statement in a
function is executed first, followed by the second, and so on.<br></br>
&emsp;Programming languages provide various control structures that allow for more complicated
execution paths.<br></br>
&emsp;A loop statement allows us to execute a statement or group of statements multiple times
and following is the general form of a loop statement in most of the programming
languages
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={300}
                height={400}
                alt="<image>"
                src={loop}
                />
            </Figure></div>
            <h6>while loop in C:</h6>
            <p>A while loop statement in C programming language repeatedly executes a target
statement as long as a given condition is true. Syntax:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={whsyn}
                />
            </Figure></div>
            <h6>for loop in C:</h6>
            <p>A for loop is a repetition control structure that allows you to efficiently write a loop that
needs to execute a specific number of times.
</p><br></br>
            <h6>do...while loop in C:</h6>
            <p>Unlike for and while loops, which test the loop condition at the top of the loop,
the do...while loop in C programming language checks its condition at the bottom of the
loop.<br></br>
A do...while loop is similar to a while loop, except that a do...while loop is guaranteed to
execute at least one time.</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={dosyn}
                />
            </Figure></div>
            <h6>Nested Loops in C:</h6>
            <p>C programming language allows to use one loop inside another loop. Following section
shows few examples to illustrate the concept.</p>
<p>The syntax for a nested for loop statement in C is as follows:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={nff}
                />
            </Figure></div>
            <p>The syntax for a nested while loop statement in C programming language is as follows:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={nww}
                />
            </Figure></div>
            <p>The syntax for a nested do...while loop statement in C programming language is as
follows:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={ndw}
                />
            </Figure></div>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-6">Functions</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-7">Arrays</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-8">Pointers</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-9">Structures</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-10">Input/Output and File Handling</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-11">Recursion</h4>
            <p>...</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            </div>
            
        </div>
        </html>
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
