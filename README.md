# PassingDataBwComponents_UsingReactJS
Created with CodeSandbox

Props: 

In React props is short for properties. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.
The primary purpose of props in React is to provide following component functionality:
	• Pass custom data to your React component.
	• Trigger "state" changes.
	• Use via this.props.reactProp inside component's render() method.


State:
this.setState() - function to call and state values
Props shouldn't’t change, so state steps up. Normally components don’t have state and so are referred to as stateless. A component using state is known as state ful. Feel free to drop that little titbit at parties and watch people edge away from you. So state is used so that a component can keep track of information in between any renders that it does. When you set State it updates the state object and then re-renders the component. 

State less Component - is not extended with components
State full Component - classes extending with components


REDUX-container component
Redux is a predictable state container for JavaScript apps.
Redux makes it easy to manage the state of your application. Another way of looking at this – it helps you manage the data you display and how you respond to user actions.

In Redux, you dispatch actions. These actions tell a function (called reducer) to update the state. Redux docs also recommend not mutating the state. Each action instructs the reducer to replace the existing state with a new version.
You now have a record of every action dispatched by the user. This is what allows us to do things like time travel debugging with Redux. More on that in upcoming articles.


FLUX-
Redux is a modified implementation of the Flux architecture.
There are many similarities between the two, but they are not the same.
Both Redux and Flux prescribe not mutating the application state with the UI. They recommend a function that does that for you.
The biggest difference is that Flux has many stores. Redux has ONLY one root store.



