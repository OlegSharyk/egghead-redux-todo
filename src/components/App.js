import React, { Component } from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

// export default class App extends React.Component {
//   render() {
//     const filter = this.props.location.pathname.replace(/\//g, '');

//     return (
//       <div>
//         <AddTodo />
//         <VisibleTodoList />
//         <Footer />
//       </div>
//     );
//   }
// }
