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
import func from '../images/func.PNG';
import funcex from '../images/funcex.PNG';
import fout from '../images/funcout.PNG';
import arrr from '../images/arrr.PNG';
import decar from '../images/decar.PNG';
import arrex from '../images/arrex.PNG';
import marr from '../images/multarr.PNG';
import arf from '../images/arrfun.PNG';
import point from '../images/point.PNG';
import pout from '../images/pout.PNG';
import psyn from '../images/psyn.PNG';
import pt from '../images/ptypes.PNG';
import poex from '../images/poex.PNG';
import poexo from '../images/poexo.PNG';
import str from '../images/str.PNG';
import strex from '../images/strex.PNG';
import strexo from '../images/strexo.PNG';
import inout from '../images/inout.PNG';
import gchar from '../images/gchar.PNG';
import gcharo from '../images/gcharo.PNG';
import pchar from '../images/pchar.PNG';
import scan from '../images/scan.PNG';
// import ifelel from '../images/ifelel.PNG';
// import nest from '../images/nest.PNG';
// import sw from '../images/switch.PNG';
// import nsw from '../images/nsw.PNG';
// import loop from '../images/loop.PNG';
// import whsyn from '../images/wh.PNG';
// import dosyn from '../images/dosyn.PNG';
// import nff from '../images/nestfor.PNG';
// import nww from '../images/nestwh.PNG';
// import ndw from '../images/nestdw.PNG';
// import func from '../images/func.PNG';
// import funcex from '../images/funcex.PNG';
// import fout from '../images/funcout.PNG';
// import arrr from '../images/arrr.PNG';
// import decar from '../images/decar.PNG';
// import arrex from '../images/arrex.PNG';
// import marr from '../images/multarr.PNG';
// import arf from '../images/arrfun.PNG';
// import point from '../images/point.PNG';
// import pout from '../images/pout.PNG';
// import psyn from '../images/psyn.PNG';
// import pt from '../images/ptypes.PNG';
// import poex from '../images/poex.PNG';

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
            <a className="list-group-item list-group-item-action black" href="#list-item-10"><b>Input and Output</b></a>
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
            <p>&emsp;Function is a group of statements that together perform a task. Every C program has at least
one function, which is main(), and all the most trivial programs can define additional
functions. You can divide up your code into separate functions. How you divide up your code among
different functions is up to you, but logically the division usually is so each function
performs a specific task.<br></br>
&emsp;A function declaration tells the compiler about a function's name, return type, and
parameters. A function definition provides the actual body of the function.<br></br>
The C standard library provides numerous built-in functions that your program can call. For
example, function strcat() to concatenate two strings, function memcpy() to copy one
memory location to another location and many more functions.<br></br>
&emsp;A function is known with various names like a method or a sub-routine or a procedure, etc. Following is the syntax to define a function:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={func}
                />
            </Figure></div>  
            <p>A function definition in C programming language consists of a function header and
a function body. Here are all the parts of a function:</p>
<ul>
    <li><b>Return Type:</b> A function may return a value. The return_type is the data type of the
value the function returns. Some functions perform the desired operations without
returning a value. In this case, the return_type is the keyword void.</li>
    <li><b>Function Name:</b> This is the actual name of the function. The function name and the
parameter list together constitute the function signature.</li>
    <li><b>Parameters:</b> A parameter is like a placeholder. When a function is invoked, you pass a
value to the parameter. This value is referred to as actual parameter or argument. The parameter list refers to the type, order, and number of the parameters of a function.
Parameters are optional; that is, a function may contain no parameters.</li>
    <li><b>Function Body:</b> The function body contains a collection of statements that define what
the function does</li>
</ul>
<br></br>
            <h6>Calling a Function:</h6>
            <p>While creating a C function, you give a definition of what the function has to do. To use a
function, you will have to call that function to perform the defined task. When a program calls a function, program control is transferred to the called function. A
called function performs defined task, and when its return statement is executed or when
its function-ending closing brace is reached, it returns program control back to the main
program.
<br></br><br></br>
To call a function, you simply need to pass the required parameters along with function
name, and if function returns a value, then you can store returned value. For example:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={funcex}
                />
            </Figure></div>  
            <p>Output of this code will be:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={fout}
                />
            </Figure></div> 
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-7">Arrays</h4>
            <p>&emsp;C programming language provides a data structure called the array, which can store
a fixed-size sequential collection of elements of the same type. An array is used to store a
collection of data, but it is often more useful to think of an array as a collection of variables
of the same type.<br></br>
&emsp;Instead of declaring individual variables, such as number0, number1, ..., and number99,
you declare one array variable such as numbers and use numbers[0], numbers[1], and ...,
numbers[99] to represent individual variables. A specific element in an array is accessed by
an index.<br></br>
&emsp;All arrays consist of contiguous memory locations. The lowest address corresponds to the
first element and the highest address to the last element.</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={arrr}
                />
            </Figure></div>  
            <p>Declaring an array of a data type:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={decar}
                />
            </Figure></div>  
            <p>This is called a single-dimensional array. The arraySize must be an integer constant
greater than zero and type can be any valid C data type. For example, to declare a 10-
element array called balance of type double, use this statement:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={arrex}
                />
            </Figure></div> 
            <p>Here is an example of passing an array to a function to find the average of all the values in the array:</p> 
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={arf}
                />
            </Figure></div>  
            <h6>Multi-Dimensional array:</h6>
            <p>C programming language allows multidimensional arrays. Here is the general form of a
multidimensional array declaration:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={marr}
                />
            </Figure></div>  
            <p>Most common Multi-dimensional array is a two dimensional array which uses two sizes.</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-8">Pointers</h4>
            <p>&emsp;Pointers in C are easy and fun to learn. Some C programming tasks are performed
more easily with pointers, and other tasks, such as dynamic memory allocation, cannot be
performed without using pointers. So it becomes necessary to learn pointers to become a
perfect C programmer. Let's start learning them in simple and easy steps.
As you know, every variable is a memory location and every memory location has its
address defined which can be accessed using ampersand (&) operator, which denotes an
address in memory.<br></br>
Consider the following example, which will print the address of the variables defined:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={point}
                />
            </Figure></div>  
            <p>The above code will produce the following output:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={pout}
                />
            </Figure></div> 
            <h6>What are pointers?</h6>
            <p>A pointer is a variable whose value is the address of another variable, i.e., direct address of
the memory location. Like any variable or constant, you must declare a pointer before you
can use it to store any variable address. The general form of a pointer variable declaration
is:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={psyn}
                />
            </Figure></div> 
            <p>Here is an example of different data types of pointers being declared:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={pt}
                />
            </Figure></div> 
            <p>There are few important operations, which we will do with the help of pointers very
frequently. (a) we define a pointer variable (b) assign the address of a variable to a
pointer and (c) finally access the value at the address available in the pointer variable. This
is done by using unary operator * that returns the value of the variable located at the
address specified by its operand. Following example makes use of these operations:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={poex}
                />
            </Figure></div> 
            <p>When the above code is compiled and executed, it produces result something as follows:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={poexo}
                />
            </Figure></div>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-9">Structures</h4>
            <p>To define a structure, you must use the struct statement. The struct statement defines a
new data type, with more than one member for your program. The format of the struct
statement is this:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={str}
                />
            </Figure></div>
            <p>To access any member of a structure, we use the member access operator (.). The
member access operator is coded as a period between the structure variable name and the
structure member that we wish to access. You would use struct keyword to define
variables of structure type. Following is the example to explain usage of structure:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={strex}
                />
            </Figure></div>
            <p>When the above code is compiled and executed, it produces the following result:</p>
            <div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={strexo}
                />
            </Figure></div>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            <hr class="rounded"></hr>
            <h4 id="list-item-10">Input and Output</h4>
            <p>&emsp;When we are saying Input that means to feed some data into program. This can
be given in the form of file or from command line. C programming language provides a set
of built-in functions to read given input and feed it to the program as per requirement.
When we are saying Output that means to display some data on screen, printer or in any
file. C programming language provides a set of built-in functions to output the data on the
computer screen as well as you can save that data in text or binary files.</p>
<p>&emsp;C programming language treats all the devices as files. So devices such as the display are
addressed in the same way as files and following three file are automatically opened when
a program executes to provide access to the keyboard and screen.</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={inout}
                />
            </Figure></div>
            <h6>The getchar() & putchar() functions:</h6>
            <p>The int getchar(void) function reads the next available character from the screen and
returns it as an integer. This function reads only single character at a time. You can use
this method in the loop in case you want to read more than one characters from the
screen.<br></br><br></br>
The int putchar(int c) function puts the passed character on the screen and returns the
same character. This function puts only single character at a time. You can use this method
in the loop in case you want to display more than one character on the screen. Check the
following example:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={gchar}
                />
            </Figure></div>
            <p>When the above code is compiled and executed, it waits for you to input some text when
you enter a text and press enter then program proceeds and reads only a single character
and displays it as follows:</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={gcharo}
                />
            </Figure></div>
            <h6>The gets() & puts() functions:</h6>
            <p>The char *gets(char *s) function reads a line from stdin into the buffer pointed to
by s until either a terminating newline or EOF.The int puts(const char *s) function writes the string s and a trailing newline to stdout.</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={pchar}
                />
            </Figure></div>
            <p>When the above code is compiled and executed, it waits for you to input some text when
you enter a text and press enter then program proceeds and reads the complete line till
end and displays it as follows:
</p>
<p>$./a.out<br></br>
Enter a value : this is test<br></br>
You entered: This is test</p><br></br>
            <h6>The scanf() and printf() functions:</h6>
            <p>The int scanf(const char *format, ...) function reads input from the standard input
stream stdin and scans that input according to format provided.
<br></br><br></br>The int printf(const char *format, ...) function writes output to the standard output
stream stdout and produces output according to a format provided.<br></br><br></br>
The format can be a simple constant string, but you can specify %s, %d, %c, %f, etc., to
print or read strings, integer, character or float respectively. There are many other
formatting options available which can be used based on requirements. For a complete
detail you can refer to a man page for these function. For now let us proceed with a simple
example which makes things clear:
</p>
<div className="col text-center"><Figure>
                <Figure.Image
                width={600}
                height={800}
                alt="<image>"
                src={scan}
                />
            </Figure></div>
            <p>When the above code is compiled and executed, it waits for you to input some text when
you enter a text and press enter then program proceeds and reads the input and displays it
as follows:</p>
            <p>$./a.out<br></br>
Enter a value : seven 7<br></br>
You entered: seven 7
</p>
            <a href="#top">Jump to the top of page</a>
            <br></br>
            
            <hr class="rounded"></hr>
            </div>
            
        </div>
        </html>
    );
};



export default StudyMaterial;
