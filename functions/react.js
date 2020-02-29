exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: data,
  });
}

const data = {
  "title": "React questions for interviews",
  "cards": [
    {
      "question": "What is virtual DOM?",
      "answer": "It is a in-memory representation of the real DOM."
    },
    {
      "question": "What is Reconciliation?",
      "answer": "It is the process of sync the virtual DOM with the real DOM. It happens between the render function and the displaying of the elements"
    },
    {
      "question": "What are the differences between a class component and functional component?",
      "answer": "A Class Component can use local states and a Functional Component just receive the props."
    },
    {
      "question": "What are refs?",
      "answer": "Ref is a property of components that allow you access the instance of this DOM element."
    },
    {
      "question": "How refs are used for in React?",
      "answer": "You can add a property ref that is a function wich will receive a DOM element as first argument."
    },
    {
      "question": "How events are handled in React?",
      "answer": "Every browser event is turned into a SyntheticEvent, so it works identicallly in every browser. With this we don't have cross browser compatibility issues."
    },
    {
      "question": "What is the difference between state and props?",
      "answer": "Besides being both plain javascript objects, they have diferences in funcionality. Props are passed to components like parameters, while state is managed inside the component."
    },
    {
      "question": "How to create refs?",
      "answer": "You can create a ref in the component constructor using React.createRef()."
    },
    {
      "question": "What are Higher-Order components?",
      "answer": "A higher-order component is a function that takes a component and returns a new component."
    },
    {
      "question": "What is the purpose of using super method with props argument?",
      "answer": "A child class constructor cannot make use of this reference until super method has been called (Especially this.props). The same applies for ES6 sub-classes as well."
    },
    {
      "question": "What are controlled components?",
      "answer": "Controlled Components don't keep their own state. The value of an input, for example, is controlled by the component that contains the form."
    },
    {
      "question": "What can you tell me about JSX?",
      "answer": "JSX is a new dialect of Javascript that represents raw HTML elements. It needs to be transpiled to traditional Javascript in order to be read using Babel and WebPack."
    },
    {
      "question": "Why should not we update the state directly?",
      "answer": "Because it will not trigger a re-render in the component. You need to use this.setState() in order to do it."
    },
    {
      "question": "What are the different phases of ReactJS component lifecycle?",
      "answer": "There are four: Initialization, mounting, updating and unmounting."
    },
    {
      "question": "Initialization Phase",
      "answer": "Sets the initial state and default props of the component."
    },
    {
      "question": "Mounting Phase",
      "answer": "When the component is ready to mount in the DOM. Runs the functions componentWillMount, render and componentDidMount"
    },
    {
      "question": "Updating Phase",
      "answer": "After being mounted the component can be updated by changes in the props or in the state. Runs the functions shouldComponentUpdate, componentWillUpdate and componentDidUpdate. In the case of changes in the Props, runs componentWillReceiveProps before."
    },
    {
      "question": "Unmounting Phase",
      "answer": "When the component is removed from the DOM. Runs componentWillUnmount."
    },
    {
      "question": "componentWillMount",
      "answer": "Executes just before first render."
    },
    {
      "question": "componentDidMount",
      "answer": "Executes after the first render. Can be used to do requests and setup event listeners."
    },
    {
      "question": "componentWillReceiveProps",
      "answer": "Executes when props changes and can be used to trigger changes in state."
    },
    {
      "question": "shouldComponentUpdate",
      "answer": "Executes before componentWillUpdate. If a change in the props or state makes not necessary to re-render the component you can return false so you improve the performance. Returns true by default."
    },
    {
      "question": "componentWillUpdate",
      "answer": "Executes before re-render."
    },
    {
      "question": "componentDidUpdate",
      "answer": "Executes after re-render."
    },
    {
      "question": "componentWillUnmount",
      "answer": "Executes before unmount. Can be used to cancel network requests and remove associated event listeners."
    },
    {
      "question": "What do these three dots (...) in React do?",
      "answer": "It is called property spread notation and it can pass the properties of an object to a component. It can also be used to create new objects with the properties of an existing object."
    },
    {
      "question": "What are advantages of using React Hooks?",
      "answer": "It allows you to manage the state of an functional component and use React without classes, in a less verbose way. Custom Hooks also allow you to reuse state logic across multiple components."
    },
    {
      "question": "What is useState() in React?",
      "answer": "It is a built-in hook. It returns a tuple with two parameters: The first is the current state and the second with a function to update this state."
    },
    {
      "question": "What is StrictMode in React?",
      "answer": "It is a helper component (<StrictMode />) that helps you to write better components. It warns you in the console when components wrapped don't follow good practices, deprecated methods and identify potential risks."
    },
    {
      "question": "Why do class methods need to be bound to a class instance?",
      "answer": "So the context of 'this' inside de method is the same of the component instance, with is expected."
    },
    {
      "question": "What is prop drilling?",
      "answer": "Is when a deeply nested component needs the data from a higher component and you pass this data through all the components in the way. This turns the code complicated and harder to maintain."
    },
    {
      "question": "How can you avoid prop drilling?",
      "answer": "You can use Context to share data with all the components tree."
    },
    {
      "question": "What is the Flux Pattern?",
      "answer": "Flux Pattern targets to enforce data integrity and a unidirectional cycle. He does that by using actions dispatched by the view that changes a store in a defined way. The view uodates itself by listening to the changes in a store."
    },
    {
      "question": "What is the difference between a controlled component and an uncontrolled component?",
      "answer": "In a Controlled Component the data state is controlled by React. Do other is controlled by itself, by the DOM. It is good practice to use controlled components, so you can have more control over what happens."
    },
    {
      "question": "What is the React Context?",
      "answer": "It is an API you can use to pass data through all the components tree."
    },
    {
      "question": "What is React Fiber?",
      "answer": "It is the new reconciliation engine, wich enables the virtual DOM to do incremental rendering, so it can split the rendering into chunks"
    },
    {
      "question": "How to apply validation on Props in ReactJS?",
      "answer": "You can use React.PropTypes to validate types and required props. You can also use Flow or TypeScript for advanced typings."
    },
    {
      "question": "What is the difference between using constructor vs getInitialState in React?",
      "answer": "Constructor is used to declare the state in ES6 while getInitialState is used to declare the state using React.createClass()."
    },
    {
      "question": "When is it important to pass props to super(), and why?",
      "answer": "When you want to use this.props inside the constructor. Important to notice that this doesn't affect this.props outside of the constructor."
    },
    {
      "question": "How to conditionally add attributes to React components?",
      "answer": "React omits an attribute if its value is not truly"
    },
    {
      "question": "How would you go about investigating slow React application rendering?",
      "answer": "You can use two tools: React.memo() and PureComponents. They compare the change in props so don't render the component unless really necessary."
    },
    {
      "question": "When would you use StrictMode component in React?",
      "answer": "StrictMode warns you about problems in the nested components, so it can help to find bugs and bad practices."
    },
    {
      "question": "What is a pure function?",
      "answer": "A pure function doesn't depende or modify variables out of scope. So, given some props, it will render exact the same."
    },
    {
      "question": "How does React renderer work exactly when we call setState?",
      "answer": "It works in two steps: First they render a new Virtual DOM, called after the shouldComponentUpdate returns true. After, if there is any change between the Virtual DOM and the native DOM, it changes the native DOM."
    },
    {
      "question": "How to avoid the need for binding in React?",
      "answer": "You can use arrow functions so the context of the method is the same as the class."
    },
    {
      "question": "What is Redux?",
      "answer": "It is a state container for javascript that follows the Flux Pattern."
    },
    {
      "question": "What is the difference between a Presentational component and a Container component?",
      "answer": "Presentational components concerns about presentation, styles. They barely uses their own state. Container components concerns about funcionality and manages the state."
    },
    {
      "question": "What are error boundaries in ReactJS (16)?",
      "answer": "Are React components that catch errors in the tree. Any class component can be an error coundary if adds the function componentDidCatch()."
    },
    {
      "question": "Why ReactJS uses className over class attribute?",
      "answer": "Because class is a keyword in javascript."
    },
    {
      "question": "How to access redux store outside a react component?",
      "answer": "Just export the module created by the createStore()."
    },
    {
      "question": "Why would you use forceUpdate in a React component?",
      "answer": "In case React is not detecting a condition to change. But this is not usual and should not be necessary."
    }
  ]
}