import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' font-serif p-5 bg-green-500 text-white'>
                <h2 className='text-3xl'>1.What are the different ways to manage a state in a React application?</h2>
                <h4 className='text-2xl'>Ans: The Four Kinds of React State to Manage
                 Local state. Global state. Server state. URL state. Logical, Server, Form, Navigation, and Browser and the main ways to handle them. Also, it will help 25.12% of the developers who would like to learn React in the future.</h4>
            </div>
            <br />
            <div className=' font-serif p-5 bg-green-500 text-white'>
                <h2 className='text-3xl'>2.How does prototypical inheritance work?</h2>
                <h4 className='text-2xl'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</h4>
            </div>
            <br />
            <div className=' font-serif p-5 bg-green-500 text-white'>
                <h2 className='text-3xl'>3.What is a unit test? Why should we write unit tests?</h2>
                <h4 className='text-2xl'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</h4>
            </div>
            <br />
            <div className=' font-sans p-5 bg-green-500 text-white'>
                <h2 className='text-3xl'>4.React vs. Angular vs. Vue?</h2>
                <h4 className='text-2xl'>Ans: How is React different from Angular? React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size <br/>
                React requires solid JavaScript skills, while Vue. js is more oriented to novice developers. Similar to React, Vue. js enables writing with JSX, but the components are written with HTML templates </h4>
            </div>
        </div>
    );
};

export default Blog;